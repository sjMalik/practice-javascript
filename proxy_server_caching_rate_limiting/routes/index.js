const router = require("express").Router();
const needle = require("needle");
const url = require("url");
const apicache = require("apicache");

const API_KEY_NAME = process.env.API_KEY_NAME;
const API_KEY_VALUE = process.env.API_KEY_VALUE;
const API_BASE_URL = process.env.API_BASE_URL;
const UNIVERSITY_LIST_API = process.env.UNIVERSITY_LIST_API;

// Proxy API to hide the API KEY from Client
router.get("/weather", async (req, res, next) => {
    try {
        const params = new URLSearchParams({
            [API_KEY_NAME]: API_KEY_VALUE,
            ...url.parse(req.url, true).query
        });
        console.log(`Requested URL ${API_BASE_URL}?${params}`);
        const result = await needle('get', `${API_BASE_URL}?${params}`);
        const data = result.data;

        res.status(200).json(data);
    } catch (e) {
        next(e);
    }
});

const catche = apicache.middleware;
router.get("/universities", catche('30 seconds'), async (req, res, next) => {
    try {
        const params = new URLSearchParams({
            ...url.parse(req.url, true).query
        })

        console.log(`${UNIVERSITY_LIST_API}?${params}`)
        const result = await needle('get', `${UNIVERSITY_LIST_API}?${params}`);
        const data = result.body;

        res.status(200).json(data);
    } catch (e) {
        next(e)
    }
})

module.exports = router;
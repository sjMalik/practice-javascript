const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");
const Joi = require("joi");

app.use('/public', express.static(path.join(__dirname, 'static')));
/**
 * Allowing us to pass urlencoded forms
 * It parse the data and attches to req.body
 * extended is false because we aren't delaing with complicated object
 */
app.use(bodyParser.urlencoded({ extended: false }));
// It parse the json data and attches to req.body
app.use(bodyParser.json());
// Createing our own middleware function, will be executed whenever user makes a request
app.use((req, res, next)=> {
    req.banana = "banana";
    next();
})

app.get('/', (req, res) => {
    res.send(`Base route get value ${req.banana} from own middleware`);
});

app.get('/file', (req, res) => {
    res.sendFile(path.join(__dirname, 'static', 'index.html'));
});

app.post('/login', (req, res) => {
    let schema = Joi.object({
        email: Joi.string().trim().email().required(),   // Validate its valid email or not and also required field. The trim() method removes whitespace from both sides of a string
        password: Joi.string().min(5).max(10)
    });
    const { error, value } = schema.validate(req.body);
    if (error) {
        res.send(error.details);
    } else {
        res.json({ result: value });
    }
})

app.listen(3000);
const express = require('express');
const axios = require('axios');
const apicache = require('apicache');
const morgan = require('morgan');

const app = express();

app.use(morgan('dev'));

const cache = apicache.middleware;
app.use(cache('5 minutes'));

app.get('/', (req, res)=> {
    axios.get('https://jsonplaceholder.typicode.com/posts').then(response=> {
        res.send(response.data);
    })
});

app.listen(3000, ()=> {
    console.log('Server listening on port 3000')
})
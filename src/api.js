const express = require('express');
const serverless = require('serverless-http');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const router = express.Router();
var jsonParser = bodyParser.json();

app.use(cors({
    origin: '*'
}));

router.get('/', (req, res) => {
    res.json({
        'hello': 'hi'
    });
});

router.post('/', jsonParser, (req, res) => {
    body = JSON.stringify(req.body);
    console.log(body);
    res.send(body.toString());
});

app.use('/.netlify/functions/api',router);

module.exports.handler = serverless(app);
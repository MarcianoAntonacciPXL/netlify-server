const express = require('express');
const serverless = require('serverless-http');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const router = express.Router();
const jsonParser = bodyParser.json();
const ZOHO_URL = 'https://flow.zoho.eu/20077367626/flow/webhook/incoming?zapikey=1001.b682318d11e63f88b1131a3ad1588c1c.a9a3821150f3abc1bf8409aeb1ce9231&isdebug=false';

app.use(cors({
    origin: '*'
}));

router.get('/', (req, res) => {
    res.json({
        'hello': 'hi'
    });
});

router.post('/', jsonParser, cors({origin: '*'}), (req, res) => {
    console.log(req.body);
    res.send({
        "ok": "ok"
    })
});

app.use('/.netlify/functions/api',router);

module.exports.handler = serverless(app);
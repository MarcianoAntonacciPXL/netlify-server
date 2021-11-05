const express = require('express');
const serverless = require('serverless-http');
const bodyParser = require('body-parser');
const cors = require('cors');
const XMLHttpRequest = require('xhr2');

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

router.post('/', jsonParser, (req, res) => {
    console.log(req.body);
    const http = new XMLHttpRequest();
    http.open("POST", ZOHO_URL, true);
    //http.setRequestHeader("Content-type", "application/json");

    http.onreadystatechange = () => {
        if (http.readyState == 4 && http.status == 200) {
            res.statusCode = 200;
            res.send("record created");
        } else {
            res.send("something went wrong");
        }
    }
    
    json = JSON.stringify(req.body);
    http.send(json);   
});

app.use('/.netlify/functions/api',router);

module.exports.handler = serverless(app);
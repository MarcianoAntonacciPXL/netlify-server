const express = require('express');
const serverless = require('serverless-http');
const cors = require('cors');

const app = express();
const router = express.Router();

app.use(cors({
    origin: '*'
}));

router.get('/', (req, res) => {
    res.json({
        'hello': 'hi'
    });
});

router.post('/', (req, res) => {
    body = JSON.stringify(req.body);
    console.log(body);
    res.send("ok");
});

app.use('/.netlify/functions/api',router);

module.exports.handler = serverless(app);
const express = require('express');
const serverless = require('serverless-http');
const cors = require('cors');

const app = express();
const router = express.Router();


router.get('/', cors(), (req, res) => {
    res.json({
        'hello': 'hi'
    });
});

app.use('/.netlify/functions/api',router);

module.exports.handler = serverless(app);
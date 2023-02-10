const express = require('express')

const app = express();

const mongoose = require('mongoose');

const router = require('./routes/articles');

app.use(express.json());


app.use((req,res,next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With,Content-Type,Accept');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE');
    next();
});

app.use('/api/articles'.router);
module.exports = app
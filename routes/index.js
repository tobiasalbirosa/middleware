'use strict';
const express = require('express');
const index = express.Router();

const bodyParser = require('body-parser');
const path = require('path');
index.use(bodyParser.urlencoded({ extended: true })); 
index.use(express.static('public'));

module.exports = ((req) =>{
    index.get('/index',(req, res, next) => {
        console.log('on index');
        res.sendFile(path.join(__dirname,'../public/html/','index.html'));
    })})();
module.exports = index;
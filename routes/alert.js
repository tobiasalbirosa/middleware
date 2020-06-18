'use strict';
const express = require('express');
const alert = express.Router();

const bodyParser = require('body-parser');
const path = require('path');
alert.use(bodyParser.urlencoded({ extended: true })); 
alert.use(express.static('public'));

module.exports = ((req) =>{
    alert.get('/alert',(req, res, next) => {
        console.log('on index');
        res.sendFile(path.join(__dirname,'../public/html/','alert.html'));
    });
    alert.get('/*',(req, res, next) => {
        console.log('on * alert');
        res.sendFile(path.join(__dirname,'../public/html/','alert.html'));
    });    

})();
module.exports = alert;

'use strict';
const express = require('express');
const router = express.Router();
const index = require('../routes/index');
const alert = require('../routes/alert');

module.exports = ((req) =>{ 
    router.get('/',(req,res, next) => {
        console.log('on router /');
        res.redirect('/index');

    });
    router.get('/index',(req,res, next) => {
        console.log('on router /index');
        router.use(index);
        next();
    });
    router.get('/alert',(req,res, next) => {
        console.log('on router /alert');
        router.use(alert);
        next();
    });
    router.get('/*',(req,res, next) => {
        console.log('on router /*');
        router.use(alert);
        next();
    });

})();
module.exports = router;
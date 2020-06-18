'use strict';
const express = require('express');
const middleware = express.Router();
const router = require('../router/router');
module.exports = ((req) =>{
    middleware.use((req, res, next) => {
           if(req.status == 404){
            res.redirect('alert');   
            next();            
           }else{
        middleware.get('/',(req,res, next) => {
            console.log("on middle /");
            middleware.use(router);
            next();
        });
        middleware.get('/alert',(req,res, next) => {
            console.log("on middle /alert");
            middleware.use(router);
            next();
        });
        middleware.get('/index',(req,res, next) => {
            console.log("on middle /index");
            middleware.use(router);
            next();
        });
        }
        middleware.get('*', (req, res,next) =>{
            console.log("on middle /*");
            middleware.use(router);
            next();
            }
        )
        next();           
    });    
})();
module.exports = middleware;
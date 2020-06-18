const express = require('express');
const app = express();
const middleware = require('./middleware/middleware');;
const port = process.env.PORT || 5000;
app.use(middleware);
app.listen(port,(req,res)=>{
console.log('app listen port:', port);
});

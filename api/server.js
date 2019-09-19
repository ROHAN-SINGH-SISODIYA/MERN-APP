const express = require('express');
const app= express();
const bodyParser = require('body-parser');
const PORT=4000;
const cors =require('cors');
const config =require('./DB.js');
const mongoose = require('mongoose');
const studentRoutes=require('./route');

mongoose.Promise =global.Promise;
mongoose.connect(config.DB,{ useNewUrlParser:true }).then(
    ()=>{console.log('Database is connected')},
    err => {console.log('can not connect to the database'+err)}     
);

app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use('/student',studentRoutes);

app.listen(PORT,function(){
    console.log('server is running on port:',PORT);
});
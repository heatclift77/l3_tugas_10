const express = require('express');
const mongoose= require('mongoose');
const bodyParser = require('body-parser');
const multer = require('multer');
const upload = multer()

const product = require('./routers/Product');

const app = express()

const uri = 'mongodb://localhost:27017/arkademy';

const PORT = 5000;

app.listen(PORT, function(){
    console.log(`server running on port ${PORT}`);
    console.log('try to connect database');
    mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false,
    }).then(() => {
        console.log('database connected');
        app.use(bodyParser.json());
        app.use(bodyParser.urlencoded())
        app.use(upload.none())
        app.use('/product', product);
    })
    .catch(err => console.log(err));
});

console.log(app.listen);
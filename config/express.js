const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser')
const cors = require('cors');
const secret = 'secret';

module.exports = (app) => {
    // app.use(cors({
    //     origin: '*',
    //     // allowedHeaders: ['Content-Type', 'Authorization', 'Origin', 'X-Requested-With', 'Accept'],
    //     // exposedHeaders: ['Content-Type', 'Authorization', 'Origin', 'X-Requested-With', 'Accept'],
    //     exposedHeaders: 'Authorization', //явно трябва да му кажем 
    //     methods: ['GET','POST','DELETE','UPDATE','PUT','PATCH']
    // }));
    app.use(cors())
    
    // app.use(bodyParser.json());
    //тези двете вместо body parser
    app.use(express.json());
    app.use(express.urlencoded({
        extended: true
    }));

    app.use(cookieParser(secret));
};
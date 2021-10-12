const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser')
const cors = require('cors');
const secret = 'secret';

module.exports = (app) => {
    // corsOptions = {
    //     origin: "https://newdesire.herokuapp.com/",
    //     optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
    //  };
    //  app.use(cors(corsOptions));
    // app.use(cors({
    //     origin: '*',
    //     // allowedHeaders: ['Content-Type', 'Authorization', 'Origin', 'X-Requested-With', 'Accept'],
    //     // exposedHeaders: ['Content-Type', 'Authorization', 'Origin', 'X-Requested-With', 'Accept'],
    //     exposedHeaders: 'Authorization', //явно трябва да му кажем 
    //     methods: ['GET','POST','DELETE','UPDATE','PUT','PATCH']
    // }));
    // app.use(cors())
    
      app.use(cors({
        origin: '*',
        exposedHeaders: 'Authorization', //явно трябва да му кажем 
   
    }));
    // app.use(bodyParser.json());
    //тези двете вместо body parser
    app.use(express.json());
    app.use(express.urlencoded({
        extended: true
    }));

    app.use(cookieParser(secret));
};
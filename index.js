const config = require('./config/config');
const dbConnection = require('./config/database');
const express = require('express');
const app = require('express')();
const path = require('path');
const bodyParser = require('body-parser');

app.use(function(req, res, next) {
    res.setHeader("Content-Type", "application/json");
    next();
});
// prevents cors headaches when your react app calls your api
// serves the built version of your react app
app.use(express.static(path.join(__dirname, '/client/build')))
console.log(__dirname, '/client/build')
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/client/build/index.html'))
 
    // res.writeHeader(200, {"Content-Type": "text/html"});  
    // res.write(html);  
    // res.end();  
    // next();
});
dbConnection().then(() => {
  
    require('./config/express')(app);

    require('./config/routes')(app);
    app.use(function (err, req, res, next) {
        console.error(err);
        res.status(500).send(err.message);
        console.log('*'.repeat(90))
    });
   
    app.listen(config.port, console.log(`Listening on port ${config.port}!`))

}).catch(console.error);


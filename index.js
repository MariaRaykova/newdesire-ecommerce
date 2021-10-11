const config = require('./config/config');
const dbConnection = require('./config/database');
const express = require('express');
const app = require('express')();
const path = require('path');
const bodyParser = require('body-parser');
const port  = process.env.PORT || 9999;

app.use(function(req, res, next) {
     // Website you wish to allow to connect
     res.setHeader('Access-Control-Allow-Origin', '*');
  
     res.setHeader('Access-Control-Expose-Headers', 'Content-Type, Authorization,Origin,X-Requested-With,Accept');
     // Request methods you wish to allow
     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    //  res.setHeader('Content-Encoding', 'gzip');
     // Request headers you wish to allow
    //  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
 
     // Set to true if you need the website to include cookies in the requests sent
     // to the API (e.g. in case you use sessions)
     res.setHeader('Access-Control-Allow-Credentials', true);
 
     //res.setHeader("Content-Type", "text/html");
 
     // Pass to next layer of middleware
     next();

});
// app.get('*', function (req, res, next) {
 
//     res.set('Content-Encoding', 'gzip');
//     // res.set('Content-Type', 'text/javascript');
//     next();
//   });
// app.use(function(req, res, next) {
//     res.set('Content-Type', 'text/html');
//     next();
// });
// 'Accept': 'application/json',
// 'Content-Type': 'application/json',

// prevents cors headaches when your react app calls your api
// serves the built version of your react app
app.use(express.static(path.join(__dirname, '/client/build')))
console.log(__dirname+ '/client/build')
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname,'client', 'build', 'index.html'));
 
    // res.writeHeader(200, {"Content-Type": "text/html"});  
    // res.write(html);  
    // res.end();  
    // next();
});
app.get('*',function(req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('okay');
});
app.use(bodyParser.json());


dbConnection().then(() => {
  
    require('./config/express')(app);

    require('./config/routes')(app);
    app.use(function (err, req, res, next) {
        console.error(err);
        res.status(500).send(err.message);
        console.log('*'.repeat(90))
    });
   
    app.listen(port, console.log(`Listening on port ${port}!`))

}).catch(console.error);


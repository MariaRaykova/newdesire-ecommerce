const mongoose = require('mongoose');
const config = require('./config');
// const MongoClient = require("mongodb").MongoClient;
const dbURL = 'mongodb+srv://mraykova:maria123@cluster0.qlvbe.mongodb.net/eshop?retryWrites=true&w=majority';

//const dbURL = "mongodb+srv://mraykova:maria123@cluster0.qlvbe.mongodb.net/:27017,cluster0-mdyjt.mongodb.net:27017,cluster0-mdyjt.mongodb.net:27017/eshop?ssl=true&replicaSet=cluster0&authSource=admin&retryWrites=true&w=majority:27017,cluster0-mdyjt.mongodb.net:27017,cluster0-mdyjt.mongodb.net:27017/ehop?ssl=true&replicaSet=cluster0&authSource=admin&retryWrites=true&w=majority"
console.log("abe verno vlizam li tuk??? "+dbURL)
//const mongoUri = 'mongodb+srv://" + process.env.MONGO_USR + ":" + process.env.MONGO_PASS + "@" + process.env.MONGO_URL + "/" + process.env.MONGO_DB + "?retryWrites=true&w=majority";
module.exports = () => {
    return mongoose.connect(dbURL, { useNewUrlParser: true, useUnifiedTopology: true });
};


// module.exports = async () => {
//    const client = await new MongoClient(dbURL);
//    return client.connect();
// };





// mongoose.connection.once('open', () => {
//    console.log('MongoDB Connected');
// });
// mongoose.connection.on('error', (err) => {
//    console.log('MongoDB connection error: ', err);
// });



// const env = require('../environments/environment');

// mongoose.Promise = global.Promise;

// const mongoUri = `mongodb://${env.dbName}:${env.key}@${env.dbName}.mongo.cosmos.azure.com:${env.port}/?ssl=true&retrywrites=false&replicaSet=globaldb&maxIdleTimeMS=120000&appName=@maria-raykova@`;
// //при него е ${env.dbName}:${env.key}@${env.dbName}.documents.azure.com:${env.port}/?ssl=true
// function connect() {
//    return mongoose.connect(mongoUri, {useMongoClient: true});
// }

// module.exports ={
//     connect, mongoose
// }
//После това...
// module.exports = () => {
//     return mongoose.connect(mongoUri, {useMongoClient: true})
// }
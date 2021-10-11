const mongoose = require('mongoose');
const config = require('./config');
const dbURL = process.env.MONGODB_URI || 'mongodb+srv://mraykova:maria123@cluster0.qlvbe.mongodb.net/eshop?retryWrites=true&w=majority';
console.log("mongo " + dbURL)

module.exports = () => {
    return mongoose.connect(dbURL, { useNewUrlParser: true, useUnifiedTopology: true });
};

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
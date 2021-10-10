const mongoose = require('mongoose');
const config = require('./config');

module.exports = () => {
    return mongoose.connect(config.dbURL, { useNewUrlParser: true, useUnifiedTopology: true });
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
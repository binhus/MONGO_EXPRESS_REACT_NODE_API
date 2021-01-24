const { MongoClient } = require('mongodb');
require('dotenv').config();

const DB_NAME = process.env.DB_NAME || 'localDatabase';
const URI = process.env.MONGO_DB_URI || `mongodb://mongodb:27017/${DB_NAME}`;


module.exports = async (collectionName) => {
  const connection = await MongoClient.connect(URI, {
      useNewUrlParser: true, useUnifiedTopology: true,
    });
  return connection.db(DB_NAME).collection(collectionName);
};

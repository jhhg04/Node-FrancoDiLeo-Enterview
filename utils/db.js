const mongodb = require('mongodb');

const pool = async () => {
  try {
    return (await mongodb.MongoClient.connect('mongodb://localhost:27017/')).db(
      'partidos'
    );
  } catch (e) {
    console.error(e.stack);
  }
};

module.exports = {
  pool,
};

const mongoose = require('mongoose');

if (process.env.NODE_ENV != 'prod') {
    require('dotenv/config');
}

const {
    MONGO_HOSTNAME,
    MONGO_PORT,
    MONGO_DB
  } = process.env;

const url = `mongodb://${MONGO_HOSTNAME}:${MONGO_PORT}/${MONGO_DB}`;

const options = {
    useNewUrlParser: true,
    reconnectTries: Number.MAX_VALUE,
    reconnectInterval: 500,
    connectTimeoutMS: 10000,
    useUnifiedTopology: true,
    useCreateIndex: true,
  };

mongoose.connect(url, options, (err) => {
    if (err) {
        console.error(err)
    } else {
        console.log('Connected to mongodb')
    }
});

module.exports = mongoose;
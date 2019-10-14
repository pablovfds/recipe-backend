const mongoose = require('mongoose');

const dbUrl = process.env.DATABASE_URL || 'mongodb://localhost:27017/recipes-db'

mongoose.connect(dbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
}, (err) => {
    if (err) {
        console.error(err)
    } else {
        console.log('Connected to mongodb')
    }
});

module.exports = mongoose;
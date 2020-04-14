const mongoose = require('mongoose');
const config = require('config');

const db = config.get('mongoURI'); // Grab the connection string

const connectDB = async () => {
    try {
        await mongoose.connect(db, {
            useUnifiedTopology: true,
            useCreateIndex: true,
            useNewUrlParser: true}
        );

        console.log('MongoDB Connected...');
    } catch(err) {
        console.error(err.message);

        // Halt the process completely
        process.exit(1);
    }
}

module.exports = connectDB;
const mongoose = require('mongoose');

exports.db = () => {
    mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('MongoDB connected successfully'))
    .catch((err) => {
        console.error('DB Connection Error:', err.message);
        process.exit(1); 
    });
};

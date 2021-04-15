// This file will handle connection logic to the MongoDB database

const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://Vinay:8lU6laMCHUx27twW@cluster0-shard-00-00.otxsm.mongodb.net:27017,cluster0-shard-00-01.otxsm.mongodb.net:27017,cluster0-shard-00-02.otxsm.mongodb.net:27017/task?ssl=true&replicaSet=atlas-vdctk7-shard-0&authSource=admin&retryWrites=true&w=majority', { useNewUrlParser: true }).then(() => {
    console.log("Connected to MongoDB successfully :)");
}).catch((e) => {
    console.log("Error while attempting to connect to MongoDB");
    console.log(e);
});

// To prevent deprectation warnings (from MongoDB native driver)
mongoose.set('useCreateIndex', true);
mongoose.set('useFindAndModify', false);


module.exports = {
    mongoose
};

// 8lU6laMCHUx27twW
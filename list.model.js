const mongoose = require('mongoose');

const ListSchema = new mongoose.Schema({
    Project: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },

    Sub_Project: {
        type: String,
        required: true,
        minlength: 1,
        trim: true},

    Type_of_Work :{
            type: String,
            required: true,
            minlength: 1,
            trim: true
    },
    Hours :{
        type: Number,
        required :true,
        minlength : 0,
        trim :true

    },

    Detail :{
        type :String ,
        required :true ,
        minlenth :1,
        trim :true 
    },

    // with auth
     _userId: {
        type: mongoose.Types.ObjectId,
        required: true
    }

})

const List = mongoose.model('List', ListSchema);

module.exports = { List }
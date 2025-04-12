const mongoose = require('mongoose');
const CategorySchema = new mongoose.Schema({
    role:{
        type:String,
        required:true,
        unique:true
    },
    description: {
        type:String,
        required:true
    },
    image: {
        type:Object,
        required:true
    }

});
module.exports = mongoose.model('category', CategorySchema);
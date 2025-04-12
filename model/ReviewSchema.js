const mongoose = require('mongoose');
const ReviewSchema = new mongoose.Schema({
    user: {
        type:Object,
        required:true
    },
    product: {
        type:Object,
        required:true
    },
    resources: {
        type:Object,
        required:true
    },
    date: {
        type:Date,
        required:true
    },
    starCount: {
        type:Number,
        required:true
    },
    comment: {
        type:String,
        required:true
    }
});
module.exports = mongoose.model('review', ReviewSchema);
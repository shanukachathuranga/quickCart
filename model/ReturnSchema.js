const mongoose = require('mongoose');
const ReturnSchema = new mongoose.Schema({
    order: {
        type:Object,
        required:true,
    },
    reason: {
        type:String,
        required:true
    },
    status: {
        type:String,
        required:true
    },
    returnProcess: {
        type:Array
    },
    requestedDate: {
        type:Date,
        required:true
    },
    completedData: {
        type:String     // Refund or new Product
    }
});
module.exports = mongoose.model('return', ReturnSchema);
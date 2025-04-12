const mongoose = require('mongoose');
const RefundSchema = new mongoose.Schema({
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
    refundProcess: {
        type:Array
    },
    requestedDate: {
        type:Date,
        required:true
    },
    refundedAmount: {
        type:Number
    }
});
module.exports = mongoose.model('refund', RefundSchema);
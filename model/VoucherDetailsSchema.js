const mongoose = require('mongoose');
const VoucherDetailsSchema = new mongoose.Schema({
    voucher: {
        type:Object,
        required:true
    },
    user: {
        type:Object,
        required:true
    },
    recipient: {
        type:String,
        required:true
    },
    cost: {
        type:Object,
        required:true
    },
    qr: {
        type:Object,
        required:true
    }
});
module.exports = mongoose.model('voucherDetails', VoucherDetailsSchema);
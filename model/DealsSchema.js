const mongoose = require('mongoose');
const DealsSchema = new mongoose.Schema({
    deal: {
        type:String,
        required:true,
        unique:true
    },
    description: {
        type:String
    },
    type: {
        type:String,
        required:true
    },
    discount: {
        type:Number,
        required:true
    }
});
module.exports = mongoose.model('deal', DealsSchema);
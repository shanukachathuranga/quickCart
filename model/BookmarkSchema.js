const mongoose = require('mongoose');
const BookmarkSchema = new mongoose.Schema({
    user: {
        type:Object,
        required:true
    },
    product: {
        type:Object,
        required:true
    },
    date: {
        type:Date,
        required:true
    }
});
module.exports = mongoose.model('bookmark', BookmarkSchema);
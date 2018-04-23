// om namah shivay

const mongoose = require('mongoose');
const common = require('./common');

const user_schema = new mongoose.Schema({
    _id: mongoose.Schema.ObjectId,
    first_name: String,
    last_name: String,
    mobile: common.mobile,
    roaming_mobile: common.mobile
}, {
    collection: 'User'    
});

const user_model = mongoose.model('User', user_schema);

module.exports = {
    user_model
};
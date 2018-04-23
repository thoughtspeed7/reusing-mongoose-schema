// om namah shivay

const mongoose = require('mongoose');
const user = require('./user');

const test = () => {

    const user_model = new user.user_model();

    user_model._id = new mongoose.Types.ObjectId();
    user_model.first_name = 'Raj';
    user_model.last_name = 'Chaudhary';

    user_model.mobile.country_code = '91';
    user_model.mobile.number = '0000000000';

    user_model.roaming_mobile.country_code = '44';
    user_model.roaming_mobile.number = '1111111111';    

    console.log(`${JSON.stringify(user_model, undefined, 4)}`);

};

test();
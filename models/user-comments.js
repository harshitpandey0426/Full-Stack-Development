const mongoose=require('mongoose');
const Schema=mongoose.Schema; // it is equivalent to const {Schema}=mongoose;

const userSchema=new Schema({
    googleId: String

});

mongoose.model('users',userSchema); // it loads schema into mongoose.
const { default: mongoose } = require("mongoose");


const userSchema =new mongoose.Schema({
    displayName:{
        type:String,
        required:[true,'Name is required!'],
    },
    email:{
        type:String,
        required:[true,'Email is required!']
    },

})

module.exports = mongoose.model('User',userSchema);
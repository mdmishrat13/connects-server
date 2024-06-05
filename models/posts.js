const { default: mongoose } = require("mongoose");


const PostSchema =new mongoose.Schema({
    title:{
        type:String,
        required:[true,'Name is required!'],
    },
    email:{
        type:String,
        required:[true,'Email is required!']
    },
    post: {
        type:String,
        required:[true,'Email is required!']
    }

})

module.exports = mongoose.model('Post',PostSchema);
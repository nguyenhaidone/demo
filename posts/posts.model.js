const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
    createdAt:{
        type: Date,
        default: new Date(),
    },
    content:{
        type:String,
        required: true,
    },
    views:{
        type:Number,
        default:0,
    },
    imageUrl:{
        type: String,
        required: true,
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true,
    },
}); 

const PostModel = mongoose.model("Post",PostSchema);

module.exports = PostModel;


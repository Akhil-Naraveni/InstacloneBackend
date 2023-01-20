const mongoose = require("mongoose")
const Schema = mongoose.Schema
const ObjectId = Schema.ObjectId;


const postSchema = new Schema({
    postImage: { type: String },
    author: { type: String, required: true},
    location: { type: String, required: true},
    description: { type: String, required: true },
    date: { type: String },
    likes: Number
})

const postModel = mongoose.model("Post", postSchema)
module.exports = postModel;
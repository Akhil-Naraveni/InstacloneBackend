const express = require('express');
const Post = require("../models/postModel")

const router = express.Router()



const createPost = async (req, res) => {

    const { postImage, author, location, description } = req.body;

    let date = new Date().toLocaleDateString()
    let likes = Math.floor(Math.random() * 100)

    try {

        const post = await Post.create({ postImage, author, location, description, date, likes })
        console.log(post);
        res.status(201).json({ success: true, post, message: "Post Created Successfuly" })

    } catch (error) {
        res.status(500).json({ success: false, error: error.message })
    }
}


const getPost = async (req, res) => {

    try {
        const post = await Post.find()
        res.status(201).json({ success: true, post, message: "Posts are Successfuly Fetched" })

    } catch (error) {
        res.status(500).json({ success: false, error: error.message })
    }


}


//Create a Posts
router.post("/addpost", async (req, res) => {

    const { postImage, author, location, description } = req.body;

    let date = new Date().toLocaleDateString()
    let likes = Math.floor(Math.random() * 100)

    try {

        const post = await Post.create({ postImage, author, location, description, date, likes })
        console.log(post);
        res.status(201).json({ success: true, post, message: "Post Created Successfuly" })

    } catch (error) {
        res.status(500).json({ success: false, error: error.message })
    }
}
)

//Get all Posts
router.get("/", async (req, res) => {

    try {
        const post = await Post.find()
        res.status(201).json({ success: true, post, message: "Posts are Successfuly Fetched" })

    } catch (error) {
        res.status(500).json({ success: false, error: error.message })
    }


})



module.exports = router;
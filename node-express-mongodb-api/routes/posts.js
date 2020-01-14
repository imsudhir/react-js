const express = require('express');
const app1 = express();
// const cors = require('cors') 
const router = express.Router();
const Post = require('../models/Post')
// app1.use(cors);

// router.get('/', (re,res)=>{ 
//     res.send("hello this is posts from route....");
//     console.log("get rout hited.."); 
// })
//save post to db
router.post('/', async (req,res)=>{ 
    console.log("post route...."); 
    console.log(req.body)

    const post = new Post({
        html: req.body.title,
        css: req.body.description
    });

    try {
        const savedPost = await post.save();
        console.log(savedPost)
        res.json(savedPost);
    } catch (err) {
        res.json({message: err});
    }
    }); 
//get all post
    router.get('/', async (req, res) => {
        try {
            res.setHeader('Access-Control-Allow-Origin', '*');
            const posts = await Post.find();
            res.json(posts);
        } catch (err) {
            res.json({message: err});
            console.log(res)
        }
    })
//get specific post
router.get('/:postid', async (req,res)=>{
    try{
    res.setHeader('Access-Control-Allow-Origin', '*');
    const getpost = await Post.findById(req.params.postid);
    console.log(getpost)
    res.json(getpost);
    } catch (err) {
        res.json({message: err});
    }
});
  
//delete specific post
router.delete('/:postid', async (req,res)=>{
    try{
    const deletedPost = await Post.remove({_id:req.params.postid});
    console.log(deletedPost)
    res.json(deletedPost);
    } catch (err) {
        res.json({message: err});
    }
});
//patch 
router.patch('/:postid', async (req,res)=>{
    try{
    const updatedPost = await Post.updateOne({_id: req.params.postid}, 
        {$set: {
            title: req.body.title,
            description: req.body.description
        }}); 
    console.log(updatedPost)
    res.json(updatedPost);
    } catch (err) {
        res.json({message: err});
    }
});    
 
 
module.exports = router;

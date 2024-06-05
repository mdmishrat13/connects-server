const Posts = require("../models/posts");

const createPost = async (req, res) => {
  try {
    const {title,post, email} = req.body;
    if (!title) {
      return res.status(500).json({ errorMessage: " title is required!" });
    }
    
    if (!email) {
      return res.status(500).json({ errorMessage: "Email is required!" });
    }
    if (!post) {
      return res.status(500).json({ errorMessage: "post is required!" });
    }
    
    const newPost = new Posts({
        post,
        title,
      email,
    });
    const savePost = await newPost.save();

     return res.json({status:'Post Successful!',data:savePost});
  } catch (error) {
    return res.json(error);
  }
};


const getPosts= async(req,res)=>{
  try {
      const {email} = req.body
      const posts = await Posts.find({email})
      return res.status(200).json(posts)
  } catch (error) {
      return res.status(404).json({errorMessage:"Not Post Found!"})
  }
}

module.exports = {
  createPost,
  getPosts
};
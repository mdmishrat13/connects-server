const User = require("./../models/Users");

const createUser = async (req, res) => {
  try {
    const {displayName, email} = req.body;
    if (!displayName) {
      return res.status(500).json({ errorMessage: " Name is required!" });
    }
    
    if (!email) {
      return res.status(500).json({ errorMessage: "Email is required!" });
    }
      
    const exist = await User.findOne({ email });
    if (exist) {
      return res.status(500).json({ errorMessage: "Email already exists!" });
    }
    
    const newUser = new User({
    displayName,
      email,
    });
    const saveUser = await newUser.save();

     return res.json({status:'Registration Successful!',data:saveUser});
  } catch (error) {
    console.log(error.message)
    return res.json(error);
  }
};


const getUser= async(req,res)=>{
  try {
      const {email} = req.body
      const user = await User.findOne({email})
      if(!user){
          return res.status(404).json({errorMessage:"User not found!"})
      }
      return res.status(200).json(user)
  } catch (error) {
      return res.status(404).json({errorMessage:"User not found!"})
  }
}

module.exports = {
  createUser,
  getUser
};
import User from "../model/userModel.js";

// created user data
export const createUser = async (req, res) => {
  console.log("data ricived", req.body);

  try {
    const { email } = req.body;
    const userExist = await User.findOne({ email });
    if (userExist) {
      return res.status(400).json({ message: "User email already exists" });
    }

    const newUser = new User(req.body);
    const saveData = await newUser.save();
    if (!saveData) {
      return res.status(400).json({ message: "User not created" });
    }
    res
      .status(201)
      .json({ message: "User created successfully", data: saveData });
  } catch (err) {
    console.error("Error creating user:", err);
    res.status(500).json({ message: "Internal server error" });
  }
};

// get all user data

export const getAllUsers = async (req, res)=>{
    try{
        const userData = await User.find();
        // console.log("user data", userData);
        if(!userData || userData.length === 0){
            return res.status(400).json({message: "No user found"}); 
        }
        res.status(200).json({message: "Get all user data", data: userData})


    }catch(err){
        console.error("error getting all users:", err); 
        res.status(500).json({message: "internal server error"});
    }
}

// get user by specific id

export const getUserById = async (req, res)=>{
    try{
        const id = req.params.id;
        const userExistData = await User.findById(id);
        if(!userExistData){
            return res.status(400).json({message: "user not found"});
        }
        res.status(200).json({message: "user data", data: userExistData});
    }catch(err){
        console.error("error getting user by id:", err);
        res.status(500).json({message: "internal server error"});
    }
}

// update user data
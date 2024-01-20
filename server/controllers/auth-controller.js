 const User=require("../models/user-model");
 const bcrypt=require("bcryptjs");

const home= async (req,res)=>{
    try {
        res.status(200).send("welcome to the home page through router oops");
    } catch (error) {
        res.send("oops! error");
        console.log("home: ", error);
    }
}

const register=async (req,res)=>{
    try {
        const {username, email, phone,password}=req.body;
        const userExist= await User.findOne({email});
        if(userExist)
        {
            return res.status(400).json({message:"email already exist"});
        }
        const userCreated=await User.create({username, email, phone,password});
        res.status(201).json({message:"registration successful", token: await userCreated.generateToken(), userId: userCreated._id.toString(),});  
    } 
    catch (error) {
        // res.status(400).send("oops! error");
        // console.log("register: ", error);  
        next(error);
    }
}

const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const userExist = await User.findOne({ email });

        if (!userExist) {
            return res.status(400).json({ error: "Invalid credentials", message: "Email doesn't exist" });
        }
        
        const user=await userExist.comparePassword(password);

        if (user) {
            return res.status(200).json({
                success: true,
                message: "Password matched. Login successful.",
                token: await userExist.generateToken(),
                userId: userExist._id.toString() 
            });
        } else {
            return res.status(400).json({ error: "Invalid credentials", message: "Password doesn't match" });
        }
    } catch (error) {
        console.error("Login: ", error);
        return res.status(500).json({ error: "Internal server error", message: "Something went wrong on the server" });
    }
};


const user=async(req,res)=>
{
    try {
        const userData=req.user;
        console.log(userData);
        return res.status(200).json({userData});
    } catch (error) {
        console.log(`error from the user route ${error}`);
    }
}


module.exports={home,register,login,user};
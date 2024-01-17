 const User=require("../models/user-model");

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
        res.status(201).json({message:userCreated});  
    } 
    catch (error) {
        res.status(400).send("oops! error");
        console.log("register: ", error);  
    }
}

const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const userExist = await User.findOne({ email });

        if (!userExist) {
            return res.status(400).json({ error: "Invalid credentials", message: "Email doesn't exist" });
        }
        if (userExist.password === password) {
            return res.status(200).json({ success: true, message: "Password matched. Login successful." });
        } else {
            return res.status(400).json({ error: "Invalid credentials", message: "Password doesn't match" });
        }
    } catch (error) {
        console.error("Login: ", error);
        return res.status(500).json({ error: "Internal server error", message: "Something went wrong on the server" });
    }
};


module.exports={home,register,login};
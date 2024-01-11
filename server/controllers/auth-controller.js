 const User=require("../models/user-model")


const home= async (req,res)=>{
    try {
        res.status(200).send("welcome to the home page through router oops");
    } catch (error) {
        res.send("oops! error");
        console.log(error);
    }
}

const register=async (req,res)=>{
    try {
        console.log(req.body);
        const {username, email, phone,password}=req.body;

        const userExist= await User.findOne({email});

        if(userExist)
        {
            return res.status(400).json({message:"email already exist"});
        }

        await User.create({username, email, phone,password});

        

        res.status(200).send({message:req.body});
    } catch (error) {
        res.status(400).send("oops! error");
        console.log(error);  
    }
}

module.exports={home,register};
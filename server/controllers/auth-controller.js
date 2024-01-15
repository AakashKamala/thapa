 const User=require("../models/user-model")


const home= async (req,res)=>{
    try {
        //res.status(200).send("welcome to the home page through router oops");
        console.log("hiii");
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
            console.log(userExist.email);
            return res.status(400).json({message:"email already exist"});
        }

        await User.create({username, email, phone,password});

        

        res.status(200).send({message:req.body});
    } catch (error) {
        res.status(400).send("oops! error");
        console.log(error);  
    }
}

const login=async(req,res)=>{
    try {

        const {email, password}=req.body;

        const userExist=await User.findOne({email});

        if(!userExist)
        {
            // res.send("invalid credentials");
            console.log(userExist.email);
            return res.status(400).json({message:"email doesn't exist"});
        }
        else{
            if(userExist.password==password)
            {
                // res.send("you have successfully logged in");
                console.log(userExist.email);
                return res.status(200).json({message:"password matched"});
            }
            else{
                // res.send("invalid email or password");
                console.log(userExist.email);
                return res.status(400).json({message:"password doesn't match"});
            }
        }
    } catch (error) {
        res.send("internal server error");
        console.log("login ", error);
    }
}

module.exports={home,register,login};
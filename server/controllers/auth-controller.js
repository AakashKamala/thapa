const home= async (req,res)=>{
    try {
        res.send("welcome to the home page through router oops");
    } catch (error) {
        res.send("oops! error");
        console.log(error);
    }
}

const register=async (req,res)=>{
    try {
        console.log(req.body);
        res.status(200).json({message: req.body});
    } catch (error) {
        res.json("oops! error");
        console.log(error);
    }
}

module.exports={home,register};
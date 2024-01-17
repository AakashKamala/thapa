const mongoose=require("mongoose");
const bcrypt=require("bcryptjs");

const userSchema=new mongoose.Schema({
    username:{
        type:String,
        require:true,
    },
    email:{
        type:String,
        require:true
    },
    phone:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    },
    isAdmin:{
        type:Boolean,
        default:false
    }
});



userSchema.pre("save",async function(next){
    const user=this;

    if(!user.isModified("password")){
        next();
    }
    try {
        const saltRound=await bcrypt.genSalt(10);
        const hashPassword=await bcrypt.hash(user.password,saltRound);
        user.password=hashPassword;
    } catch (error) {
        next(error);
    }
})

const User=new mongoose.model("student",userSchema);

module.exports=User;
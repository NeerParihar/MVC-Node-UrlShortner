const user=require("../models/user");
const handleCreateUser = async (req,res)=>{
    const {name,email,password}=req.body;
    if(!name || !email || !password)return res.status(400).json({"msg":"All fields are mandotory"});
    await user.create({
        name,email,password
    })
    //return res.render("home");
    return res.redirect("/");


}
const handleLoginUser=async(req,res)=>{
    const {email,password}=req.body;
    if(!email || !password)return res.status(400).json({"msg":"All fields are mandotory"});
   const User= await user.findOne({email,password});
   if(!User) return res.render("login",{error:"Invalid Credentials"})

    return res.redirect("/");

}
module.exports={handleCreateUser,handleLoginUser};



const express=require("express");
const urlModel = require("../models/url");
const { restrictTo } = require("../middlewear/auth");
const staticRouter=express.Router();
staticRouter.get("/",restrictTo(["NORMAL"]), async (req,res)=>{

    const allUrls=await urlModel.find({createdBy:req.user._id});
    res.render("home",{
        urls:allUrls
    });
 
})
staticRouter.get("/signup", (req,res)=>{
    res.render("signup");
})

staticRouter.get("/login", (req,res)=>{
    res.render("login");
})


module.exports=staticRouter;
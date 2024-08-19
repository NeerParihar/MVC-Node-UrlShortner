const express=require("express");
const urlModel = require("../models/url");
const staticRouter=express.Router();
staticRouter.get("/", async (req,res)=>{
    const allUrls=await urlModel.find({});
    res.render("home",{
        urls:allUrls
    });

})


module.exports=staticRouter;
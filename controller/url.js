 const shortid = require("shortid");
 const urlModel =require("../models/url");
 
 const handleGenerateNewSortURL=async (req,res) => {
    const body=req.body;
    if(!body.url) return res.status(400).json({"error":"URL is required"});
    const shortID=shortid();
    await urlModel.create({
        shortId:shortID,
        redirectURL:body.url,
        visitHistory:[],
        createdBy:req.user._id

    });
   //return  res.status(201).json({"msg":"Created successfully",id:shortID})
   return res.render("home",{id:shortID});
    
}

const handleUrlNavigationToShortUrl=async (req,res)=>{
    const shortId=req.params.shortId;
   const entry= await urlModel.findOneAndUpdate({shortId},{
    $push:{
        visitHistory:{ timeStamp:Date.now()}
    }
   });
   console.log(res)
   return res.redirect(entry.redirectURL);
}

const handleGetUrlAnalyticInfo= async (req,res)=>{
    const shortId=req.params.id;
     const result=await urlModel.findOne({shortId});
     return res.status(200).json({"Clicks":result.visitHistory.length,"analytics":result.visitHistory})

}

module.exports={handleGenerateNewSortURL,handleUrlNavigationToShortUrl,handleGetUrlAnalyticInfo};
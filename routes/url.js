;const express=require("express");
const router=express.Router()
const{handleGenerateNewSortURL,handleUrlNavigationToShortUrl,handleGetUrlAnalyticInfo}=require("../controller/url");

router.post("/",handleGenerateNewSortURL);
router.get("/:shortId",handleUrlNavigationToShortUrl)
router.get("/analytic/:id", handleGetUrlAnalyticInfo)

module.exports=router;
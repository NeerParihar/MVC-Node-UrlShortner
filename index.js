const express=require("express");
const app=express();
const dotenv=require("dotenv");
dotenv.config();
const Urlroute=require("./routes/url");
const staticRoute=require("./routes/staticRoute");
const mongoDbConnection =require("./connection")
const userRoute=require("./routes/user")
const cookieParser=require("cookie-parser"); 
const {restrictToLoggedInUserOnly}=require("./middlewear/auth");


const path=require("path");

//
app.use(cookieParser());
//ejs config
app.set("view engine","ejs");
app.set("views",path.resolve("./views"))

//connection
mongoDbConnection(process.env.URL).then(()=>console.log("MongoDb Connected!!"))

//middlewear
app.use(express.urlencoded({extended:false}));
app.use("/url",restrictToLoggedInUserOnly,Urlroute);
app.use("/",staticRoute); 
app.use("/user",userRoute); 
app.use(express.json()); 



//Ejs implimentation Demo
const urlModel=require("./models/url")
app.get("/ejsTest", async(req,res)=>{
    const allUrls=await urlModel.find({});
    res.render("home",{urls:allUrls});
})


app.listen(process.env.PORT,()=>console.log(`Server is running on port:${process.env.PORT}`))


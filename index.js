const express=require("express");
const app=express();
const dotenv=require("dotenv");
dotenv.config();
const Urlroute=require("./routes/user");
const mongoDbConnection =require("./connection")

//connection
mongoDbConnection(process.env.URL).then(()=>console.log("MongoDb Connected!!"))

//middlewear
app.use(express.urlencoded({extended:false}));
app.use("/url",Urlroute);

app.listen(process.env.PORT,()=>console.log(`Server is running on port:${process.env.PORT}`))

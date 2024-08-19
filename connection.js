const mongoose=require("mongoose");

const mongoDbConnection=async (url)=>{
   return mongoose.connect(url);

}
module.exports=mongoDbConnection;
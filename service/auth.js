////---------Normal statefull Auth-----------///
// const sessionIdToUserMap=new Map();

// function setUser(id,user){
//     sessionIdToUserMap.set(id,user);
// }

// function getUser(id){
//     return sessionIdToUserMap.get(id);
// }

//-------JWT stateless Auth----------//
const dotenv=require("dotenv");
dotenv.config();

const jwt=require("jsonwebtoken")
function setUser(user){

    return jwt.sign({
        _id:user._id,
        email:user.email,
        role:user.role
    },process.env.SECRETE);
}

function getUser(token){
    if(!token) return null;
    try {
        return jwt.verify(token,process.env.SECRETE); 
    } catch (error) {
        return null;
    }
    

}
module.exports={setUser,getUser}
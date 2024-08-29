const{getUser}=require("../service/auth")

function checkForAuthorization(req,res,next){
    //const authorizationHeaderValue=req.headers['authorization'];

    const tokenCookie=req.cookies?.token
    req.user=null;
    // if(!authorizationHeaderValue || !authorizationHeaderValue.startsWith('Bearer'))
    //     return next();

    if(!tokenCookie) return next();

    // const token=authorizationHeaderValue.split('Bearer ')[1];
    const token=tokenCookie;
    const user=getUser(token);
    req.user=user;
       return next(); 

}   
function restrictTo(roles){
    return function(req,res,next){
        if(!req.user) return res.redirect("/login");

        if(!roles.include(req.user.role)) return res.end("UnAuthorized");
        return next(); 
    }
    

}
// async function restrictToLoggedInUserOnly(req,res,next){
//     //console.log(req)
//     //const userUid=req.cookies?.uid;
//     const userId=req.headers['authorization'];

//     if(!userId) return res.redirect("/login");
//     const token=userId.split('Bearer ')[1];
//      555555555555555
//     const user=getUser(token);
//     if(!user) return res.redirect("/login")
//         req.user=user;
//         next();   


// }

// async function checkAuth(req,res,next){
//     //const userUid=req.cookies?.uid;
//     const userId=req.headers['authorization'];
//     const token=userId.split('Bearer ')[1];
//     const user=getUser(token);

//         req.user=user;
//         next();

// }

//module.exports={restrictToLoggedInUserOnly,checkAuth}
module.exports={checkForAuthorization,restrictTo}
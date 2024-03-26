const jwt =require("jsonwebtoken");
const Profile = require("../Models/Profile");

exports.DecodeToken=async(req,res)=>{
    try{
        const{token}=req.body
        const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
        console.log("decoed",decodedToken)
        const Profiles=await Profile.findById(decodedToken.id)
       return res.json({
         Email:Profiles.Email
       })
    } catch(error){
        console.log("error",error)
    }
}
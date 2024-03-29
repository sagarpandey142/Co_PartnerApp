const jwt =require("jsonwebtoken");
exports.DecodeToken=async(req,res)=>{
    try{
        const{token}=req.body
        const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
        console.log("decoded toekn", decodedToken)
       return res.json({
         Email:decodedToken.email
       })
    } catch(error){
        console.log("error",error)
    }
}
const User=require("../Models/User")

exports.signup=async(req,res)=>{
   try{
    const{Full_Name,Dob,Tech,Year,Email,GithubLink,LinkedinLink,password}=req.body;
    if(!Full_Name || !Dob  || Tech || !Year || !Email || !GithubLink || !LinkedinLink || !password){
        return res.status(400).json({
            message:"All Field re Required",
          }) 
    }
    if(User.find(Email)){
        return res.status(400).json({
            message:"Email Already Exists",
          }) 
    }

    //hasing
    

   } catch(error){
      return res.json({
        message:"Error Occuried",
        error:error
      })
   }
}

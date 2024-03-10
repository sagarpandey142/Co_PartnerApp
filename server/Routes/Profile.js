const express=require("express");
const router=express.Router();

// importing controller
const{DeleteProfile,updateProfile}=require("../controller/Profile")

router.delete("/deleteProfile",DeleteProfile);
router.put("/updateProfile",updateProfile);


module.exports=router
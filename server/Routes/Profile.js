const express=require("express");
const router=express.Router();

// importing controller
const{DeleteProfile,updateProfile,FindById}=require("../controller/Profile");


router.delete("/deleteProfile",DeleteProfile);
router.put("/updateProfile",updateProfile);
router.post("/find",FindById)


module.exports=router
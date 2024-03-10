const express=require("express");
const router=express.Router();

// importing controller
const{GetOtp,signup,login}=require("../controller/Users")

router.post("/GetOtp",GetOtp);
router.post("/signup", signup);
router.post("/login",login)


module.exports=router
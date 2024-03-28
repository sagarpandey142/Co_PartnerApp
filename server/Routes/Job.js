const express = require("express");
const router = express.Router()

const {getRecentJobs, addSavedJobs, getSavedJobs} = require("../controller/Jobs");

router.get("/getRecentJobs", getRecentJobs);
router.post("/addSavedJobs", addSavedJobs );
router.post("/getSavedJobs", getSavedJobs );

module.exports=router
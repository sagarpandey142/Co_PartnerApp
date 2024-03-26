const express = require("express");
const router = express.Router()

const {getSavedJobs} = require("../controller/Jobs");

router.post("/getSavedJobs", getSavedJobs);

module.exports=router
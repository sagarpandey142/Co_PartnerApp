const express = require("express");
const router = express.Router()

const {getSavedJobs, AddSavedJob} = require("../controller/Jobs");

router.post("/getSavedJobs", getSavedJobs);
router.post("/AddSavedJob",AddSavedJob)

module.exports=router
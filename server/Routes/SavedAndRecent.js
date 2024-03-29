const express = require("express");
const router = express.Router()

const {getSavedProject, addSavedProject, getRecentProject} = require("../controller/Jobs");

router.get("/getRecentProject", getRecentProject);
router.post("/addSavedProject", addSavedProject);
router.post("/getSavedProject", getSavedProject);

module.exports=router
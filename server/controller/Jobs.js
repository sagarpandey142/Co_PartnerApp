const Profile = require("../Models/Profile");
const Job = require("../Models/Job");
const Project = require("../Models/Project");

exports.getSavedJobs = async (req, res) => {
    try {
        const {Email} = req.body; 
    
        const ProfileInfo = await Profile.findOne({Email})
        console.log("profile",ProfileInfo.ProjectId);
        //tranverse
        const arr=[

        ]
        for(let i=0;i<ProjectId;i++){
             const res=await Project.findbyid(ProjectId[i]);
             arr.push(res)
        }
        
        if (!Profile) {
            return res.status(404).json({
                success: false,
                message: "No Saved Jobs found"
            });
        }

        res.status(200).json({
            success: true,
            message: "Saved Jobs found successfully" 
        });

    } catch (error) {
        console.error("Error:", error.message);
        res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
};

exports.AddSavedJob=async(req,res)=>{
    try{
     const{Email,ProjectId}=req.body;
     const ProfileInfo=await Profile.findOne({Email}).populate("ProjectId").exec();
     ProfileInfo.ProjectId.push(ProjectId);
     ProfileInfo.save()
     return true
    } catch(error){
        console.log("error",error)
    }
}
const Profile = require("../Models/Profile");
const Project = require("../Models/Project")


exports.addSavedProject = async (req, res) => {
    try {
        const { Email, projectId } = req.body;
        console.log("ab aaya backend me", Email, projectId)

        const profileInfo = await Profile.findOne({ Email }).populate("SavedJobs").exec();
        if (!profileInfo) {
            return res.status(404).json({
                success: false,
                message: "Profile not found"
            });
        }

        if (profileInfo.SavedJobs.some(savedJob => savedJob._id.toString() === projectId)) {
            return res.status(200).json({
                success: false,
                message: "Project already saved for the profile"
            });
        }

        profileInfo.SavedJobs.push(projectId);


        await profileInfo.save();

        // await profileInfo.populate("SavedJobs").execPopulate();
        await profileInfo.populate("SavedJobs");


        return res.status(200).json({
            success: true,
            message: "Job saved successfully for the profile",
            profileInfo:profileInfo
        });

    } catch (error) {
        console.error("Error:", error.message);
        res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
};


exports.getRecentProject = async(req,res) => {
    try{
        const response = await Project.find().sort({ createdAt: -1 }).exec();
        console.log("response", response)

        return res.status(200).json({
            success: true,
            message: "Projects retrieved successfully",
            response: response
        })
    }catch(err){
        return res.status(404).json({
            success: false,
            message: err.message
        })
    }
}

exports.getSavedProject = async(req, res) =>{
    try{
        const {Email} = req.body;
        const response = await Profile.findOne({Email}).populate("SavedJobs").exec();
        console.log("respnse" , response)
        if(!response){
            return res.status(404).json({
                success: false,
                message:"please enter valid email"
            })
        }

        return res.status(200).json({
            success: true,
            message: res.message,
            response: response
        })
    }catch(error){
        return res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

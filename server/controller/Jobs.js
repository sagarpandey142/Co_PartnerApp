const User = require("../Models/User");
const Job = require("../Models/Job")

exports.getSavedJobs = async (req, res) => {
    try {

        console.log("job controller")
        const { _id } = req.body;
        console.log("type",typeof(_id))

        console.log("_id", _id)

        const savedJob = await Job.findOne({ _id });
        // const savedJobs = await Job.findOne({ _id });

        console.log("savedJobs", savedJob)

        if (!savedJob) {
            return res.status(404).json({
                success: false,
                message: "No Saved Jobs found"
            });
        }

        res.status(200).json({
            success: true,
            message: "Saved Jobs found successfully",
            savedJobs: savedJob 
        });

    } catch (error) {
        console.error("Error:", error.message);
        res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
};

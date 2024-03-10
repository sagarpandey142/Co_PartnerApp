const mongoose=require("mongoose")

const Project=mongoose.Schema({
     userId:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'Profile',
     },
     Project:{
        type:Array,
        required:true,
     },
    
})

module.exports=mongoose.model("Project",Project)
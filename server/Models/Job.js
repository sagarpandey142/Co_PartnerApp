const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema({

    name:{
        type: String,
        required: true
    },
    desc:{
        type: String,
        required: true,
    },
    datePosted:{
        type: Date,
    },
    userVerified:{
        type: Boolean,
        required: true,
    },
    ProfileId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Profile',
       }
})

module.exports=mongoose.model("Job",jobSchema)

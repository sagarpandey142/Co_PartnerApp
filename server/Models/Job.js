const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema({

    // _id: mongoose.Schema.Types.ObjectId,

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
    }
})

module.exports=mongoose.model("Job",jobSchema)
const mongoose = require("mongoose");

const jobSchema =  mongoose.Schema({

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

const mongoose=require("mongoose")
const ProfileSchema=mongoose.Schema({
     name:{
        type:String,
        required:true
     },
     Email:{
        type:String,
        required:true
     },
     Proffessional_Role:{
       type:String,
       required:true
     },
     User_Bio:{
      type:String,
      required:true
    },
     TechStack:{
        type:Array,
        required:true
     },
     GithubLink:{
      Type:String,
     },
     LinkedIn:{
      Type:String,
     },
     password:{
      type:String,
      required:true
     },
   //   Job:[{
   //    type:mongoose.Schema.Types.ObjectId,
   //    ref:'Job',
   //   }]
    
},{ timestamps: true })

module.exports=mongoose.model("Profile",ProfileSchema)
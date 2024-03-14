const User = require("../Models/User");
const Profile = require("../Models/Profile");
const bcrypt = require("bcrypt");
const jwt=require("jsonwebtoken")
const Otp =require("../Models/Otp")
const otpTemplate=require("../Template/MailVerification.js")
const nodemamailSender=require("../Utils/MailSender.js")
// genrate a unique otp

exports.GetOtp = async (req, res) => {
  console.log("Hiiiiiii")
  try {
    const { Email } = req.body;

    // Check if the email is provided
    if (!Email) {
      return res.status(400).json({
        success: false,
        message: "Email is required",
      });
    }

    // Check if the profile with the provided email exists
    const userProfile = await Profile.findOne({ Email });

    if (!userProfile) {
      return res.status(404).json({
        success: false,
        message: "Profile not found",
      });
    }

    // Generate a random OTP (4 digits for simplicity)
    const generatedOtp = Math.floor(1000 + Math.random() * 9000);

    // Store the OTP in the database (you may need a separate OTP model)
    const otpDocument = new Otp({
      profileId: userProfile._id,
      otp: generatedOtp,
    });

    await otpDocument.save();

    // sending mail in email
    const sendingMail=await nodemamailSender(Email,"Email Verification Code",otpTemplate(generatedOtp))
    console.log(sendingMail);
    return res.status(200).json({
      success: true,
      message: "OTP generated successfully",
      otp: generatedOtp,
    });
  } catch (error) {
    console.error("Error in GetOtp controller:", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: error.message,
    });
  }
};


exports.signup = async (req, res) => {
  try {
    const {
      Full_Name,
      Dob,
      Tech,
      Year,
      Email,
      GithubLink,
      LinkedinLink,
      password,
    } = req.body;

    if (
      !Full_Name ||
      !Dob ||
      !Tech ||
      !Year ||
      !Email ||
      !GithubLink ||
      !LinkedinLink ||
      !password
    ) {
      return res.status(400).json({
        message: "All Field are Required",
      });
    }

    const existingUser = await Profile.findOne({ Email: Email });

    if (existingUser !== null) {
      return res.status(400).json({
        message: "Email Already Exists",
      });
    }

    // Hashing password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new profile
    const profile = await Profile.create({
      name: Full_Name,
      Email: Email,
      ContactInf: "",
      CurrentYear: Year,
      TechStack: [...Tech],
      password: hashedPassword,
    });

  
    const user = await User.create({
      profileInf: profile._id,
      Project: [],
    });


  

    return res.status(200).json({
      success: true,
      message: "User Created Successfully",
      User: user,
    });
  } catch (error) {
    return res.json({
      message: "Error Occurred",
      error: error,
    });
  }
};

exports.login=async(req,res)=>{
  try{
    
     
      const {email,password}=req.body;
     
      //validation
      if(!email || !password){
        return  res.status(401).json({
              success:false,
              message:"All Field Are Required Please Fill All The Detail",
          })
      }

      //db check if user exit or not
      const user=await Profile.findOne({Email:email})

      if(!user){
         return res.status(401).json({
              success:false,
              message:"Sign Up First",
          })}
          //jwt token
      
      if(await bcrypt.compare(password,user.password)){
          const payload={
              email:user.email,
              accountType:user.accountType,
              id:user._id,
          }

          let token=jwt.sign(payload,process.env.JWT_SECRET,{
              expiresIn:"24h",
          });

          user.token=token;
          user.password=undefined;
          const option={
              expires: new Date(Date.now() + 3*24*60*60*1000),
              httpOnly:true,
          }
          res.cookie("token",token,option).status(200).json({
              success:true,
               token,
               user,
               message:"Log In SuccessFully",
          })
      }
      else{
               res.status(500).json({
                  success:false,
                  message:"password Doesnt Matches",
               })
      }

  } catch(err){
      console.log(err);
      return res.status(500).json({
          success:false,
          message:'Login Failure, please try again',
      });
  }
}


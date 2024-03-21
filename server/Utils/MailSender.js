<<<<<<< HEAD
const nodemailer=require("nodemailer");

const nodemamailSender=async (email,title,body)=>{
    
    try{

      let transporter=nodemailer.createTransport({
        host:process.env.MAIL_HOST,
        auth:{
            user:process.env.MAIL_USER,
            pass:process.env.MAIL_PASS,
        },
        tls: {
          rejectUnauthorized: false
      }
      })
   
      let info=await transporter.sendMail({
        from:'CoPartner ',
        to:`${email}`,
        subject:`${title}`,
        html:`${body}`,
      })
   console.log("info",info)
      return info;

    } catch(err){
      console.log(err)
=======
const nodemailer = require("nodemailer");
>>>>>>> eff2736bbb9efb68ef310c63028287bfe1b860c1

const nodemailerSender = async (email, title, body) => {
  try {
    let transporter = nodemailer.createTransport({
      host: process.env.MAIL_HOST,
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
      tls: {
        rejectUnauthorized: false
    }
    });

    let info = await transporter.sendMail({
      from: 'CoPartner',
      to: email,
      subject: title,
      html: body,
    });

    return info;
  } catch (error) {
    console.error("Error Sending Email:", error);
    throw new Error("Failed to send email");
  }
};

module.exports = nodemailerSender;

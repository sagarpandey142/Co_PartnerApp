const nodemailer = require("nodemailer");

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

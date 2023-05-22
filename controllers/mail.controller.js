const nodemailer = require("nodemailer");
const contact_confirm_template = require("../templates/contact_confirm");

// create reusable transporter object using the default SMTP transport
let transporter = nodemailer.createTransport({
  service: "Outlook",
  host: "smtp.office365.com",
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.EMAIL_ADDRESS,
    pass: process.env.EMAIL_PASSWORD,
  },
});

// send mail with defined transport object
let sendMail = async (email_data) => {
  const { name, email, cellphone, topic, message } = email_data;
  console.log("------------------->", email_data);
  let contact_confirm = contact_confirm_template(
    name,
    email,
    cellphone,
    topic,
    message
  );

  await transporter.sendMail({
    from: `"Angel Marquez ✨" <${process.env.EMAIL_ADDRESS}>`, // sender address
    to: `${email}, alexis.mplt@outlook.es`, // list of receivers
    subject: `Confirm recived - ${topic} ✔`, // Subject line
    html: contact_confirm,
  });
};

module.exports = { sendMail, transporter };

const nodemailer = require('nodemailer')
const asyncHandler = require('express-async-handler')


const sendMail = asyncHandler(async ({email, html}) => {
    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
          // TODO: replace `user` and `pass` values from <https://forwardemail.net>
          user: process.env.EMAIL_NAME,
          pass: process.env.EMAIL_APP_PASSWORD,
        },
      });
      
      // async..await is not allowed in global scope, must use a wrapper
      async function main() {
        // send mail with defined transport object
        const info = await transporter.sendMail({
          from: '"CuahangMERNSTACKS 👻" <no-reply@cuahangMERNSTACK.com>', // sender address
          to: email, // list of receivers
          subject: "Forget password✔", // Subject line
        //   text: "Hello world?", // plain text body
          html: html, // html body
        });
    }
    return info;
})

module.exports = sendMail
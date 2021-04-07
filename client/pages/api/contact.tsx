import { NextApiRequest, NextApiResponse } from 'next'
const nodemailer = require('nodemailer');
require('dotenv').config();
const PASSWORD = process.env.password

console.log(PASSWORD)



export default  async (req: NextApiRequest, res: NextApiResponse) => {
  const transporter = await nodemailer.createTransport({
    port: 465,
    host: 'smtp.gmail.com',
    auth:{
      user: 'dummy.min43@gmail.com',
      pass: PASSWORD
    },
    secure: true,
  });

  const mailList = [
    'dj.min43@gmail.com',
    'umyoung89@gmail.com'
  ]

  const mailData = {
    from: 'dummy.min43@gmail.com',
    to: mailList,
    subject: `Message From ${req.body.name}`,
    text: req.body.contents,
    html: `<div>${req.body.contents}
          ${req.body.phoneNumber}
          ${req.body.email}
          </div>`
  };

  await transporter.sendMail(mailData, function(err:any, info:any) {
    if (err){
      console.log(err)
    } else {
      console.log(info)
    }
  });

  await res.status(200)
  await res.json('message sent')
  
};

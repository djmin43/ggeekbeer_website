import { NextApiRequest, NextApiResponse } from 'next'
const nodemailer = require('nodemailer');
require('dotenv').config();
const PASSWORD = process.env.PASSWORD

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
  ]

  const mailData = {
    from: 'dummy.min43@gmail.com',
    to: mailList,
    subject: `Message From ${req.body.name}`,
    text: req.body.contents,
    html: `<div>
          <p>이름: ${req.body.name}</p><br>
          <p>email: ${req.body.email}</p><br>
          <p>phone number: ${req.body.phoneNumber}</p><br>
          <p>message: ${req.body.contents}<p>

          </div>`
  };

  await transporter.sendMail(mailData, function(err:any, info:any) {
    if (err){
      console.log(err)
      res.status(400).json({message: '통신에러: 010-7199-4154로 문의 부탁드립니다.'})
    } else {
      console.log(info)
      res.status(200).json({message: '고맙습니다. 담당자가 확인 후 연락드리겠습니다.'})
    }
  });

  res.status(200);
  
};

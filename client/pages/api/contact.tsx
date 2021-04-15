import { NextApiRequest, NextApiResponse } from 'next'
const nodemailer = require('nodemailer');
require('dotenv').config();
const PASSWORD = process.env.PASSWORD

interface Email {
  name: string;
  email: string;
  phoneNumber: string;
  contents: string;
}

export default  async (req: NextApiRequest, res: NextApiResponse) => {

  const { name, email, phoneNumber, contents } = await req.body;

  const formValidator = (name: string, email: string, phoneNumber:string, contents:string) => {
    const re = /^[^\s@]+@[^\s@]+$/;
    const code: string[] = []
    if (re.test(email) === false) {
      code.push('invalid email')
      res.status(200).json({message:'올바른 이메일을 적어주세요.', code})
      console.log(email)
    };
  };

  await formValidator(name, email, phoneNumber, contents)

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
    'dj.min43@gmail.com'
  ]
  
  const mailData = {
    to: mailList,
    subject: `Message From ${name}`,
    text: contents,
    html: `<div>
          <p>이름: ${name}</p><br>
          <p>email: ${email}</p><br>
          <p>phone number: ${phoneNumber}</p><br>
          <p>message: ${contents}<p>
          </div>`
  };

  await transporter.sendMail(mailData, function(err:any, info:any) {
    if (err){
      console.log(err)
      res.status(400).json({message: '에러: 010-7199-4154로 문의 부탁드립니다.', code:['network_error']})
    } else {
      console.log(info)
      // if the connection is successful, the code value will be an empty string.
      res.status(200).json({message: '고맙습니다. 담당자가 확인 후 연락드리겠습니다.', code: ['']})
    }
  });
};


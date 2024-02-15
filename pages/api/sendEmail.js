import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  const { name, email, request, message } = req.body;

  console.log('Request body:', req.body);

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user:process.env.EMAIL_USERNAME,
      pass:process.env.EMAIL_PASSWORD,
    },
  });

  const mailOptions = {
    from: email,
    to: 'donniekir@gmail.com',
    subject: 'New Contact Form Submission',
    text: `
      Name: ${name}\n
      Email: ${email}\n
      Request: ${request}\n
      Message: ${message}
    `,
  };

  console.log('Email options:', mailOptions);

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).send('Error sending email');
    } else {
      console.log('Email sent: ' + info.response);
      res.status(200).send('Email sent');
    }
  });
}
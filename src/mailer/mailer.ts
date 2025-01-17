import nodemailer from 'nodemailer';

let transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    port: 587,
    auth: {
      user: 'jamm08012002@gmail.com',
      pass: 'gngj ckcg aixc wmoj',
    },
  });

export default transporter;

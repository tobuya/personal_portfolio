const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');

const app = express();
app.use(cors());
app.use(express.json());

const contactEmail = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

app.post('/contact', (req, res) => {
  const {
    firstName, lastName, email, message,
  } = req.body;
  const name = `${firstName} ${lastName}`;

  const mail = {
    from: email,
    to: 'thomasobuya95@gmail.com',
    subject: 'Contact Form Submission - Portfolio',
    html: `<p>Name: ${name}</p>
           <p>Email: ${email}</p>
           <p>Message: ${message}</p>`,
  };

  contactEmail.sendMail(mail, (error) => {
    if (error) {
      res.status(500).json({ code: 500, message: 'Failed to send email' });
    } else {
      res.status(200).json({ code: 200, message: 'Message sent successfully' });
    }
  });
});

app.listen(4000, () => {
  console.log('Server is running on port 3000');
});

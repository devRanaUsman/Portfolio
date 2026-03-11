import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Nodemailer transporter setup
const transporter = nodemailer.createTransport({
  service: 'gmail', // or your preferred SMTP service
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

app.post('/api/contact', async (req, res) => {
  const { name, email, subject, budget, message } = req.body;

  try {
    // 1. Email to the portfolio owner
    await transporter.sendMail({
      from: `"${name}" <${email}>`, // It will be authenticated as EMAIL_USER, but reply-to or naming could show user
      to: process.env.EMAIL_USER, // Send to yourself
      subject: `New Contact Form Submission: ${subject}`,
      html: `
        <h2>New Contact form submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Budget:</strong> ${budget || 'Not specified'}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    // 2. Auto-reply email to the user
    await transporter.sendMail({
      from: `"Usman" <${process.env.EMAIL_USER}>`,
      to: email, // Send to the user who filled the form
      subject: `Thank you for contacting me!`,
      html: `
        <h3>Hello ${name},</h3>
        <p>Thank you for reaching out! I have received your message regarding "${subject}".</p>
        <p>I will review your inquiry and get back to you within 24 hours.</p>
        <br>
        <p>Best regards,</p>
        <p>Usman</p>
      `,
    });

    res.status(200).json({ success: true, message: 'Emails sent successfully!' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ success: false, message: 'Failed to send email.' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

import nodemailer from 'nodemailer';

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ success: false, message: 'Method not allowed' });
    }

    const { name, email, subject, budget, message } = req.body || {};

    if (!name || !email || !subject || !message) {
        return res.status(400).json({
            success: false,
            message: 'Missing required fields',
        });
    }

    try {
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        await transporter.sendMail({
            from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
            replyTo: email,
            to: process.env.EMAIL_USER,
            subject: `New Contact Form Submission: ${subject}`,
            html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Budget:</strong> ${budget || 'Not specified'}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
        });

        await transporter.sendMail({
            from: `"Usman" <${process.env.EMAIL_USER}>`,
            to: email,
            subject: 'Thank you for contacting me!',
            html: `
        <h3>Hello ${name},</h3>
        <p>Thank you for reaching out! I have received your message regarding "${subject}".</p>
        <p>I will review your inquiry and get back to you within 24 hours.</p>
        <br>
        <p>Best regards,</p>
        <p>Usman</p>
      `,
        });

        return res.status(200).json({
            success: true,
            message: 'Emails sent successfully!',
        });
    } catch (error) {
        console.error('Error sending email:', error);
        return res.status(500).json({
            success: false,
            message: 'Failed to send email.',
        });
    }
}
import nodemailer from 'nodemailer';
const VERSION = '1.0.3';

export default async function handler(req, res) {
    // Basic env status for debugging (SAFE: only shows if they exist, not values)
    const envStatus = {
        EMAIL_USER: !!process.env.EMAIL_USER,
        EMAIL_PASS: !!process.env.EMAIL_PASS,
        NODE_ENV: process.env.NODE_ENV
    };

    if (req.method !== 'POST') {
        return res.status(405).json({ success: false, message: 'Method not allowed', version: VERSION });
    }

    const { name, email, subject, budget, message } = req.body || {};

    console.log(`[v${VERSION}] Received contact request:`, { hasName: !!name, hasEmail: !!email });

    if (!name || !email || !subject || !message) {
        return res.status(400).json({
            success: false,
            message: 'Missing required fields',
            version: VERSION
        });
    }

    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
        return res.status(500).json({
            success: false,
            message: 'Environment variables missing on Vercel.',
            envStatus,
            version: VERSION
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

        await transporter.verify();

        await transporter.sendMail({
            from: `"Portfolio" <${process.env.EMAIL_USER}>`,
            to: process.env.EMAIL_USER,
            subject: `Contact: ${subject}`,
            html: `<p><strong>From:</strong> ${name} (${email})</p><p>${message}</p>`,
        });

        return res.status(200).json({
            success: true,
            message: 'Emails sent successfully!',
            version: VERSION
        });
    } catch (error) {
        console.error('Detailed Error:', error);
        return res.status(500).json({
            success: false,
            message: 'Email failed to send.',
            error: error.message,
            envStatus,
            version: VERSION
        });
    }
}
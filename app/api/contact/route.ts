import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, type, message } = body;

    // TODO: Replace this with your actual email service
    // Options:
    // 1. Resend.com (recommended - simple, reliable)
    // 2. SendGrid
    // 3. Nodemailer with your SMTP
    // 4. Web3Forms (no backend needed)

    // Example with Resend (you'll need to install: npm install resend)
    // const { Resend } = require('resend');
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // 
    // await resend.emails.send({
    //   from: 'Base Mortgages <noreply@basemortgages.co.nz>',
    //   to: 'hello@basemortgages.co.nz',
    //   subject: `New Contact Form: ${type}`,
    //   html: `
    //     <h2>New Contact Form Submission</h2>
    //     <p><strong>Name:</strong> ${name}</p>
    //     <p><strong>Email:</strong> ${email}</p>
    //     <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
    //     <p><strong>Interest:</strong> ${type}</p>
    //     <p><strong>Message:</strong></p>
    //     <p>${message}</p>
    //   `,
    // });

    console.log('Form submission received:', { name, email, phone, type, message });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json({ error: 'Failed to send message' }, { status: 500 });
  }
}

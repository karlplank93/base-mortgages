import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, type, message } = body;

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        access_key: '8875219d-36f9-4502-8843-68fe3740e966',
        subject: `New enquiry from ${name} — ${type}`,
        from_name: 'Base Mortgages Website',
        replyto: email,
        name,
        email,
        phone: phone || 'Not provided',
        interest: type,
        message,
      }),
    });

    const result = await response.json();

    if (!result.success) {
      throw new Error(result.message || 'Web3Forms submission failed');
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json({ error: 'Failed to send message' }, { status: 500 });
  }
}

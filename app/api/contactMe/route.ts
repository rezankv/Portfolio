import { NextResponse } from 'next/server';
import { ZodError } from 'zod';
import { Resend } from 'resend';

// ** constants
import { my_email } from '@/constants';

// ** components
import { ContactMeTemplate } from '@/components';

// ** validations
import { contactMeSchema } from '@/validations';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      body: { email, message, name },
    } = await contactMeSchema.parseAsync(body);

    const data = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: [my_email],
      subject: 'پیام از کاربران سایت',
      react: ContactMeTemplate({ email, message, name }),
      text: '',
    });

    return NextResponse.json(data);
  } catch (error) {
    if (error instanceof ZodError) {
      return NextResponse.json(
        { message: error.issues[0].message },
        { status: 400 }
      );
    } else
      return NextResponse.json(
        { message: 'خطا در ارسال پیام' },
        { status: 500 }
      );
  }
}

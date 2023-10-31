import { my_email } from '../../../libs/constants';
import EmailTemplate from '../../../libs/components/EmailTemplates/contactMe';
import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { contactMeSchema } from '../../../libs/validations';
import { ZodError } from 'zod';

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
      react: EmailTemplate({ email, message, name }),
      text: '',
    });

    return NextResponse.json(data);
  } catch (error) {
    if (error instanceof ZodError) {
      return NextResponse.json({ message: error.issues[0].message });
    } else return NextResponse.json({ message: 'خطا در ارسال پیام' });
  }
}

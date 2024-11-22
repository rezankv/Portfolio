import { Resend } from 'resend';

// constants
import { my_email } from '@/constants';

// components
import { ContactMeTemplate } from '@/components';

// validations
import { ContactMeSchema } from '@/validations';



export const sendMessage = async (
    { email, message, name }: ContactMeSchema
) => {
    const resend = new Resend(process.env.RESEND_API_KEY);

    try {
        await resend.emails.send({
            from: 'Acme <onboarding@resend.dev>',
            to: [my_email],
            subject: 'پیام از کاربران سایت',
            react: ContactMeTemplate({ email, message, name }),
            text: '',
        });
    } catch (error) {
        return { error }
    }


}




import { z } from 'zod';

export const contactMeSchema = z.object({
  name: z
    .string({ required_error: 'نام اجباری است' })
    .min(1, 'نام اجباری است'),
  email: z
    .string({
      required_error: 'ایمیل اجباری است',
      invalid_type_error: 'ایمیل نا معتبر است',
    })
    .min(1, { message: 'ایمیل اجباری است' })
    .email({ message: 'ایمیل نا معتبر است' }),
  message: z
    .string({ required_error: 'پیام اجباری است' })
    .min(1, 'پیام اجباری است')
    .max(300, 'پیام بسیار طولانی است'),
});

export type ContactMeSchema = z.infer<typeof contactMeSchema>;

import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const contactFormSchema = z.object({
  fullName: z
    .string({ required_error: 'نام نمیتواند خالی باشد' })
    .min(1)
    .max(50),
  email: z
    .string({ required_error: 'ایمیل نمیتواند خالی باشد' })
    .email('ایمیل نامعتبر است.'),
  message: z
    .string({ required_error: 'پیام نمیتواند خالی باشد' })
    .max(500, { message: 'پیام طولانی است' }),
});
export type ContactFormSchema = z.infer<typeof contactFormSchema>;

const useLogic = () => {
  const {
    control,
    handleSubmit,
    formState: { isLoading, isValid },
  } = useForm<ContactFormSchema>({
    mode: 'onChange',
    resolver: zodResolver(contactFormSchema),
  });

  /* -------------------------------------------------------------------------- */
  /*                                  Handlers                                 */
  /* -------------------------------------------------------------------------- */

  const handleSendEmail = async (data: ContactFormSchema) => {
    //
  };

  return { control, isLoading, isValid, handleSubmit, handleSendEmail };
};

export default useLogic;

import toast from 'react-hot-toast';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

// validations
import { ContactMeSchema, contactMeSchema } from '@/validations';

// actions
import { sendMessage } from '@/actions';

const useLogic = () => {
  const {
    control,
    handleSubmit,
    register,
    formState: { isSubmitting, isValid },
  } = useForm<ContactMeSchema>({
    mode: 'onChange',
    resolver: zodResolver(contactMeSchema),
  });

  /* -------------------------------------------------------------------------- */
  /*                                  Handlers                                 */
  /* -------------------------------------------------------------------------- */

  const handleSendEmail = async (data: ContactMeSchema) => {
    try {
      await sendMessage(data)
      toast.success('پیام با موفقیت ارسال شد');
    } catch {
      toast.error('ارسال پیام با خطا مواجه شد');
    }
  };
console.log(isSubmitting);
  return { register, control, isSubmitting, isValid, handleSubmit, handleSendEmail };
};

export default useLogic;

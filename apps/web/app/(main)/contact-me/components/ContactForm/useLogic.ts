import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  ContactMeSchema,
  contactMeSchema,
} from '../../../../../libs/validations';
import axios from 'axios';
import toast from 'react-hot-toast';


const useLogic = () => {
  const {
    control,
    handleSubmit,
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
      await axios.post('/api/contactMe', data);
      toast.success('پیام با موفقیت ارسال شد');
    } catch (error) {
      toast.error('ارسال پیام با خطا مواجه شد');
    }
  };

  return { control, isSubmitting, isValid, handleSubmit, handleSendEmail };
};

export default useLogic;

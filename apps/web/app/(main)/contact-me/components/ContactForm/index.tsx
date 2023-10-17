'use client';
import { Controller } from 'react-hook-form';
import useLogic from './useLogic';
const ContactForm = () => {
  const { control, handleSendEmail, handleSubmit, isLoading, isValid } =
    useLogic();
  return (
    <form action="#" className="form" data-form>
      <div className="input-wrapper">
        <Controller
          name="fullName"
          control={control}
          render={({ field }) => (
            <input
              type="text"
              className="form-input"
              placeholder="نام و نام خانوادگی"
              required
              {...field}
            />
          )}
        />
        <Controller
          name="email"
          control={control}
          render={({ field }) => (
            <input
              type="email"
              className="form-input"
              placeholder="آدرس ایمیل"
              required
              {...field}
            />
          )}
        />
      </div>
      <Controller
        name="message"
        control={control}
        render={({ field }) => (
          <textarea
            className="form-input"
            placeholder="پیام شما"
            required
            {...field}
          ></textarea>
        )}
      />

      <button className="form-btn" type="submit" disabled={!isValid}>
        <ion-icon name="paper-plane"></ion-icon>
        <span>ارسال پیام</span>
      </button>
    </form>
  );
};

export default ContactForm;

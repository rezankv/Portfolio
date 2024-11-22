"use client"

// components
import { Loader } from "@/components"

// icons
import useLogic from "./useLogic"

// locals
import { Send } from "@/icons"

const ContactForm = () => {
  const { register, isSubmitting, handleSendEmail, handleSubmit, isValid } =
    useLogic()

  return (
    <form onSubmit={handleSubmit(handleSendEmail)} className="form" data-form>
      <div className="input-wrapper">
        <input
          type="text"
          className="form-input"
          placeholder="نام و نام خانوادگی"
          required
          {...register("name")}
        />

        <input
          type="email"
          className="form-input"
          placeholder="ایمیل شما"
          required
          {...register("email")}
        />
      </div>

      <textarea
        className="form-input"
        placeholder="پیام خود را بنویسید..."
        required
        {...register("message")}
      ></textarea>

      <button className="form-btn" type="submit" disabled={!isValid}>
        {isSubmitting ? (
          <Loader
            style={{
              width: "30px",
              height: "30px",
            }}
          />
        ) : (
          <>
            <Send width="20" height="20" />
            <span>ارسال پیام</span>
          </>
        )}
      </button>
    </form>
  )
}

export default ContactForm

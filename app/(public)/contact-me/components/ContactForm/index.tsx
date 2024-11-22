"use client"

import { Controller } from "react-hook-form"

// components
import { Loader } from "@/components"

// icons
import useLogic from "./useLogic"

// locals
import { Send } from "@/icons"

const ContactForm = () => {
  const { control, isSubmitting, handleSendEmail, handleSubmit, isValid } =
    useLogic()

  return (
    <form onSubmit={handleSubmit(handleSendEmail)} className="form" data-form>
      <div className="input-wrapper">
        <Controller
          name="body.name"
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
          name="body.email"
          control={control}
          render={({ field }) => (
            <input
              type="email"
              className="form-input"
              placeholder="ایمیل شما"
              required
              {...field}
            />
          )}
        />
      </div>
      <Controller
        name="body.message"
        control={control}
        render={({ field }) => (
          <textarea
            className="form-input"
            placeholder="پیام خود را بنویسید..."
            required
            {...field}
          ></textarea>
        )}
      />

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

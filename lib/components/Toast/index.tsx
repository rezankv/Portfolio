"use client"

import toast, { Toaster as RHTToaster } from "react-hot-toast"

interface ToastProps {}
export const Toast = ({}: ToastProps) => {
  return (
    <>
      <RHTToaster />
    </>
  )
}

Toast.success = ({ message }: { message: string }) => {
  toast.success(message)
}
Toast.error = ({ message }: { message: string }) => {
  toast.error(message)
}
Toast.loading = ({ message }: { message: string }) => {
  toast.loading(message)
}

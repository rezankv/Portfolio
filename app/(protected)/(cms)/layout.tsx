import { ReactNode } from "react"

export const metadata = {
  title: "مدیریت محتوا",
  description: "محتوای وبسایت را مدیریت کنید",
  icons: {
    icon: "/images/logo.svg",
  },
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" dir="ltr">
      <body>{children}</body>
    </html>
  )
}

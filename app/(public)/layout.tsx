// components
import { Navbar, Sidebar } from "@/components"

// locals
import "../global.css"


export const metadata = {
  title: "رضا نیک روش | توسعه دهنده وب",
  description: "رضا نیک روش | توسعه دهنده وب",
}

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="fa" dir="rtl">
      <body>
        <main>
          <Sidebar />
          <div className="main-content">
            <Navbar />
            {children}
          </div>
        </main>
      </body>
    </html>
  )
}
export default Layout

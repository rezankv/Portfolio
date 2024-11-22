// components
import { Navbar, Sidebar } from "@/components"

export const metadata = {
  title: "رضا نیک روش | توسعه دهنده وب",
  description: "رضا نیک روش | توسعه دهنده وب",
}

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
      <Sidebar />
      <div className="main-content">
        <Navbar />
        {children}
      </div>
    </main>
  )
}
export default Layout

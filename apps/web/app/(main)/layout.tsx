// ** components
import { Navbar, Sidebar } from '@web/components';

// ** providers
import Providers from '@web/providers';

export const metadata = {
  title: 'رضا نیک روش | توسعه دهنده وب',
  description: 'رضا نیک روش | توسعه دهنده وب',
};

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Providers>
      <main>
        <Sidebar />
        <div className="main-content">
          <Navbar />
          {children}
        </div>
      </main>
    </Providers>
  );
};
export default Layout;

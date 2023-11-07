import Providers from '../../libs/providers';
import { Navbar, Sidebar } from '../../libs/components';

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

import { ReactNode } from 'react';
import ToastProvider from './Toast';

interface Props {
  children: ReactNode;
}
const Providers = ({ children }: Props) => {
  return (
    <>
      <ToastProvider>{children}</ToastProvider>
    </>
  );
};

export default Providers;

import { ReactNode } from 'react';
import { Toaster } from 'react-hot-toast';

interface Props {
  children: ReactNode;
}
const ToastProvider = ({ children }: Props) => {
  return (
    <>
      {children}
      <Toaster />
    </>
  );
};

export default ToastProvider;

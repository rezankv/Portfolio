import { HTMLAttributes } from 'react';

// utils
import { cn } from '@/utils';


interface Props extends HTMLAttributes<HTMLSpanElement> {}
export const Loader = ({ className = '', ...rest }: Props) => {
  return (
    <span className={cn('loader', className)} {...rest}></span>
  );
};

import { cn } from '../../../../libs/utils';
import { HTMLAttributes } from 'react';

interface Props extends HTMLAttributes<HTMLSpanElement> {}
export const Loader = ({ className = '', ...rest }: Props) => {
  return (
    <span className={cn('loader', className)} {...rest}></span>
  );
};

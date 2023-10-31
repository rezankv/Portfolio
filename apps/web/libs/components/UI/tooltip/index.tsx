'use client';
import { ReactNode } from 'react';
import { Tooltip } from 'react-tooltip';

interface Props {
  value: string;
  id: string;
  children: ReactNode;
}
export const CustomTooltip = ({ id, value, children }: Props) => {
  return (
    <>
      <a data-tooltip-id={id} data-tooltip-content={value}>
        {children}
      </a>
      <Tooltip id={id} />
    </>
  );
};

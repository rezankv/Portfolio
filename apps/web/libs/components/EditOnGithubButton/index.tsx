import Link from 'next/link';
import React from 'react';

interface Props {
  href: string;
}
export const EditOnGithubButton = ({ href }: Props) => {
  return (
    <Link
      href={href}
      style={{
        display: 'flex',
        gap: '.5rem',
        marginTop: '4rem',
        color: 'var(--vegas-gold)',
      }}
      target="_blank"
    >
      <img
        style={{ width: '20px', marginBlock: '0' }}
        src={'/images/icon-github.svg'}
        alt={'github-icon'}
      />
      ویرایش در گیتهاب
    </Link>
  );
};



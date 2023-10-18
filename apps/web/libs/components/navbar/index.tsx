'use client';
// TODO ما الان چون میخوایم ادرس فعلی رو داشته باشیم مجبور شدیم از یوز کلاینت استفاده کنیم . ولی ایا راهی هست که ادرس فعلی رو سمت سرور دریافتش کنیم و کامپوننت مون سرور کامپوننت باشه ؟
import {
  ABOUT_ME_ROUTE,
  BLOG_ROUTE,
  CONtACT_ME_ROUTE,
  PROJECTS_ROUTE,
  RESUME_ROUTE,
} from '../../constants';
import Link from 'next/link';
import React from 'react';
import { cn } from '../../utils';
import { usePathname } from 'next/navigation';

const navItems = [
  { href: ABOUT_ME_ROUTE, text: 'درباره من' },
  { href: RESUME_ROUTE, text: 'رزومه' },
  { href: PROJECTS_ROUTE, text: 'نمونه کار' },
  { href: BLOG_ROUTE, text: 'بلاگ' },
  { href: CONtACT_ME_ROUTE, text: 'ارتباط با من' },
];

export const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="navbar">
      <ul className="navbar-list">
        {navItems.map((item) => (
          <li key={item.href} className="navbar-item">
            <Link href={item.href}>
              <button
                className={cn(
                  'navbar-link',
                  pathname === item.href ? 'active' : ''
                )}
                data-nav-link
              >
                {item.text}
              </button>
            </Link>
          </li>
        ))}
      
      </ul>
    </nav>
  );
};

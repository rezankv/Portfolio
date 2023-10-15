import {
  ABOUT_ME_ROUTE,
  BLOG_ROUTE,
  CONtACT_ME_ROUTE,
  PROJECTS_ROUTE,
  RESUME_ROUTE,
} from '../../../../libs/constants';
import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <Link href={ABOUT_ME_ROUTE}>
            <button className="navbar-link active" data-nav-link>
              درباره من
            </button>
          </Link>
        </li>

        <li className="navbar-item">
          <Link href={RESUME_ROUTE}>
            <button className="navbar-link" data-nav-link>
              رزومه
            </button>
          </Link>
        </li>

        <li className="navbar-item">
          <Link href={PROJECTS_ROUTE}>
            <button className="navbar-link" data-nav-link>
              نمونه کار
            </button>
          </Link>
        </li>

        <li className="navbar-item">
          <Link href={BLOG_ROUTE}>
            <button className="navbar-link" data-nav-link>
              بلاگ
            </button>
          </Link>
        </li>

        <li className="navbar-item">
          <Link href={CONtACT_ME_ROUTE}>
            <button className="navbar-link" data-nav-link>
              ارتباط با من
            </button>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

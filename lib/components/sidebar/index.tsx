"use client"

import Image from "next/image"
import Link from "next/link"

// constants
import {
  github_link,
  linkedin_link,
  my_email,
  telegram_link,
  twitter_link,
} from "@/constants"

// utils
import { cn } from "@/utils"

// icons
import {
  ChevronDown,
  GithubIcon,
  LinkedIn,
  Mail,
  Pin,
  TelegramGrey,
  Twitter,
} from "@/icons"

// locals
import useLogic from "./useLogic"



export const Sidebar = () => {
  const { toggleSidebarHandler, isOpen } = useLogic()
  return (
    <aside
      className={cn("sidebar", isOpen ? "active" : "")}
      onClick={toggleSidebarHandler}
    >
      <div className="sidebar-info">
        <figure className="avatar-box">
          <Image
            src="/images/my-avatar.png"
            alt="logo"
            width="80"
            height="80"
          />
        </figure>

        <div className="info-content">
          <h1 className="name" title="Reza Nikravesh">
            رضا نیک روش
          </h1>

          <p className="title">توسعه دهنده وب</p>
        </div>

        <button className="info_more-btn" data-sidebar-btn>
          <span>اطلاعات</span>

          <ChevronDown width="12" height="12" />
        </button>
      </div>

      <div className="sidebar-info_more">
        <div className="separator"></div>

        <ul className="contacts-list">
          <li className="contact-item">
            <div className="icon-box">
              <Mail width="18" height="18" />
            </div>

            <div className="contact-info">
              <p className="contact-title">ایمیل</p>

              <Link
                href={`mailto:${my_email}`}
                className="contact-link dir-ltr long-text disable-ellipsis-on-hover"
              >
                {my_email}
              </Link>
            </div>
          </li>

          {/* <li className="contact-item">
            <div className="icon-box">
              <ion-icon name="phone-portrait-outline"></ion-icon>
            </div>

            <div className="contact-info">
              <p className="contact-title">موبایل</p>

              <a href="tel:+989337073579" className="contact-link">
                ۰۹۳۳۷۰۷۳۵۷۹
              </a>
            </div>
          </li> */}

          {/* <li className="contact-item">
            <div className="icon-box">
              <ion-icon name="calendar-outline"></ion-icon>
            </div>

            <div className="contact-info">
              <p className="contact-title">تولد</p>

              <time datetime="1982-06-23">۵/۹/۱۳۸۰</time>
            </div>
          </li> */}

          <li className="contact-item">
            <div className="icon-box">
              <Pin width="18" height="18" />
            </div>

            <div className="contact-info">
              <p className="contact-title">مکان</p>

              <address>خوزستان - دزفول</address>
            </div>
          </li>
        </ul>

        <div className="separator"></div>

        <ul className="social-list">
          <li className="social-item">
            <Link target="_blank" href={linkedin_link} className="social-link">
              <LinkedIn width="18" height="18" />
            </Link>
          </li>

          <li className="social-item">
            <Link target="_blank" href={github_link} className="social-link">
              <GithubIcon width="18" height="18" />
            </Link>
          </li>

          <li className="social-item">
            <Link target="_blank" href={twitter_link} className="social-link">
              <Twitter width="18" height="18" />
            </Link>
          </li>

          <li className="social-item">
            <Link target="_blank" href={telegram_link} className="social-link">
              <TelegramGrey width="18" height="18" />
            </Link>
          </li>

          {/* <li className="social-item">
            <a href="#" className="social-link">
              <ion-icon name="logo-instagram"></ion-icon>
            </a>
          </li> */}
        </ul>
      </div>
    </aside>
  )
}

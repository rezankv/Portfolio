import Link from "next/link"

// constants
import { _7Learn_link, bent_oak_systems_link, jsu_link } from "@/constants"

// components
import { CustomTooltip } from "@/components"

// icons
import {
  Book,
  Css,
  Docker,
  Express,
  Git,
  Github,
  Gitlab,
  Html,
  Javascript,
  Mui,
  Next,
  Nodejs,
  Pwa,
  Redux,
  Tailwind,
  Typescript,
  Webpack,
} from "@/icons"

const skills = [
  {
    name: "CSS",
    icon: {
      component: <Css width="30" height="25" />,
    },
  },
  {
    name: "Git",
    icon: {
      component: <Git width="30" height="25" />,
    },
  },
  {
    name: "Github",
    icon: {
      component: <Github width="30" height="25" />,
    },
  },
  {
    name: "Gitlab",
    icon: {
      component: <Gitlab width="30" height="25" />,
    },
  },
  {
    name: "HTML",
    icon: {
      component: <Html width="30" height="25" />,
    },
  },
  {
    name: "Javascript",
    icon: {
      component: <Javascript width="30" height="25" />,
    },
  },
  {
    name: "Typescript",
    icon: {
      component: <Typescript width="30" height="25" />,
    },
  },
  {
    name: "MUI",
    icon: {
      component: <Mui width="30" height="25" />,
    },
  },
  {
    name: "NextJs",
    icon: {
      component: <Next width="30" height="25" />,
    },
  },
  {
    name: "NodeJs",
    icon: {
      component: <Nodejs width="30" height="25" />,
    },
  },
  {
    name: "PWA",
    icon: {
      component: <Pwa width="30" height="25" />,
    },
  },
  {
    name: "Redux",
    icon: {
      component: <Redux width="30" height="25" />,
    },
  },
  {
    name: "Tailwind",
    icon: {
      component: <Tailwind width="30" height="25" />,
    },
  },
  {
    name: "Webpack",
    icon: {
      component: <Webpack width="30" height="25" />,
    },
  },
  {
    name: "Docker",
    icon: {
      component: <Docker width="30" height="25" />,
    },
  },
  {
    name: "ExpressJs",
    icon: {
      component: <Express width="25" height="25" />,
    },
  },
]
const Page = () => {
  const renderPageTitle = () => (
    <header>
      <h2 className="h2 article-title">رزومه</h2>
    </header>
  )

  const renderWorkExperiences = () => (
    <section className="timeline">
      <div className="title-wrapper">
        <div className="icon-box">
          <Book width="18" height="18" />
        </div>

        <h3 className="h3">تجربیات کاری</h3>
      </div>

      <ol className="timeline-list">
        <li className="timeline-item">
          <h4 className="h4 timeline-item-title">
            7Learn (
            <Link
              prefetch={false}
              target="_blank"
              className="d-inline text-white"
              href={_7Learn_link}
            >
              +
            </Link>
            ) - تهران (دورکاری)
          </h4>

          <span>
            <i>توسعه دهنده Frontend (اسفند ۱۴۰۲ - تیر ۱۴۰۳)</i>
          </span>

          <p className="timeline-text">
            من در 7Learn به پیاده سازی طرح ui/ux پروژه های SSR با اسکیل بزرگ با
            sass , jquery و html مشغول بودم.
            <br />
            <br />
            وظایف من :
          </p>
          <ul style={{ paddingInline: "2rem" }} className="timeline-text">
            <li className="list-style-type-disc">
              پیاده سازی pixel perfect طرح ui
            </li>
            <li className="list-style-type-disc">
              ساخت کامپوننت ها به صورت pure با استفاده از sass و jquery
            </li>
            <li className="list-style-type-disc">ایجاد ui kit پروژه</li>
            <li className="list-style-type-disc">
              استفاده از handlebars برای ایجاد صفحات
            </li>
            <li className="list-style-type-disc">کانفیگ کردن vite</li>
          </ul>
        </li>
        <li className="timeline-item" style={{ marginTop: "1rem" }}>
          <h4 className="h4 timeline-item-title">
            Bent Oak Systems (
            <Link
              prefetch={false}
              target="_blank"
              className="d-inline text-white"
              href={bent_oak_systems_link}
            >
              +
            </Link>
            ) - انگلستان (دورکاری)
          </h4>

          <span>
            <i>توسعه دهنده React (مهر ۱۴۰۱ - اردیبهشت ۱۴۰۲)</i>
          </span>

          <p className="timeline-text">
            من در بنتوک سیستم بر روی یک پروژه رزرو نوبت و ارئه خدمات مربوط به
            چتر بازی ( Sky Diving ) کار میکردم .
            <br />
            <br />
            وظایف من :
          </p>
          <ul style={{ paddingInline: "2rem" }} className="timeline-text">
            <li className="list-style-type-disc">
              ارائه راهکار های مناسب برای افزایش پرفورمنس بر اساس best practice
              ها
            </li>
            <li className="list-style-type-disc">
              پیاده سازی قالب ایمیل های تبلیغاتی و اطلاع رسانی با استفاده از
              تمپلیت انجین Handlebars
            </li>
            <li className="list-style-type-disc">
              استفاده از React Query برای عملیات Data fetching & Data caching
            </li>
            <li className="list-style-type-disc">
              پیاده سازی عملیات CRUD و همچنین search , sort , filter در بخش های
              مختلف
            </li>
            <li className="list-style-type-disc">
              استفاده از ابزار هایی نظیر Docker , Postgres , NX monorepo در طول
              توسعه پروژه
            </li>
          </ul>
        </li>
        <li className="timeline-item" style={{ marginTop: "1rem" }}>
          <h4 className="h4 timeline-item-title">
            دانشگاه صنعتی جندی شاپور (
            <Link
              prefetch={false}
              target="_blank"
              className="d-inline text-white"
              href={jsu_link}
            >
              +
            </Link>
            ) - دزفول (دورکاری)
          </h4>

          <span>
            <i>توسعه دهنده React (فروردین ۱۴۰۰ - تیر ۱۴۰۱)</i>
          </span>

          <p className="timeline-text">
            من در تیم توسعه نرم افزار دانشگاه صنعتی جندی شاپور بر روی پروژه پیام
            رسان تحت وب داخلی دانشگاه کار میکردم.
            <br />
            <br />
            وظایف من :
          </p>
          <ul style={{ paddingInline: "2rem" }} className="timeline-text">
            <li className="list-style-type-disc">
              ساخت کامپوننت های Reusable با کاستومایز کردن material ui
            </li>
            <li className="list-style-type-disc">
              پیاده سازی Redux Toolkit و Redux thunk برای مدیریت استیت و ارتباط
              با API
            </li>
            <li className="list-style-type-disc">
              استفاده از Axios interceptors برای کار با Api endpoint های
              Protected
            </li>
            <li className="list-style-type-disc">
              بررسی کد های دیگر توسعه دهندگان (Code Review)
            </li>
          </ul>
        </li>
      </ol>
    </section>
  )

  const renderEducationalExperiences = () => (
    <section className="timeline">
      <div className="title-wrapper">
        <div className="icon-box">
          <Book width="18" height="18" />
        </div>

        <h3 className="h3">تحصیلات</h3>
      </div>

      <ol className="timeline-list">
        <li className="timeline-item">
          <h4 className="h4 timeline-item-title">
            دانشگاه صنعتی جندی شاپور دزفول
          </h4>

          <span>
            <i>کارشناسی مهندسی صنایع (۱۳۹۹ — اکنون)</i>
          </span>

          <p className="timeline-text">
            من در دانشگاه صنعتی جندی شاپور در مقطع کارشناسی رشته مهندسی صنایع
            مشغول به تحصیل هستم.
          </p>
        </li>
      </ol>
    </section>
  )

  const renderSkills = () => {
    return (
      <section className="skill">
        <h3 className="h3 skills-title">مهارت های من</h3>

        <ul
          className="skills-list content-card"
          style={{
            flexWrap: "wrap",
            display: "flex",
            gap: "3rem",
            justifyContent: "center",
          }}
        >
          {skills.map(({ icon, name }) => (
            <CustomTooltip id={name} value={name} key={name}>
              <li
                className="icon-box "
                style={{
                  width: "50px",
                  height: "50px",
                  background:
                    "linear-gradient( to bottom right, hsl(0, 0%, 36%) 0%, hsla(0, 0%, 48%, 0) 50% )",
                }}
              >
                {icon.component}
              </li>
            </CustomTooltip>
          ))}
        </ul>
      </section>
    )
    // return (
    //   <section className="skill">
    //     <h3 className="h3 skills-title">مهارت های من</h3>

    //     <ul className="skills-list content-card">
    //       <li className="skills-item">
    //         <div className="title-wrapper">
    //           <h5 className="h5">طراحی وب</h5>
    //           <data value="80">۸۰%</data>
    //         </div>

    //         <div className="skill-progress-bg">
    //           <div
    //             className="skill-progress-fill"
    //             style={{ width: '80%' }}
    //           ></div>
    //         </div>
    //       </li>

    //       <li className="skills-item">
    //         <div className="title-wrapper">
    //           <h5 className="h5">طراحی گرافیک</h5>
    //           <data value="70">۷۰%</data>
    //         </div>

    //         <div className="skill-progress-bg">
    //           <div
    //             className="skill-progress-fill"
    //             style={{ width: '70%' }}
    //           ></div>
    //         </div>
    //       </li>

    //       <li className="skills-item">
    //         <div className="title-wrapper">
    //           <h5 className="h5">برندسازی</h5>
    //           <data value="90">۹۰%</data>
    //         </div>

    //         <div className="skill-progress-bg">
    //           <div
    //             className="skill-progress-fill"
    //             style={{ width: '90%' }}
    //           ></div>
    //         </div>
    //       </li>

    //       <li className="skills-item">
    //         <div className="title-wrapper">
    //           <h5 className="h5">وردپرس</h5>
    //           <data value="50">۵۰%</data>
    //         </div>

    //         <div className="skill-progress-bg">
    //           <div
    //             className="skill-progress-fill"
    //             style={{ width: '50%' }}
    //           ></div>
    //         </div>
    //       </li>
    //     </ul>
    //   </section>
    // );
  }
  return (
    <>
      <article>
        {renderPageTitle()}
        {renderWorkExperiences()}
        {renderEducationalExperiences()}
        {renderSkills()}
      </article>
    </>
  )
}

export default Page

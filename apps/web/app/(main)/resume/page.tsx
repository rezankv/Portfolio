import React from 'react';
import Navbar from '../components/navbar';

const page = () => {
  return (
    <>
      <Navbar />
      <article className="resume" data-page="رزومه">
        <header>
          <h2 className="h2 article-title">رزومه</h2>
        </header>

        <section className="timeline">
          <div className="title-wrapper">
            <div className="icon-box">
              {/* <ion-icon name="book-outline"></ion-icon> */}
            </div>

            <h3 className="h3">تحصیلات</h3>
          </div>

          <ol className="timeline-list">
            <li className="timeline-item">
              <h4 className="h4 timeline-item-title">دانشگاه صنعتی طراحان</h4>

              <span>۱۳۹۰ — ۱۳۹۵</span>

              <p className="timeline-text">
                من در این دانشگاه به مدت ۵ سال به صورت حرفه ای به تحصیل پرداختم
                و با انجام پروژه های مختلف نمرات عالی کسب کردم
              </p>
            </li>

            <li className="timeline-item">
              <h4 className="h4 timeline-item-title">دانشگاه هنر پاریس</h4>

              <span>۱۳۸۸ — ۱۳۹۰</span>

              <p className="timeline-text">
                من در این دانشگاه به مدت ۵ سال به صورت حرفه ای به تحصیل پرداختم
                و با انجام پروژه های مختلف نمرات عالی کسب کردم
              </p>
            </li>

            <li className="timeline-item">
              <h4 className="h4 timeline-item-title">هنرستان هنر اهواز</h4>

              <span>۱۳۸۴ — ۱۳۸۸</span>

              <p className="timeline-text">
                من در این دانشگاه به مدت ۵ سال به صورت حرفه ای به تحصیل پرداختم
                و با انجام پروژه های مختلف نمرات عالی کسب کردم من در این دانشگاه
                به مدت ۵ سال به صورت حرفه ای به تحصیل پرداختم و با انجام پروژه
                های مختلف نمرات عالی کسب کردم
              </p>
            </li>
          </ol>
        </section>

        <section className="timeline">
          <div className="title-wrapper">
            <div className="icon-box">
              {/* <ion-icon name="book-outline"></ion-icon> */}
            </div>

            <h3 className="h3">تجربیات کاری</h3>
          </div>

          <ol className="timeline-list">
            <li className="timeline-item">
              <h4 className="h4 timeline-item-title">کارگردان هنری</h4>

              <span>۱۳۹۶ — اکنون</span>

              <p className="timeline-text">
                من در این دانشگاه به مدت ۵ سال به صورت حرفه ای به تحصیل پرداختم
                و با انجام پروژه های مختلف نمرات عالی کسب کردم
              </p>
            </li>

            <li className="timeline-item">
              <h4 className="h4 timeline-item-title">کارگردان فنی</h4>

              <span>۱۳۹۴ — ۱۳۹۵</span>

              <p className="timeline-text">
                من در این دانشگاه به مدت ۵ سال به صورت حرفه ای به تحصیل پرداختم
                و با انجام پروژه های مختلف نمرات عالی کسب کردم من در این دانشگاه
                به مدت ۵ سال به صورت حرفه ای به تحصیل پرداختم و با انجام پروژه
                های مختلف نمرات عالی کسب کردم
              </p>
            </li>

            <li className="timeline-item">
              <h4 className="h4 timeline-item-title">طراح وب</h4>

              <span>۱۳۹۰ — ۱۳۹۲</span>

              <p className="timeline-text">
                من در این دانشگاه به مدت ۵ سال به صورت حرفه ای به تحصیل پرداختم
                و با انجام پروژه های مختلف نمرات عالی کسب کردم من در این دانشگاه
                به مدت ۵ سال به صورت حرفه ای به تحصیل پرداختم و با انجام پروژه
                های مختلف نمرات عالی کسب کردم
              </p>
            </li>
          </ol>
        </section>

        <section className="skill">
          <h3 className="h3 skills-title">مهارت های من</h3>

          <ul className="skills-list content-card">
            <li className="skills-item">
              <div className="title-wrapper">
                <h5 className="h5">طراحی وب</h5>
                <data value="80">۸۰%</data>
              </div>

              <div className="skill-progress-bg">
                <div
                  className="skill-progress-fill"
                  style={{ width: '80%' }}
                ></div>
              </div>
            </li>

            <li className="skills-item">
              <div className="title-wrapper">
                <h5 className="h5">طراحی گرافیک</h5>
                <data value="70">۷۰%</data>
              </div>

              <div className="skill-progress-bg">
                <div
                  className="skill-progress-fill"
                  style={{ width: '70%' }}
                ></div>
              </div>
            </li>

            <li className="skills-item">
              <div className="title-wrapper">
                <h5 className="h5">برندسازی</h5>
                <data value="90">۹۰%</data>
              </div>

              <div className="skill-progress-bg">
                <div
                  className="skill-progress-fill"
                  style={{ width: '90%' }}
                ></div>
              </div>
            </li>

            <li className="skills-item">
              <div className="title-wrapper">
                <h5 className="h5">وردپرس</h5>
                <data value="50">۵۰%</data>
              </div>

              <div className="skill-progress-bg">
                <div
                  className="skill-progress-fill"
                  style={{ width: '50%' }}
                ></div>
              </div>
            </li>
          </ul>
        </section>
      </article>
    </>
  );
};

export default page;

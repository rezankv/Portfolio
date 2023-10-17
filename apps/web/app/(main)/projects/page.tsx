import React from 'react';

const page = () => {
  return (
    <>
      <article className="portfolio" data-page="نمونه کار">
        <header>
          <h2 className="h2 article-title">نمونه کار ها</h2>
        </header>

        <section className="projects">
          <ul className="filter-list">
            <li className="filter-item">
              <button className="active" data-filter-btn>
                همه
              </button>
            </li>

            <li className="filter-item">
              <button data-filter-btn>طراحی وب</button>
            </li>

            <li className="filter-item">
              <button data-filter-btn>اپلیکیشن</button>
            </li>

            <li className="filter-item">
              <button data-filter-btn>توسعه وب</button>
            </li>
          </ul>

          <div className="filter-select-box">
            <button className="filter-select" data-select>
              <div className="select-value" data-selecct-value>
                انتخاب دسته بندی
              </div>

              <div className="select-icon">
                <ion-icon name="chevron-down"></ion-icon>
              </div>
            </button>

            <ul className="select-list">
              <li className="select-item">
                <button data-select-item>همه</button>
              </li>

              <li className="select-item">
                <button data-select-item>طراحی وب</button>
              </li>

              <li className="select-item">
                <button data-select-item>اپلیکیشن</button>
              </li>

              <li className="select-item">
                <button data-select-item>توسعه وب</button>
              </li>
            </ul>
          </div>

          <ul className="project-list">
            <li
              className="project-item active"
              data-filter-item
              data-category="توسعه وب"
            >
              <a href="#">
                <figure className="project-img">
                  <div className="project-item-icon-box">
                    <ion-icon name="eye-outline"></ion-icon>
                  </div>

                  <img
                    src="/images/project-1.jpg"
                    alt="finance"
                    loading="lazy"
                  />
                </figure>

                <h3 className="project-title">داشبورد مدیریت</h3>

                <p className="project-category">توسعه وب</p>
              </a>
            </li>

            <li
              className="project-item active"
              data-filter-item
              data-category="توسعه وب"
            >
              <a href="#">
                <figure className="project-img">
                  <div className="project-item-icon-box">
                    <ion-icon name="eye-outline"></ion-icon>
                  </div>

                  <img
                    src="/images/project-2.png"
                    alt="orizon"
                    loading="lazy"
                  />
                </figure>

                <h3 className="project-title">داشبورد مدیریت</h3>

                <p className="project-category">توسعه وب</p>
              </a>
            </li>

            <li
              className="project-item active"
              data-filter-item
              data-category="طراحی وب"
            >
              <a href="#">
                <figure className="project-img">
                  <div className="project-item-icon-box">
                    <ion-icon name="eye-outline"></ion-icon>
                  </div>

                  <img src="/images/project-3.jpg" alt="fundo" loading="lazy" />
                </figure>

                <h3 className="project-title">اجاره اقامتگاه</h3>

                <p className="project-category">طراحی</p>
              </a>
            </li>

            <li
              className="project-item active"
              data-filter-item
              data-category="اپلیکیشن"
            >
              <a href="#">
                <figure className="project-img">
                  <div className="project-item-icon-box">
                    <ion-icon name="eye-outline"></ion-icon>
                  </div>

                  <img
                    src="/images/project-4.png"
                    alt="brawlhalla"
                    loading="lazy"
                  />
                </figure>

                <h3 className="project-title">بازیلند</h3>

                <p className="project-category">اپلیکیشن</p>
              </a>
            </li>

            <li
              className="project-item active"
              data-filter-item
              data-category="طراحی وب"
            >
              <a href="#">
                <figure className="project-img">
                  <div className="project-item-icon-box">
                    <ion-icon name="eye-outline"></ion-icon>
                  </div>

                  <img src="/images/project-5.png" alt="dsm." loading="lazy" />
                </figure>

                <h3 className="project-title">جی اس ام</h3>

                <p className="project-category">طراحی</p>
              </a>
            </li>

            <li
              className="project-item active"
              data-filter-item
              data-category="طراحی وب"
            >
              <a href="#">
                <figure className="project-img">
                  <div className="project-item-icon-box">
                    <ion-icon name="eye-outline"></ion-icon>
                  </div>

                  <img
                    src="/images/project-6.png"
                    alt="metaspark"
                    loading="lazy"
                  />
                </figure>

                <h3 className="project-title">متالید</h3>

                <p className="project-category">طراحی</p>
              </a>
            </li>

            <li
              className="project-item active"
              data-filter-item
              data-category="توسعه وب"
            >
              <a href="#">
                <figure className="project-img">
                  <div className="project-item-icon-box">
                    <ion-icon name="eye-outline"></ion-icon>
                  </div>

                  <img
                    src="/images/project-7.png"
                    alt="summary"
                    loading="lazy"
                  />
                </figure>

                <h3 className="project-title">قالب تابستان</h3>

                <p className="project-category">توسعه وب</p>
              </a>
            </li>

            <li
              className="project-item active"
              data-filter-item
              data-category="اپلیکیشن"
            >
              <a href="#">
                <figure className="project-img">
                  <div className="project-item-icon-box">
                    <ion-icon name="eye-outline"></ion-icon>
                  </div>

                  <img
                    src="/images/project-8.jpg"
                    alt="task manager"
                    loading="lazy"
                  />
                </figure>

                <h3 className="project-title">مدیریت وظایف</h3>

                <p className="project-category">اپلیکیشن</p>
              </a>
            </li>

            <li
              className="project-item active"
              data-filter-item
              data-category="توسعه وب"
            >
              <a href="#">
                <figure className="project-img">
                  <div className="project-item-icon-box">
                    <ion-icon name="eye-outline"></ion-icon>
                  </div>

                  <img
                    src="/images/project-9.png"
                    alt="arrival"
                    loading="lazy"
                  />
                </figure>

                <h3 className="project-title">تحلیلگر من</h3>

                <p className="project-category">توسعه وب</p>
              </a>
            </li>
          </ul>
        </section>
      </article>
    </>
  );
};

export default page;

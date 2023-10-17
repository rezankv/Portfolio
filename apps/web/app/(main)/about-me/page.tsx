import React from 'react';

const Page = () => {
  return (
    <>
      <article className="about active" data-page="درباره من">
        <header>
          <h2 className="h2 article-title">درباره من</h2>
        </header>

        <section className="about-text">
          <p>
            من مدیر خلاق و طراح UI/UX اهل سیدنی، استرالیا هستم که در زمینه توسعه
            وب و رسانه چاپ کار می‌کنم. لذت می‌برم که مشکلات پیچیده را به
            طراحی‌های ساده، زیبا و کاربرپسند تبدیل کنم.
          </p>

          <p>
            وظیفه‌ام این است که وب‌سایت شما را به گونه‌ای ایجاد کنم که عملی و
            کاربرپسند باشد و در عین حال جذابیت داشته باشد. علاوه بر این، به
            محصول شما لمسه شخصی اضافه کرده و اطمینان می‌یابم که جلب توجه و آسان
            برای استفاده باشد. هدف من این است که پیام و هویت شما را به نحوی
            خلاقانه انتقال دهم. طراحی وب را برای بسیاری از شرکت‌های معروف ایجاد
            کردم.
          </p>
        </section>

        <section className="service">
          <h3 className="h3 service-title">خدمات من</h3>

          <ul className="service-list">
            <li className="service-item">
              <div className="service-content-box">
                <h4 className="h4 service-item-title">طراحی وب</h4>

                <p className="service-item-text">
                  بالاترین سطح طراحی مدرن و با کیفیت در سطح حرفه‌ای.
                </p>
              </div>
              <div className="service-icon-box">
                <img
                  src="/images/icon-design.svg
          "
                  alt="design icon"
                  width="40"
                />
              </div>
            </li>

            <li className="service-item">
              <div className="service-content-box">
                <h4 className="h4 service-item-title">توسعه وب</h4>

                <p className="service-item-text">
                  توسعه وب‌سایت با کیفیت بالا در سطح حرفه‌ای.
                </p>
              </div>
              <div className="service-icon-box">
                <img
                  src="/images/icon-dev.svg"
                  alt="Web development icon"
                  width="40"
                />
              </div>
            </li>

            <li className="service-item">
              <div className="service-content-box">
                <h4 className="h4 service-item-title">اپلیکیشن موبایل</h4>

                <p className="service-item-text">
                  توسعه حرفه‌ای اپلیکیشن‌ها برای iOS و Android
                </p>
              </div>
              <div className="service-icon-box">
                <img
                  src="/images/icon-app.svg"
                  alt="mobile app icon"
                  width="40"
                />
              </div>
            </li>

            <li className="service-item">
              <div className="service-content-box">
                <h4 className="h4 service-item-title">عکاسی</h4>

                <p className="service-item-text">
                  من تصاویر با کیفیت و حرفه‌ای در هر دسته‌بندی تهیه می‌کنم.
                </p>
              </div>
              <div className="service-icon-box">
                <img
                  src="/images/icon-photo.svg"
                  alt="camera icon"
                  width="40"
                />
              </div>
            </li>
          </ul>
        </section>

        {/* <section className="testimonials">
          <h3 className="h3 testimonials-title">نظرات مشتریان</h3>

          <ul className="testimonials-list has-scrollbar">
            <li className="testimonials-item">
              <div className="content-card" data-testimonials-item>
                <figure className="testimonials-avatar-box">
                  <img
                    src="/images/avatar-1.png"
                    alt="Daniel lewis"
                    width="60"
                    data-testimonials-avatar
                  />
                </figure>

                <h4
                  className="h4 testimonials-item-title"
                  data-testimonials-title
                >
                  محمد باقری
                </h4>

                <div className="testimonials-text" data-testimonials-text>
                  <p>
                    رضا برای ایجاد هویت شرکتی استخدام شد. ما از کار انجام شده
                    بسیار راضی بودیم. او دارای تجربه زیادی است و به نیازهای
                    مشتری بسیار توجه دارد.
                  </p>
                </div>
              </div>
            </li>

            <li className="testimonials-item">
              <div className="content-card" data-testimonials-item>
                <figure className="testimonials-avatar-box">
                  <img
                    src="/images/avatar-2.png"
                    alt="Jessica miller"
                    width="60"
                    data-testimonials-avatar
                  />
                </figure>

                <h4
                  className="h4 testimonials-item-title"
                  data-testimonials-title
                >
                  زهرا مولایی
                </h4>

                <div className="testimonials-text" data-testimonials-text>
                  <p>
                    رضا برای ایجاد هویت شرکتی استخدام شد. ما از کار انجام شده
                    بسیار راضی بودیم. او دارای تجربه زیادی است و به نیازهای
                    مشتری بسیار توجه دارد
                  </p>
                </div>
              </div>
            </li>

            <li className="testimonials-item">
              <div className="content-card" data-testimonials-item>
                <figure className="testimonials-avatar-box">
                  <img
                    src="/images/avatar-3.png"
                    alt="Emily evans"
                    width="60"
                    data-testimonials-avatar
                  />
                </figure>

                <h4
                  className="h4 testimonials-item-title"
                  data-testimonials-title
                >
                  سارا مرادی
                </h4>

                <div className="testimonials-text" data-testimonials-text>
                  <p>
                    رضا برای ایجاد هویت شرکتی استخدام شد. ما از کار انجام شده
                    بسیار راضی بودیم. او دارای تجربه زیادی است و به نیازهای
                    مشتری بسیار توجه دارد
                  </p>
                </div>
              </div>
            </li>

            <li className="testimonials-item">
              <div className="content-card" data-testimonials-item>
                <figure className="testimonials-avatar-box">
                  <img
                    src="/images/avatar-4.png"
                    alt="Henry william"
                    width="60"
                    data-testimonials-avatar
                  />
                </figure>

                <h4
                  className="h4 testimonials-item-title"
                  data-testimonials-title
                >
                  میلاد کرمی
                </h4>

                <div className="testimonials-text" data-testimonials-text>
                  <p>
                    رضا برای ایجاد هویت شرکتی استخدام شد. ما از کار انجام شده
                    بسیار راضی بودیم. او دارای تجربه زیادی است و به نیازهای
                    مشتری بسیار توجه دارد
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </section> */}

        <div className="modal-container" data-modal-container>
          <div className="overlay" data-overlay></div>

          <section className="testimonials-modal">
            <button className="modal-close-btn" data-modal-close-btn>
              <ion-icon name="close-outline"></ion-icon>
            </button>

            <div className="modal-img-wrapper">
              <figure className="modal-avatar-box">
                <img
                  src="/images/avatar-1.png"
                  alt="Daniel lewis"
                  width="80"
                  data-modal-img
                />
              </figure>

              <img src="/images/icon-quote.svg" alt="quote icon" />
            </div>

            <div className="modal-content">
              <h4 className="h3 modal-title" data-modal-title>
                رضا نیک روش
              </h4>

              {/* <time datetime="2021-06-14">۲ آذر</time> */}

              <div data-modal-text>
                <p>توضیحات</p>
              </div>
            </div>
          </section>
        </div>

        {/* <section className="clients">
          <h3 className="h3 clients-title">مشتریان</h3>

          <ul className="clients-list has-scrollbar">
            <li className="clients-item">
              <a href="#">
                <img src="/images/logo-1-color.png" alt="client logo" />
              </a>
            </li>

            <li className="clients-item">
              <a href="#">
                <img src="/images/logo-2-color.png" alt="client logo" />
              </a>
            </li>

            <li className="clients-item">
              <a href="#">
                <img src="/images/logo-3-color.png" alt="client logo" />
              </a>
            </li>

            <li className="clients-item">
              <a href="#">
                <img src="/images/logo-4-color.png" alt="client logo" />
              </a>
            </li>

            <li className="clients-item">
              <a href="#">
                <img src="/images/logo-5-color.png" alt="client logo" />
              </a>
            </li>

            <li className="clients-item">
              <a href="#">
                <img src="/images/logo-6-color.png" alt="client logo" />
              </a>
            </li>
          </ul>
        </section> */}
      </article>
    </>
  );
};

export default Page;

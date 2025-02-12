import Link from 'next/link';
import Image from 'next/image';

// ** constants
import { BLOG_ROUTE, PROJECTS_ROUTE, RESUME_ROUTE } from '@web/constants';

const Page = () => {
  return (
    <>
      <article className="about active" data-page="درباره من">
        <header>
          <h2 className="h2 article-title">درباره من</h2>
        </header>

        <section className="about-text">
          <h3>سلام 🙋🏻‍♂️</h3>
          <h3>من رضا هستم و این وبسایت شخصی منه 🚀</h3>
          <p>
 
            از سال ۹۹ برنامه نویسی وب انجام میدم.
 
            
 
            <br />
            تجربیات خوبی از کارکردن با تیم های مختلف و همچنین پروژه ها ، ابزار و
            چالش های گوناکون دارم که در بخش بلاگ (
            <Link className="d-inline text-yellow" href={BLOG_ROUTE}>
              +
            </Link>
            ) میتونی درمورد شون بخونی.
            <br />
            همینطور میتونی سوابق شغلی من (
            <Link className="d-inline text-yellow" href={RESUME_ROUTE}>
              +
            </Link>
            ) و پروژه هایی که انجام دادم رو از اینجا (
            <Link className="d-inline text-yellow" href={PROJECTS_ROUTE}>
              +
            </Link>
            ) ببینی.
            <br />
            مشارکت اوپن سورس و مطالعه مباحث حوزه نرم افزار از علاقه مندی هام هست
            و اگر فرصتی باشه اون ها رو با شما به اشتراک میزارم ❤️
          </p>

          {/* <p>
              وظیفه‌ام این است که وب‌سایت شما را به گونه‌ای ایجاد کنم که عملی و
              کاربرپسند باشد و در عین حال جذابیت داشته باشد. علاوه بر این، به
              محصول شما لمسه شخصی اضافه کرده و اطمینان می‌یابم که جلب توجه و آسان
              برای استفاده باشد. هدف من این است که پیام و هویت شما را به نحوی
              خلاقانه انتقال دهم. طراحی وب را برای بسیاری از شرکت‌های معروف ایجاد
              کردم.
            </p> */}
        </section>

        <section className="service">
          <h3 className="h3 service-title">خدمات من</h3>

          <ul className="service-list">
            <li className="service-item">
              <div className="service-content-box">
                <h4 className="h4 service-item-title">وب اپلیکیشن</h4>

                <p className="service-item-text">
                  من پروژه رویایی شما رو از صفر تا صد میسازم!
                </p>
              </div>
              <div className="service-icon-box">
                <Image
                  src="/images/icon-dev.svg"
                  alt="design icon"
                  width="40"
                  height="40"
                />
              </div>
            </li>

            <li className="service-item">
              <div className="service-content-box">
                <h4 className="h4 service-item-title">وردپرس</h4>

                <p className="service-item-text">
                  میخوای خیلی سریع و با قیمت مناسب سایت داشته باشی؟ وردپرس برای
                  شماست!
                </p>
              </div>
              <div className="service-icon-box">
                <Image
                  src="/images/icon-wordpress.svg"
                  alt="Web development icon"
                  width="40"
                  height="40"
                />
              </div>
            </li>

            <li className="service-item">
              <div className="service-content-box">
                <h4 className="h4 service-item-title">ربات تلگرام</h4>

                <p className="service-item-text">
                  ربات ها میتونن یک دستیار خوب و سریع برای کسب و کار شما در بستر
                  تلگرام باشن!
                </p>
              </div>
              <div className="service-icon-box">
                <Image
                  src="/images/icon-telegram.svg"
                  alt="mobile app icon"
                  width="40"
                  height="40"
                />
              </div>
            </li>

            <li className="service-item">
              <div className="service-content-box">
                <h4 className="h4 service-item-title">مشاوره</h4>

                <p className="service-item-text">
                  نمیدونی باید از کجا شروع کنی ؟ من بهت مسیر درستو نشون میدم
                </p>
              </div>
              <div className="service-icon-box">
                <Image
                  src="/images/icon-people.svg"
                  alt="camera icon"
                  width="40"
                  height="40"
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
                  alt="customer name"
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

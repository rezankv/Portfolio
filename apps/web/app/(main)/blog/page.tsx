import React from 'react';

const page = () => {
  const renderPosts = () => (
    <section className="blog-posts">
      <ul className="blog-posts-list">
        <li className="blog-post-item">
          <a href="#">
            <figure className="blog-banner-box">
              <img
                src="/images/blog-1.jpg"
                alt="Design conferences in 2022"
                loading="lazy"
              />
            </figure>

            <div className="blog-content">
              <div className="blog-meta">
                <p className="blog-category">طراحی</p>

                <span className="dot"></span>

                {/* <time datetime="2022-02-23">۵ آذر</time> */}
              </div>

              <h3 className="h3 blog-item-title">کنفرانس طراحان ۲۰۲۲</h3>

              <p className="blog-text">کنفرانس سالانه طراحان وب و موبایل</p>
            </div>
          </a>
        </li>

        <li className="blog-post-item">
          <a href="#">
            <figure className="blog-banner-box">
              <img
                src="/images/blog-2.jpg"
                alt="Best fonts every designer"
                loading="lazy"
              />
            </figure>

            <div className="blog-content">
              <div className="blog-meta">
                <p className="blog-category">طراحی</p>

                <span className="dot"></span>

                {/* <time datetime="2022-02-23">۲۲ آذر</time> */}
              </div>

              <h3 className="h3 blog-item-title">بهترین فونت های امسال</h3>

              <p className="blog-text">
                معرفی مجموعه ای از بهترین فونت های استفاده شده در وب
              </p>
            </div>
          </a>
        </li>

        <li className="blog-post-item">
          <a href="#">
            <figure className="blog-banner-box">
              <img
                src="/images/blog-3.jpg"
                alt="Design digest #80"
                loading="lazy"
              />
            </figure>

            <div className="blog-content">
              <div className="blog-meta">
                <p className="blog-category">طراحی</p>

                <span className="dot"></span>

                {/* <time datetime="2022-02-23">۲۸ مهر</time> */}
              </div>

              <h3 className="h3 blog-item-title">راهنمای انتخاب رنگ</h3>

              <p className="blog-text">
                معرفی تکنیک های موثر انتخاب درست رنگ در وبسایت
              </p>
            </div>
          </a>
        </li>

        <li className="blog-post-item">
          <a href="#">
            <figure className="blog-banner-box">
              <img
                src="/images/blog-4.jpg"
                alt="UI interactions of the week"
                loading="lazy"
              />
            </figure>

            <div className="blog-content">
              <div className="blog-meta">
                <p className="blog-category">طراحی</p>

                <span className="dot"></span>

                {/* <time datetime="2022-02-23">۲ مهر</time> */}
              </div>

              <h3 className="h3 blog-item-title">ترند های طراحی در دهه اخیر</h3>

              <p className="blog-text">
                در این پست به بررسی ترند های طراحی در ۱۰ سال گذشته میپردازیم
              </p>
            </div>
          </a>
        </li>

        <li className="blog-post-item">
          <a href="#">
            <figure className="blog-banner-box">
              <img
                src="/images/blog-5.jpg"
                alt="The forgotten art of spacing"
                loading="lazy"
              />
            </figure>

            <div className="blog-content">
              <div className="blog-meta">
                <p className="blog-category">طراحی</p>

                <span className="dot"></span>

                {/* <time datetime="2022-02-23">۱۷ شهریور</time> */}
              </div>

              <h3 className="h3 blog-item-title">
                نکات فراموش شده درمورد فاصله ها
              </h3>

              <p className="blog-text">
                تاحالا در مورد اهمیت فاصله در طراحی مطالعه کردی ؟ این پست رو از
                دست نده
              </p>
            </div>
          </a>
        </li>

        <li className="blog-post-item">
          <a href="#">
            <figure className="blog-banner-box">
              <img
                src="/images/blog-6.jpg"
                alt="Design digest #79"
                loading="lazy"
              />
            </figure>

            <div className="blog-content">
              <div className="blog-meta">
                <p className="blog-category">طراحی</p>

                <span className="dot"></span>

                {/* <time datetime="2022-02-23">۲ فروردین</time> */}
              </div>

              <h3 className="h3 blog-item-title">هنر ترکیب</h3>

              <p className="blog-text">
                طراحی هنر ترکیب المان های مختلف هست. در این پست به بررسی این
                موضوع میپردازیم
              </p>
            </div>
          </a>
        </li>
      </ul>
    </section>
  );
  const renderUnderDevelopmentMessage = () => (
    <>
      <img
        style={{
          margin: '7rem auto 0 auto',
          maxWidth: '80px',
          maxHeight: '80px',
          opacity: 0.8,
        }}
        alt="ic-repair"
        src="/images/icon-repair.svg"
      />
      <h3
        style={{
          textAlign: 'center',
          color: 'var(--orange-yellow-crayola)',
          opacity: 0.8,
          marginBottom: '3rem',
        }}
      >
        این قسمت در حال راه اندازی است
      </h3>
    </>
  );
  return (
    <>
      <article className="blog" style={{minHeight:'unset'}}>
        <header>
          <h2 className="h2 article-title">بلاگ</h2>
        </header>
        {renderUnderDevelopmentMessage()}
        {/* {renderPosts()} */}
      </article>
    </>
  );
};

export default page;

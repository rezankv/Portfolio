import React from 'react';

const page = () => {
  return (
    <>
      <article className="contact" data-page="ارتباط با من">
        <header>
          <h2 className="h2 article-title">ارتباط با من</h2>
        </header>

        <section className="mapbox" data-mapbox>
          <figure>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d199666.5651251294!2d-121.58334177520186!3d38.56165006739519!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x809ac672b28397f9%3A0x921f6aaa74197fdb!2sSacramento%2C%20CA%2C%20USA!5e0!3m2!1sen!2sbd!4v1647608789441!5m2!1sen!2sbd"
              width="400"
              height="300"
              loading="lazy"
            ></iframe>
          </figure>
        </section>

        <section className="contact-form">
          <h3 className="h3 form-title">فرم تماس</h3>

          <form action="#" className="form" data-form>
            <div className="input-wrapper">
              <input
                type="text"
                name="fullname"
                className="form-input"
                placeholder="نام و نام خانوادگی"
                required
                data-form-input
              />

              <input
                type="email"
                name="email"
                className="form-input"
                placeholder="آدرس ایمیل"
                required
                data-form-input
              />
            </div>

            <textarea
              name="message"
              className="form-input"
              placeholder="پیام شما"
              required
              data-form-input
            ></textarea>

            <button className="form-btn" type="submit" disabled data-form-btn>
              <ion-icon name="paper-plane"></ion-icon>
              <span>ارسال پیام</span>
            </button>
          </form>
        </section>
      </article>
    </>
  );
};

export default page;

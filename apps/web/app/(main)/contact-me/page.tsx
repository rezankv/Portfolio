import ContactForm from './components/ContactForm';

const Page = () => {
  return (
    <>
      <article className="contact" data-page="ارتباط با من">
        <header>
          <h2 className="h2 article-title">ارتباط با من</h2>
        </header>

        <section className="mapbox" data-mapbox>
          <figure>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d218010.7427231114!2d48.505780786927424!3d31.375039933167137!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3fc3df8b8d29bbf5%3A0x4968f1dd5789625c!2sAhvaz%2C%20Khuzestan%20Province%2C%20Iran!5e0!3m2!1sen!2s!4v1697559247434!5m2!1sen!2s"
              width="400"
              height="300"
              loading="lazy"
            ></iframe>
          </figure>
        </section>

        <section className="contact-form">
          <h3 className="h3 form-title">فرم تماس</h3>

          <ContactForm />
        </section>
      </article>
    </>
  );
};

export default Page;

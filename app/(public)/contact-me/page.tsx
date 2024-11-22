// locals
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
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d53902.01279234507!2d48.39738739999999!3d32.39569089999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3fe9c0026ffde9d7%3A0x5f778849aa5c2962!2sDezful%2C%20Khuzestan%20Province!5e0!3m2!1sen!2s!4v1722590095945!5m2!1sen!2s"
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

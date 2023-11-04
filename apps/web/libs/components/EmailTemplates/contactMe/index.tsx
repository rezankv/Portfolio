interface Props {
  name: string;
  email: string;
  message: string;
}

const ContactMeTemplate: React.FC<Props> = ({ name, email, message }) => (
  <div>
    <h1>پیام از طرف کاربر سایت</h1>
    <h4>نام :‌ {name}</h4>
    <h4>ایمیل :‌ {email}</h4>
    <br />
    <p>پیام :‌ {message}</p>
  </div>
);
export default ContactMeTemplate;

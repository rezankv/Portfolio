import Link from 'next/link';

// ** constants
import { HOME_ROUTE } from '@/constants';

const Page = () => {
  return (
    <article className="notfound-section ">
      <h1 className="notfound-title">404</h1>
      <div className="notfound-description">محتوا مورد نظر یافت نشد</div>
      <Link
        target="_parent"
        href={HOME_ROUTE}
        replace
        className="notfound-btn"
      >
        بازگشت به صفحه اصلی
      </Link>
    </article>
  );
};

export default Page;

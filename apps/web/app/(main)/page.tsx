import { redirect } from 'next/navigation';
import { ABOUT_ME_ROUTE } from '../../libs/constants';

const page = () => redirect(ABOUT_ME_ROUTE);

export default page;

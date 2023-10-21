import { redirect } from 'next/navigation';
import { HOME_ROUTE } from '../../libs/constants';

const page = () => redirect(HOME_ROUTE);

export default page;

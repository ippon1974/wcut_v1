import Link from 'next/link';
import {MainLayout} from '../components/layout/MainLayout';
import classes from '../styles/error.module.scss';

export default function ErrorPage() {
    return(
        <MainLayout title={'Error 404'}>
            <h1 className={classes.error}>Error 404</h1>
            <p><Link href={'/'}>Page Idex</Link></p>
        </MainLayout>
    );
}
import Link from "next/link";
import Head from 'next/head';
import {MainLayout} from '../components/MainLayout';

export  default function Index() {
   return (
       <MainLayout title={'Civek Water Jet'}>
           <h1>Home Page</h1>
           <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita iure minima neque nostrum perspiciatis porro provident saepe temporibus veniam voluptatem?</p>
           <p className={'text_p'}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita iure minima neque nostrum perspiciatis porro provident saepe temporibus veniam voluptatem?</p>
       </MainLayout>
   );
}

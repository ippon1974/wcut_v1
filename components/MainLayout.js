import Link from "next/link";
import Head from 'next/head';
import { useRouter } from 'next/router';

export function MainLayout({children, title='Civek Water Jet'}) {
    const { asPath, pathname } = useRouter();

    const menu = [
        {id: '1', title: 'Главная', uri: '/'},
        {id: '2', title: 'Услуги', uri: '/services'},
        {id: '3', title: 'Работы', uri: '/works'},
        {id: '4', title: 'Станки', uri: '/equipment'},
        {id: '5', title: 'Цены', uri: '/materials'},
        {id: '6', title: 'Технология', uri: '/technology'},
        {id: '7', title: 'Новости', uri: '/news'},
        {id: '8', title: 'О компании', uri: '/about'},
        {id: '9', title: 'Контакты', uri: '/contact'}
        ];

    return(
        <>
            <Head>
                <title>{title} | Гидроабразивная резка в Москве и Москвовской области</title>
                <meta name="description" content="" />
                <meta name="description" content="" />
                <meta name="keywords" content="" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>

            <nav>
                <ul>
                {menu.map(menu => {
                    if (asPath === menu.uri)
                    {
                        return (
                        <li className={'text_p'} key={menu.id}>
                            <Link title={menu.title} href={`${menu.uri}`}>{menu.title}</Link>
                        </li>)
                    }else {
                        return (
                            <li key={menu.id}>
                                <Link title={menu.title} href={`${menu.uri}`}>{menu.title}</Link>
                            </li>)
                    }

                })}
                </ul>
            </nav>

            <header>
                {children}
            </header>

            {/*<footer>*/}
            {/*    <hr/>footer*/}
            {/*    140080 ул. Карла Маркса д. 117'Б', офис № 503 Люберецкий р-н, пос. Красково, МО. Территория института «ВНИИСТРОМ»<br/>*/}
            {/*    © 2022 «Сивек Water Jet»*/}
            {/*</footer>*/}


        </>
    );
}
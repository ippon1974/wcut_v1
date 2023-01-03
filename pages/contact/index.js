import React, { useState, useEffect } from 'react';
import Layout from "../../components/layout/Layout";
import Header from "../../components/ui/header/Header";
import Navigation from "../../components/ui/navigation/main/Navigation";
import MobileNavigation from "../../components/ui/navigation/mobile/MobileNavigation";
import MobileFooter from "../../components/ui/footer/mobile/MobileFooter";
import Footer from "../../components/ui/footer/main/Footer";
import classes from '../../styles/contact.module.scss';
import Link from "next/link";
import Head from 'next/head';
import Image from "next/image";
import { useMediaQuery } from 'react-responsive';

export default function Contact() {

    const [mobile, setMobile] = useState(false)
    const isPhone = useMediaQuery({ query: '(max-width: 481px)'})
    useEffect(() => setMobile(isPhone), [isPhone]);

    const linksmallcolor = {
        color: "darkblue"
    }

    return(
        <Layout title={'Контакты | Гидроабразивная резка в Москве и Москвовской области'} description={'Про Контакты'} keywords={'Ключ про Контакты'}>
            
            <Head>
                <meta name="viewport" content="width=device-width"/>
            </Head>

            <div className={classes.wrapper}>
                <div className={`${classes.item} ${classes.header}`}>
                <Header />
                </div>
                <div className={`${classes.item} ${classes.nav}`}>
                    {mobile ? <MobileNavigation /> : <Navigation />}
                </div>
                <div className={`${classes.item} ${classes.asideleft}`}>
                    <div><Image src={"/contact_intro.gif"} width={"303"} height={"229"} alt={"alt"}></Image></div>
                </div>
                <div className={`${classes.item} ${classes.maincontext}`}>
                    <div>
                        <div className={classes.map}>
                        <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3Ade84ff7336f23544fdfd2395bf3a76bf62c3e486a7449dd5f751dba73997184a&amp;source=constructor" width="550" height="650" frameborder="0"></iframe>
                        </div>
                        <h2>Контакты</h2>
                    </div>
                    
                    <div className={classes.address}>
                        <p>Название компании: &laquo;Сивек Water Jet&raquo;</p>
                        <p>Расположение производства: 140080 ул. Карла Маркса д. 117 &lsquo;Б&rsquo;, офис № 503 Люберецкий р-н, пос. Красково, МО. Территория института &laquo;ВНИИСТРОМ&raquo;</p>
                        <p>Прилегающие населенные пункты: Люберцы, Красково, Коренево, Томилино, Лыткарино, Некрасовка, Октябрьский, Котельники, Малаховка, Дзержинский, Железнодорожный, Раменское, Жуковский, Выхино-Жулебино, Электроугли.</p>
                        <p>Режим работы: Пн-Пт с 9:00 до 19:00. Суббота и воскресенье выходные дни.</p>
                        <p><strong>Телефон</strong>: +7 (925) 585-33-71 (Мегафон)</p>
                        {/* <p><strong>Электронная почта</strong>: box@wcut.ru</p> */}
                        <p>Электропочта: <Link style={linksmallcolor} href="&#109;&#97;&#105;&#108;&#116;&#111;&#58;&#98;&#111;&#120;&#64;&#119;&#99;&#117;&#116;&#46;&#114;&#117;">&#98;&#111;&#120;&#64;&#119;&#99;&#117;&#116;&#46;&#114;&#117;</Link></p>
                        <p className={classes.adrsmall}><strong>Ютуб</strong>: <Link style={linksmallcolor} href="https://www.youtube.com/channel/UCuQWXTAmeMLsruthyDSI5Gg" target="_blank">https://www.youtube.com/</Link></p>
                        <p className={classes.adrsmall}><strong>Координаты для навигатора</strong>: 55.663307,37.994535</p>
                        <p className={classes.adrsmall}><Link style={linksmallcolor} href="https://yandex.ru/maps/-/CCUrmKWQdB" target="_blank">Найти адрес компании в Яндекс Картах</Link></p>
                    </div>
                </div>

                {mobile ? <MobileFooter /> : <Footer />}
               
            </div>

            <div className={classes.endpage}></div>

        </Layout>
    );
}
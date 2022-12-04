import Layout from "../../components/layout/Layout";
import classes from '../../styles/contact.module.scss';
import Header from "../../components/ui/header/header";
import Link from "next/link";
import Head from 'next/head';
import Image from "next/image";

export default function Contact() {
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

                    <ul className={classes.menunav}>
                        <li><Link href={"/"}>Главная</Link></li>
                        <li><Link href={"/services"}>Услуги</Link></li>
                        <li><Link href={"/works"}>Работы</Link></li>
                        <li><Link href={"/equipment"}>Станки</Link></li>
                        <li><Link href={"/materials"}>Цены</Link></li>
                        <li><Link href={"/technology"}>Технология</Link></li>
                        <li><Link href={"/news"}>Новости</Link></li>
                        <li><Link href={"/about"}>О компании</Link></li>
                        <li><Link href={"/contact"}>Контакты</Link></li>
                    </ul>

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
                        <p>Телефон: +7 (925) 585-33-71 (Мегафон)</p>
                        <p>Электронная почта: box@wcut.ru</p>
                        <p className={classes.adrsmall}>Инстаграм: <Link href="https://www.instagram.com/civekwaterjet/" target="_blank">https://www.instagram.com/civekwaterjet/</Link></p>
                        <p className={classes.adrsmall}>Ютуб: <Link href="https://www.youtube.com/channel/UCuQWXTAmeMLsruthyDSI5Gg" target="_blank">https://www.youtube.com/channel/UCuQWXTAmeMLsruthyDSI5Gg</Link></p>
                        <p className={classes.adrsmall}>Координаты для навигатора: 55.663307,37.994535</p>
                        <p className={classes.adrsmall}><Link href="https://www.google.com/maps/place/%D1%83%D0%BB.+%D0%9A%D0%B0%D1%80%D0%BB%D0%B0+%D0%9C%D0%B0%D1%80%D0%BA%D1%81%D0%B0,+117,+%D0%9A%D1%80%D0%B0%D1%81%D0%BA%D0%BE%D0%B2%D0%BE,+%D0%9C%D0%BE%D1%81%D0%BA%D0%BE%D0%B2%D1%81%D0%BA%D0%B0%D1%8F+%D0%BE%D0%B1%D0%BB.,+%D0%A0%D0%BE%D1%81%D1%81%D0%B8%D1%8F,+140050/@55.6616615,37.9924765,17z/data=!4m2!3m1!1s0x414ac80061d5370d:0xc82c3a4eef48e24a" target="_blank">Найти адрес компании в Google Maps</Link></p>
                    </div>
                </div>
                <div className={`${classes.item} ${classes.footer}`}>
                   <div>
                        <p>140080 ул. Карла Маркса д. 117 &lsquo;Б&rsquo;, офис № 503 Люберецкий р-н, пос. Красково, МО. Территория института &laquo;ВНИИСТРОМ&laquo;</p>
                   </div>
                </div>
                <div className={classes.footerline}>&copy; &laquo;Сивек Water Jet&raquo; 2022</div>
            </div>
            <div className={classes.endpage}></div>

        </Layout>
    );
}
import React, { useState, useEffect } from 'react';
import Layout from "../../components/layout/Layout";
import Header from "../../components/ui/header/Header";
import Navigation from "../../components/ui/navigation/main/Navigation";
import MobileNavigation from "../../components/ui/navigation/mobile/MobileNavigation";
import MobileFooter from "../../components/ui/footer/mobile/MobileFooter";
import Footer from "../../components/ui/footer/main/Footer";
import classes from '../../styles/equipment.module.scss';
import Link from "next/link";
import Head from 'next/head';
import Image from "next/image";
import { useMediaQuery } from 'react-responsive';

export default function Equipment() {

    const [mobile, setMobile] = useState(false)
    const isPhone = useMediaQuery({ query: '(max-width: 481px)'})
    useEffect(() => setMobile(isPhone), [isPhone]);

    return(
        <Layout title={'Станки гидроабразивной резки | Civek Water Jet'}>
            <Head>
                <meta name="viewport" content="width=device-width"/>
                <meta name="description" content={"MultiCam, KMT. Станки компании Civek Water Jet"} />
                <meta name="keywords" content={"Станки для гидроабразивной резки,гидрорезка, водорезка"} />
                <meta content='true' name='HandheldFriendly'/>
                <meta content='width' name='MobileOptimized'/>
                <meta content='yes' name='apple-mobile-web-app-capable'/>
            </Head>


            <div className={classes.wrapper}>
            <div className={`${classes.item} ${classes.header}`}>
                <Header /> 
            </div>
            
                <div className={`${classes.item} ${classes.nav}`}>
                 {mobile ? <MobileNavigation /> : <Navigation />}   
                </div>

                <div className={`${classes.item} ${classes.asideleft}`}>
                    <div><p>Станки</p></div>
                </div>
                <div className={`${classes.item} ${classes.maincontext}`}>
                    <div>
                        <h2>Мы работаем на станках от станкостроительной компании «MultiCam»</h2>
                        <div className={classes.hr}></div>
                        <br />
                        <p>&laquo;<strong>MultiCam</strong>&raquo; — это американская компания, которая производит станки для гидрообразивной, лазерной, плазменной резки. Компания является одним из лидеров на мировом рыне оборудования данного направления.</p>
                        <Image className={classes.responseImg} src="/logomulticam.jpg" width={"460"} height={"120"} alt="img" />
                        <h3>Технические характеристики станка V204-W-40 гидроабразивной резки V серии производство компании «MultiCam»</h3>
                        <ul>
                            <li>Клиренс по оси Z -254 мм</li>
                            <li>Ход по Z-Оси – 203 мм</li>
                            <li>Разрешение: 0,0025 мм</li>
                            <li>Повторяемость: ± 0,025мм</li>
                            <li>Точность позиционного перемещения: ±.0,127 мм на 3048 мм</li>
                            <li>Ускоренное перемещение: 254мм/с</li>
                            <li>Максимальная скорость резания; 635 мм/с</li>
                            <li>Приводы: Бесщёточный цифровой серво переменного тока</li>
                            <li>Приводная система осям X и Y: Линейная зубчатая рейка и шестерня</li>
                            <li>Приводная система по оси Z: Прецизионный шариковый винт</li>
                        </ul>

                        <h3>Таблица физических размеров станка V204-W-40</h3>
                        
                        <table>
                            <tbody>
                            <tr>
                                <th>Модель</th>
                                <th>Д, мм</th>
                                <th>Ш, мм</th>
                                <th>В, мм</th>
                                <th>Рабочая зона, мм</th>
                                <th>Вес, кг</th>
                            </tr>
                            <tr>
                                <td>V 204-W</td>
                                <td>4165</td>
                                <td>2159</td>
                                <td>1854</td>
                                <td>1524 &times; 3048</td>
                                <td>1687</td>
                            </tr>
                            </tbody>
                        </table>
                        <h3>Комплектация станка гидроабразивной резки. Модель станка V204-W-40.</h3>
                        <ul>
                            <li>Станок V-204(1524*3048 мм) Бункер для подачи абразива под давлением</li>
                            <li>Смеситель подачи абразива</li>
                            <li>Специальная быстросменная насадка для резки с водой без абразива и с абразивом</li>
                            <li>Насос высокого давления KMT NEOLine™ 40i 40 л.с./ 30 кВт, 55 000 PSI, 2.73 л/мин</li>
                        </ul>

                        <Image className={classes.responseImg} src={"/mf1.jpg"} width={"460"} height={"345"} alt="img"></Image>
                        <Image className={classes.responseImg} src={"/mf2.jpg"} width={"460"} height={"345"} alt="img"></Image>
                        <Image className={classes.responseImg} src={"/mf3.jpg"} width={"460"} height={"345"} alt="img"></Image>
                        <Image className={classes.responseImg} src={"/mf4.jpg"} width={"460"} height={"345"} alt="img"></Image>

                        <h3>Расположение производства</h3>
                        <p>Адрес: 121357, г.Москва, ул.Верейская,д.29 С 82</p>
                        <div className={classes.mainlinefooter}>
                            <span><Link href={'/services'} title='Услуги'>
                            <Image src="/blogarrow.png" width={"15"} height={"15"} alt="img" />
                            Услуги</Link></span></div>
                        </div>
                    </div>
                <div className={`${classes.item} ${classes.asideright}`}>
                    
                    <div className={`${classes.testHeadBlockOne}`}> 
                        <div className={classes.testHeadBlockOneImg}><Image src="/iconTwitter.gif" width={"29"} height={"29"} alt="" /></div>
                        <div className={classes.testHeadBlockOneText}>Услуги</div>
                    </div>
                    <div className={classes.testHeadBlockBody}>Раскрой различных материалов с помощью технологии гидрообразивной резки.</div>
                    <div className={classes.testHeadBlockTwo}>
                        <div className={classes.testHeadBlockTwoImg}><Image src="/lightarrow.png" width={"16"} height={"16"} alt="" /></div>
                        <div className={classes.testHeadBlockTwoLink}>
                            <Link href={"/services"} title="Услуги">Услуги</Link>
                        </div>
                    </div>

                   
                    {/* <div className={classes.newredhead}>
                        <div className={classes.gimg}><Image src="/iconTwitter.gif" width={"29"} height={"29"} alt="" /></div>
                        <div className={classes.gtxt}><Link href={"/materials"}>Стоимость раскроя</Link></div>
                    </div>
                    <p className={classes.newredheadp}><Link href = {"/"}>Агломерат 10 мм. 960 руб.</Link></p>
                    <p className={classes.newredheadp}><Link href = {"/"}>Агломерат 10 мм. 960 руб.</Link></p>
                    <p className={classes.newredheadp}><Link href = {"/"}>Агломерат 10 мм. 960 руб.</Link></p>
                    <p className={classes.newredheadp}><Link href = {"/"}>Агломерат 10 мм. 960 руб.</Link></p>
                    <p className={classes.newredheadp}><Link href = {"/"}>Агломерат 10 мм. 960 руб.</Link></p>
                    <div className={classes.linehedhead}></div> */}

                </div>

                {mobile ? <MobileFooter /> : <Footer />}
            
            </div>

            <div className={classes.endpage}></div>
        </Layout>
    );
}
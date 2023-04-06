import React, { useState, useEffect } from 'react';
import Layout from "../../components/layout/Layout";
import Header from "../../components/ui/header/Header";
import Navigation from "../../components/ui/navigation/main/Navigation";
import MobileNavigation from "../../components/ui/navigation/mobile/MobileNavigation";
import MobileFooter from "../../components/ui/footer/mobile/MobileFooter";
import Footer from "../../components/ui/footer/main/Footer";
import classes from '../../styles/service.module.scss';
import Link from "next/link";
import Head from 'next/head';
import Image from "next/image";
import { useMediaQuery } from 'react-responsive';

export default function Services() {

    const [mobile, setMobile] = useState(false)
    const isPhone = useMediaQuery({ query: '(max-width: 481px)'})
    useEffect(() => setMobile(isPhone), [isPhone]);

    return(
       <Layout title={'Услуги гидроабразивной резки | Civek Water Jet '}>

            <Head>
                <meta name="viewport" content="width=device-width"/>
                <meta name="description" content={"Услуги гидроабразивной резки в Москве и Московской области"} />
                <meta name="keywords" content={"Гидрорез, гидроабразив, гидроабразивная резка"} />
                {/* <meta content='true' name='HandheldFriendly'/>
                <meta content='width' name='MobileOptimized'/>
                <meta content='yes' name='apple-mobile-web-app-capable'/> */}
            </Head>

            <div className={classes.wrapper}>
            <div className={`${classes.item} ${classes.header}`}>
                <Header />
            </div>
                
                <div className={`${classes.nav}`}>

                    {mobile ? <MobileNavigation /> : <Navigation />}   

                </div>
                <div className={`${classes.item} ${classes.asideleft}`}>
                    <div><p>Услуги</p></div>
                </div>
                <div className={`${classes.item} ${classes.maincontext}`}>
                    <div>
                        <h2>Раскрой различных материалов с помощью технологии гидроабразивной резки</h2>
                        <div className={classes.hr}></div>
                        <h3>Материалы для раскроя. Гидроабразивная резка:</h3>
                        {/* <p><Link className={classes.activecalc} href="http://calculation.htz.ru/" target={'_blank'} title="Калькулятор гидроабразивной рhttp://localhost:7165/sites/all/themes/tommy/images/iconTwitter.gifезки"><strong>Калькулятор</strong></Link> гидроабразивной резки.</p> */}
                        <ul>
                            <li>черные металлы и сплавы;</li>
                            <li>труднообрабатываемые легированные стали и сплавы (в том числе: жаропрочные и нержавеющие);</li>
                            <li>цветные металлы и сплавы (медь, никель, алюминий, магний, титан и их сплавы);</li>
                            <li>композиционные материалы;</li>
                            <li>керамические материалы (керамогранит, плитка);</li>
                            <li>природные и искусственные камни (гранит, мрамор и т. д.);</li>
                            <li>стекло и композиционное стекло (триплекс, бронестекло, армированное стекло, стеклотекстолит и т. п.);</li>
                            <li>пористые и прозрачные материалы;</li>
                            <li>сотовые и сэндвич-конструкции;</li>
                            <li>бетон и железобетон.</li>
                        </ul>
                        <p>Резка мягких материалов, таких как полиуретан, поролон и другие пеноматериалы, пластмассы, кожаные изделия, картон, ткани и т. п. осуществляется только струей воды без добавления абразива. Применяется также и в пищевой сфере, для порезки и порционирования пищевых продуктов.</p>
                        <h3>Производство готовых изделий из искусственного и природного камня</h3>
                        <ul>
                            <li>Столешницы из искусственного камня</li>
                            <li>Подоконники из искусственного камня</li>
                        </ul>
                        <ul>
                            <li>Столешницы из природного камня</li>
                            <li>Подоконники из природного камня</li>
                            <li>Входные группы из природного камня</li>
                            <li>Лестницы из природного камня</li>
                        </ul>
                        <p>Замеры, подготовка чертежей, полный расчет стоимости заказа, доставка на объект, монтаж.</p>
                        <h3>Принимаем различные форматы файлов для подготовки программы раскроя для станка</h3>
                        <p><strong>Форматы файлов</strong>: (dwg, dxf, ald, anc, cnc, jpg, gif, pdf, txt, world, excel.).</p>
                        <h3>Расположение производства</h3>
                        <p>Адрес: 140080 ул. Карла Маркса 117 &lsquo;Б&rsquo;, офис № 503 Люберецкий р-н, пос. Красково, МО. Территория института  &laquo;ВНИИСТРОМ&raquo;</p>
                        <h3>Доставка</h3>
                        <p>Доставка заказа в любой регион России. Доставка по Москве и Московской области.</p>
                        <div className={classes.mainlinefooter}>
                            <span><Link href={'/equipment'} title='Контакты'>
                            <Image src="/blogarrow.png" width={"15"} height={"15"} alt="img" />
                            Станки</Link></span></div>
                        </div>
                    </div>

                <div className={`${classes.item} ${classes.asideright}`}>

                <div className={`${classes.testHeadBlockOne}`}> 
                    <div className={classes.testHeadBlockOneImg}><Image src="/iconTwitter.gif" width={"29"} height={"29"} alt="" /></div>
                    <div className={classes.testHeadBlockOneText}>Станки</div>
                </div>
                <div className={classes.testHeadBlockBody}>Мы работаем на станках от ведущей компании &laquo;MultiCam&raquo;</div>
                <div className={classes.testHeadBlockTwo}>
                    <div className={classes.testHeadBlockTwoImg}><Image src="/lightarrow.png" width={"16"} height={"16"} alt="" /></div>
                    <div className={classes.testHeadBlockTwoLink}>
                        <Link href={"/equipment"} title="Станки">Станки</Link>
                    </div>
                </div>
                
                </div>

                 {mobile ? <MobileFooter /> : <Footer />}

            </div>

            <div className={classes.endpage}></div>

       </Layout>
    );
}
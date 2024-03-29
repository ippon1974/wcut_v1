import React, { useState, useEffect } from 'react';
import Layout from "../../components/layout/Layout";
import Navigation from "../../components/ui/navigation/main/Navigation";
import MobileNavigation from "../../components/ui/navigation/mobile/MobileNavigation";
import MobileFooter from "../../components/ui/footer/mobile/MobileFooter";
import Footer from "../../components/ui/footer/main/Footer";
import classes from '../../styles/technology.module.scss';
import Header from "../../components/ui/header/Header";
import Link from "next/link";
import Head from 'next/head';
import Image from "next/image";
import { useMediaQuery } from 'react-responsive';

export default function Technology() {

    const [mobile, setMobile] = useState(false)
    const isPhone = useMediaQuery({ query: '(max-width: 481px)'})
    useEffect(() => setMobile(isPhone), [isPhone]);

    return(
        <Layout title={'Технология гидроабразивной резки | Civek Water Jet'}>
            <Head>
                <meta name="viewport" content="width=device-width"/>
                <meta name="description" content={`Технология гидроабразивной резки | Гидроабразив`} />
                <meta name="keywords" content={`Гидрорезка, водорезка, гидроабразивная резка`} />
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
                    <div><p>Технология</p></div>
                </div>
                <div className={`${classes.item} ${classes.maincontext}`}>
                    <div>
                        <h2>Технология раскроя материала с помощью гидроабразивной резки</h2>
                        <div className={classes.hr}></div>
                        <br />
                        <p><strong>Гидроабразивная резка</strong> — вид обработки материалов резанием, где в качестве режущего инструмента вместо резца используется струя воды или смеси воды и абразивного материала, выходящая из сопла с высокой скоростью и под высоким давлением.</p>
                        
                        <div className={classes.containerIframe}>
                            <iframe className={classes.responsiveiframe} src="https://www.youtube.com/embed/LyA7VLRZA7k"></iframe>
                        </div>

                        <p>В основе <strong>технологии гидроабразивной резки</strong> лежит принцип эрозионного воздействия смеси высокоскоростной водяной струи и твёрдых абразивных частиц на обрабатываемый материал. </p>
                        <p>Физическая суть механизма гидроабразивной резки состоит в отрыве и уносе из полости реза частиц материала скоростным потоком твердофазных частиц.</p>
                        <p>Устойчивость истечения и эффективность воздействия двухфазной струи (вода и абразив) обеспечиваются оптимальным выбором целого ряда параметров резки, включая давление и расход воды, а также расход и размер частиц абразивного материала.</p>
                        <h3>Нестинг (Nesting)</h3>

                        <div className={classes.containerIframe}>
                            <iframe className={classes.responsiveiframe} src="https://www.youtube.com/embed/fkQTZxc3YxY" frameborder="0" allowfullscreen></iframe>
                        </div>

                        <p><strong>Технология нестинга</strong> — это способ раскроя плит (облицованных и необлицованных) режущим инструментом с получением деталей разных форм, расположенных на карте раскроя с максимальной плотностью.</p>
                        <h3>Достоинства гидроабразивной резки</h3>
                        <ul>
                            <li>отсутствие термического воздействия на материал (температура в зоне реза 60-90С);</li>
                            <li>существенно меньшие потери материала;</li>
                            <li>широкий спектр разрезаемых материалов и толщин (до 150—300 мм и более);</li>
                            <li>высокая эффективность резки листовых материалов толщиной более 8 мм;</li>
                            <li>отсутствие выгорания легирующих элементов в легированных сталях и сплавах;</li>
                            <li>отсутствие оплавления и пригорания материала на кромках обработанных деталей и в прилегающей зоне;</li>
                            <li>возможность реза тонколистовых материалов в пакете из нескольких слоев для повышения производительности, в том числе, за счёт уменьшения холостых ходов режущей головки;</li>
                            <li>полная пожаро — и взрывобезопасность процесса;</li>
                            <li>экологическая чистота и полное отсутствие вредных газовыделений;</li>
                            <li>высокое качество реза (шероховатость кромки Ra 1,6);</li>
                        </ul>
                        <h3>Недостатки данной технологии</h3>
                         <ul>
                            <li>Недостаточно высокая скорость реза тонколистовой стали;</li>
                            <li>Ограниченный ресурс отдельных комплектующих и режущей головки.</li>
                            <li>Высокая стоимость абразива (расходный материал)</li>
                        </ul>

                        <h3>Разрезаемые материалы</h3>
                        <p>При помощи гидроабразивной струи резать можно практически любые материалы:</p>
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
                        <p><strong>Резка мягких материалов</strong>, таких как полиуретан, поролон и другие пеноматериалы, пластмассы, кожаные изделия, картон, ткани и т. п. осуществляется только струей воды без добавления абразива. Применяется также и в пищевой сфере, для порезки и порционирования пищевых продуктов.</p>
                        <h3>Сферы применения гидроабразивной резки</h3>
                        <ul>
                            <li>авиационная и аэрокосмическая промышленность </li>
                            <li>бумажная промышленность</li>
                            <li>жилищное и промышленное строительство</li>
                            <li>инструментальное производство</li>
                            <li>машиностроение</li>
                            <li>оборонная промышленность</li>
                            <li>обувное производство</li>
                            <li>производство пищевого и торгового оборудования</li>
                            <li>производство рекламной продукции</li>
                            <li>пищевая промышленность</li>
                            <li>резинотехническая промышленность</li>
                            <li>стекольная промышленность </li>
                            <li>электротехническая промышленность</li>
                        </ul>
                        <p>Резка мягких материалов, таких как полиуретан, поролон и другие пеноматериалы, пластмассы, кожаные изделия, картон, ткани и т. п. осуществляется только струей воды без добавления абразива. Применяется также и в пищевой сфере, для порезки и порционирования пищевых продуктов.</p>
                        <h3>Принимаем различные форматы файлов для подготовки программы раскроя материалов для гидроабразивных станков</h3>
                        <p><strong>Форматы файлов</strong>: (dwg, dxf, ald, anc, cnc, jpg, gif, pdf, txt, world, excel.).</p>
                        <h3>Расположение производства</h3>
                        <p>Адрес: 140004 Посёлок ВУГИ, 1с4, Люберцы, Московская область. Территория института &laquo;ННЦ ГП&ndash;ИГД им. А.А. Скочинского&raquo;</p>
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
                    <div className={classes.testHeadBlockOneText}>Услуги</div>
                </div>
                <div className={classes.testHeadBlockBody}>Раскрой различных материалов с помощью технологии гидрообразивной резки.</div>
                <div className={classes.testHeadBlockTwo}>
                    <div className={classes.testHeadBlockTwoImg}><Image src="/lightarrow.png" width={"16"} height={"16"} alt="" /></div>
                    <div className={classes.testHeadBlockTwoLink}>
                        <Link href={"/services"} title="Услуги">Услуги</Link>
                    </div>
                </div>
                
                </div>
                {mobile ? <MobileFooter /> : <Footer />}
            
            </div>

            <div className={classes.endpage}></div>
        </Layout>
    );
}
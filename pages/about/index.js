import Layout from "../../components/Layout";
import Navigation from "../../components/ui/navigation"
import classes from '../../styles/about.module.scss';
import Link from "next/link";
import Head from 'next/head';
import Image from "next/image";

export default function About() {

    return(
        <Layout title={'О компании'}>

            <Head>
                {/* <meta name="viewport" content="width=device-width"/> */}
                <meta name='viewport' content='width=device-width,initial-scale=1'/>
                <meta content='true' name='HandheldFriendly'/>
                <meta content='width' name='MobileOptimized'/>
                <meta content='yes' name='apple-mobile-web-app-capable'/>
            </Head>

            
            <div className={`${classes.wrapper}`}>

            <div className={`${classes.header}`}>
            <Navigation />
                    <div className={`${classes.wrapperLogo}`}>
                        <div className={`${classes.itemLogo} ${classes.logo}`}>
                            <Link title='Сивек Water Jet' href={'/'}>
                                <picture>
                                    <img src="/logo.jpg" alt="Сивек Water Jet" />
                                </picture>
                            </Link>
                        </div>
                        <div className={`${classes.itemLogo} ${classes.texthead}`}>
                            <div>
                                <h2>Гидроабразивная резка в Москве</h2>
                                <h3>Металл, стекло, камень, агломерат, полимеры, пластик, керамика.</h3>
                                <p>140080 ул. Карла Маркса д. 117 &lsquo;Б&rsquo;, офис № 503 Люберецкий р-н, пос. Красково, МО. Территория института &laquo;ВНИИСТРОМ&raquo;</p>
                            </div>
                        </div>
                    </div>
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
                    <div><p>О компании</p></div>
                </div>

                <div className={`${classes.item} ${classes.maincontext}`}>
                    <div>
                        <h2>О компании</h2>
                        <div className={classes.hr}></div>
                        <h3>Компания</h3>
                        <p>Компания  &laquo;Сивек Water Jet&raquo; была создана в 2012 году.</p>
                        <p>Основное наше направление раскрой различных материалов с помощью технологии гидрпоабразивной резки.</p>
                        <p>За это время накоплен опыт, знания, расширилась собственная клиентская база.</p>
                        <h3>Станки</h3>
                        <p>Оборудование на котором мы работаем &laquo;MultiCam&raquo;</p>
                        <p>&laquo;MultiCam&raquo; — это американская компания, которая производит станки для гидроабразивной, лазерной, плазменной резки. Компания является одним из лидеров на мировом рыне оборудования данного направления.</p>
                        <h3>Сотрудничество</h3>
                        <p>Мы готовы сотрудничать с Вами. Готовы принять различные заказы на раскрой материалов.</p>
                        <h3>Расположение производство</h3>
                        <p>Адрес: 140080 ул. Карла Маркса д. 117 &lsquo;Б&rsquo;, офис № 503 Люберецкий р-н, пос. Красково, МО. Территория института &laquo;ВНИИСТРОМ&raquo;</p>
                        <p>Ждем Вас у себя на производстве.</p>
                        <p><em>С уважение коллектив компании &laquo;Сивек Water Jet&raquo;</em></p>
                        <div className={classes.mainlinefooter}>
                            <span><Link href={'/contact'} title='Контакты'>
                            <Image src="/blogarrow.png" width={"15"} height={"15"} alt="img" />
                            Контакты</Link></span></div>
                        </div>
                    </div>
                <div className={`${classes.item} ${classes.asideright}`}>

            
                <div className={`${classes.testHeadBlockOne}`}> 
                    <div className={classes.testHeadBlockOneImg}><Image src="/iconTwitter.gif" width={"29"} height={"29"} alt="" /></div>
                    <div className={classes.testHeadBlockOneText}>Контакты</div>
                </div>
                <div className={classes.testHeadBlockBody}>Пн-Пт с 9:00 до 19:00. Суббота и воскресенье выходные дни. Телефон в Москве: +7 (925) 585-33-71 (Мегафон)</div>
                <div className={classes.testHeadBlockTwo}>
                    <div className={classes.testHeadBlockTwoImg}><Image src="/lightarrow.png" width={"16"} height={"16"} alt="" /></div>
                    <div className={classes.testHeadBlockTwoLink}>
                        <Link href={"/contact"} title="Контакты">Контакты</Link>
                    </div>
                </div>

                </div>

                <div className={`${classes.item} ${classes.footer}`}>
                   <div>
                        <p>140080 ул. Карла Маркса д. 117 &lsquo;Б&rsquo;, офис № 503 Люберецкий р-н, пос. Красково, МО. Территория института &laquo;ВНИИСТРОМ&raquo;</p>
                   </div>
                </div>

                <div className={classes.footerline}>&copy; &laquo;Сивек Water Jet&raquo; 2022</div>

            </div>

            <div className={classes.endpage}></div>
        </Layout>
    );
}


import Layout from "../../components/Layout";
import classes from '../../styles/article.module.scss';
import Link from "next/link";
import Head from 'next/head';
import Image from "next/image";

export default function News() {


    return(
        <Layout title={'Новости'}>

            <Head>
                <meta name='viewport' content='width=device-width,initial-scale=1'/>
                <meta content='true' name='HandheldFriendly'/>
                <meta content='width' name='MobileOptimized'/>
                <meta content='yes' name='apple-mobile-web-app-capable'/>
            </Head>


            <div className={classes.wrapper}>

            <div className={`${classes.item} ${classes.header}`}>
                    <div className={classes.wrapperLogo}>
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

               
                <div className={`${classes.item} ${classes.maincontext}`}>
                    
                    <div className={classes.blockNewsMain}>
                        <div className={classes.dtMainList}>
                            <p>05 March 2020</p>
                            <span>Раздел: <Link href="">статьи</Link></span>
                        </div>
                        <div className={classes.newsListMain}>
                            <h2><Link href="#">История CAM систем</Link></h2>
                            <p>История CAM систем — прошлое, настоящее и будущее</p>
                        <div className={classes.mainlinefooter}>
                            <span><Link href={'#'} title='Весь текст'>
                                <Image src="/blogarrow.png" width={"15"} height={"15"} alt="img" />
                                Весь текст</Link>
                            </span>
                        </div>
                        </div>
                    </div>

                    <div className={classes.blockNewsMain}>
                        <div className={classes.dtMainList}>
                            <p>05 March 2020</p>
                            <span>Раздел: <Link href="">статьи</Link></span>
                        </div>
                        <div className={classes.newsListMain}>
                            <h2><Link href="#">Производство вентиляционных решеток</Link></h2>
                            <p>Производство вентиляционных решеток из нержавеющей стали, латуни, меди. Толщина материала от 3 до 10 мм. Civek Water Jet предлагает вентиляционные решетки по вашим размерам.</p>
                        <div className={classes.mainlinefooter}>
                            <span><Link href={'#'} title='Весь текст'>
                                <Image src="/blogarrow.png" width={"15"} height={"15"} alt="img" />
                                Весь текст</Link>
                            </span>
                        </div>
                        </div>
                    </div>

                </div>
                <div className={`${classes.item} ${classes.asideright}`}>

                <div className={classes.blockNewsNavRight}>
                    <div className={`${classes.boxnews} ${classes.nameItem}`}>
                        <Image src="/filterby.png" width={"224"} height={"33"} alt="" />
                    </div>
                    <div className={`${classes.boxnews} ${classes.news}`}>
                        <Link href={"/news"} title="Новости">
                            <Image src="/allposts_off.jpg" width={"74"} height={"74"} alt="Новости"></Image>
                        </Link>
                    </div>
                    <div className={`${classes.boxnews} ${classes.market}`}>
                        <Link href={"/news/marketnews"} title="Новости рынка">
                            <Image src={"/news_off.jpg"} width={"74"} height={"74"} alt="Новости рынка"></Image>
                        </Link>
                    </div>
                    <div className={`${classes.boxnews} ${classes.cnews}`}>
                        <Link href={"/news/cnews"} title="Новости компании">
                            <Image src={"/work_off.jpg"} width={"74"} height={"74"} alt="Новости компании"></Image>
                        </Link>
                    </div>
                    <div className={`${classes.boxnews} ${classes.show}`}>
                        <Link href={"/news/show"} title="Выставки">
                            <Image src={"/thoughts_off.jpg"} width={"74"} height={"74"} alt="Выставки"></Image>
                        </Link>
                    </div>
                    <div className={`${classes.boxnews} ${classes.item}`}>
                        <Link href={"/news/item"} title="Статьи">
                            <Image src={"/topten_off.jpg"} width={"74"} height={"74"} alt="Статьи"></Image>
                       </Link>
                    </div>
                    <div className={`${classes.boxnews} ${classes.video}`}>
                        <Link href={"/news/video"} title="Видео">
                            <Image src={"/fun_off.jpg"} width={"74"} height={"74"} alt="Видио"></Image>
                        </Link>
                    </div>
                </div>

                <div className={`${classes.testHeadBlockOne}`}> 
                    <div className={classes.testHeadBlockOneImg}><Image src="/iconTwitter.gif" width={"29"} height={"29"} alt="" /></div>
                    <div className={classes.testHeadBlockOneText}>Услуги</div>
                </div>
                <div className={classes.testHeadBlockBody}>Раскрой различных материалов с помощью технологии гидрообразивной резки</div>
                <div className={classes.testHeadBlockTwo}>
                    <div className={classes.testHeadBlockTwoImg}><Image src="/lightarrow.png" width={"16"} height={"16"} alt="" /></div>
                    <div className={classes.testHeadBlockTwoLink}>
                        <Link href={"/services"} title="Услуги">Услуги</Link>
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
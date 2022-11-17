
import Layout from "../components/Layout";
import classes from '../styles/index.module.scss';
import Link from "next/link";
import Head from 'next/head';
import Image from "next/image";

export  default function Index() {
   return (
       <Layout title={'Civek Water Jet | Гидроабразивная резка в Москве и Москвовской области'} description={'Про Index'} keywords={'Ключ про Index'}>
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
                   <div>
                        <Image src={'/jack_home_off_0.jpg'} width={"619"} height={"351"} alt={""}></Image>
                        <h2><Link href={"#"}>Гидроабразивная резка</Link></h2>
                        <p>Более 70 видов материалов для раскроя. Холодный раскрой без тепловой деформации материала. Подготовка чертежей.</p>
                       
                   </div>

                    <div className={`${classes.maincontext} ${classes.banner}`}>
                        <div className={`${classes.bannerArrow}`}>
                            <Image src={'/arrowBanner.png'} width={"50"} height={"48"} alt={""}></Image>
                        </div>
                        <div className={`${classes.bannerLinkText}`}>
                            Технология гидроабразивной резки
                        </div>
                    </div>

                </div>

                <div className={`${classes.asideright}`}>
                    <div>
                        <Image src={'/home_intro.gif'} width={"303"} height={"1961"} alt={""}></Image>
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

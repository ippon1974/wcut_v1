import Layout from "../../components/Layout";
import classes from '../../styles/service.module.scss';
import Link from "next/link";
import Head from 'next/head';
import Image from "next/image";

export default function Services() {
    return(
       <Layout title={'Услуги'}>

            <Head>
                {/* <meta name="viewport" content="width=device-width"/> */}
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
                <div className={`${classes.item} ${classes.asideleft}`}>
                    <div><p>Услуги</p></div>
                </div>
                <div className={`${classes.item} ${classes.maincontext}`}>
                    <div>
                        <h2>Раскрой различных материалов с помощью технологии гидроабразивной резки</h2>
                        <div className={classes.hr}></div>
                        <h3>Материалы для раскроя. Гидроабразивная резка:</h3>
                        <p><Link className={classes.activecalc} href="http://calculation.htz.ru/" target={'_blank'} title="Калькулятор гидроабразивной рhttp://localhost:7165/sites/all/themes/tommy/images/iconTwitter.gifезки"><strong>Калькулятор</strong></Link> гидроабразивной резки.</p>
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
                        <h3>Принимаем различные форматы файлов для подготовки программы раскроя материалов для гидроабразивных станков</h3>
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
                    <div className={classes.newredhead}>
                        <div className={classes.gimg}><Image src="/iconTwitter.gif" width={"29"} height={"29"} alt="" /></div>
                        <div className={classes.gtxt}>Станки</div>
                    </div>
                    <p className={`${classes.asideright} ${classes.predhead}`}>Мы работаем на станках от ведущей компании &laquo;MultiCam&raquo;</p>
                    <Link className={`${classes.asideright} ${classes.aredhead}`} href={"/equipment"} title="Станки"><Image src="/lightarrow.png" width={"16"} height={"16"} alt="" />Станки</Link>
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
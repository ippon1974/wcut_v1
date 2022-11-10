import Layout from "../../components/Layout";
import classes from '../../styles/materials.module.scss';
import Link from "next/link";
import Head from 'next/head';
import Image from "next/image";

export default function Price() {
    return(
        <Layout title={'Цены на раскрой гидроабразивом | Стоимость раскроя различных материалов с помощью технологии гидроабразивной резки.'}>
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
                    <div><p>Цены на раскрой</p></div>
                </div>
                <div className={`${classes.item} ${classes.maincontext}`}>
                    <div>
                        <h2>Стоимость раскроя материала с применением технологии гидроабразивной резки</h2>
                        <div className={classes.hr}></div>
                        <h3>Стоимость</h3>
                        <p>Точная стоимость услуг по гидроабразивной резке определяется после получения чертежей и составления технологии резки, оптимизации раскроя.</p>
                        <p><Link className={classes.activecalc} href="http://calculation.htz.ru/" target={'_blank'} title="Калькулятор гидроабразивной рhttp://localhost:7165/sites/all/themes/tommy/images/iconTwitter.gifезки"><strong>Калькулятор</strong></Link> гидроабразивной резки.</p>
                        <p>Стоимость раскроя материала указана в рублях РФ за один погонный метр. Минимальная стоимость заказа не должна быть меньше 5000 тысяч рублей. Стоимость создания программы для раскроя — 2500 тысячи рублей.</p>
                        
                        <h3>Таблица стоимости раскроя материала гидроабразивом</h3>

                        <table className={classes.pricematerials}>
                            <tbody>
                            <tr>
                                <th>Материал</th>
                                <th>Толщина</th>
                                <th>Стоимость</th>
                            </tr>
                            <tr>
                                <td><a class="active" href="/materials/id/73/" title="Агломерат. 10 мм. 960 руб. 1 пог. метр. Гидроабразив">Агломерат 545454 5454</a></td>
                                <td>10 мм.</td>
                                <td>960 руб. <span class="short">пог. м.</span></td>
                            </tr>
                            <tr>
                                <td><a class="active" href="/materials/id/73/" title="Агломерат. 10 мм. 960 руб. 1 пог. метр. Гидроабразив">Агломерат</a></td>
                                <td>10 мм.</td>
                                <td>960 руб. <span class="short">пог. м.</span></td>
                            </tr>
                            </tbody>
                        </table>

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
                        <div className={classes.gtxt}>Контакты</div>
                    </div>
                    <p className={`${classes.asideright} ${classes.predhead}`}>Пн-Пт с 9:00 до 19:00. Суббота и воскресенье выходные дни. Телефон в Москве: +7 (925) 585-33-71 (Мегафон)</p>
                    <Link className={`${classes.asideright} ${classes.aredhead}`} href={"/contact"} title="Контакты"><Image src="/lightarrow.png" width={"16"} height={"16"} alt="" />Контакты</Link>
                    

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
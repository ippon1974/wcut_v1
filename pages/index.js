
import Layout from "../components/Layout";
import classes from '../styles/index.module.scss';
import Link from "next/link";
import Head from 'next/head';
import Image from "next/image";
import React, { useState, useEffect } from 'react';
import $ from 'jquery';
import {Helmet} from "react-helmet";
import { loadGetInitialProps } from "next/dist/shared/lib/utils";

export  default function Index() {
   
    useEffect(() => {
     //$("#mydiv").css( "border","3px solid red" );
    
     $(window).on('load', function() {
        $('.viewport').each(function () { var imgHeight = $(this).find('>img').css('height'); 
        $(this).animate({ height: imgHeight, top: '-' + imgHeight }, { queue: false, duration: 100, easing: 'swing' }).css('overflow', 'visible'); });
     })
  })

   return (
       <Layout title={'Civek Water Jet | Гидроабразивная резка в Москве и Москвовской области'} description={'Про Index'} keywords={'Ключ про Index'}>
            <Head>
                <meta name="viewport" content="width=device-width"/>
                {/* <script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4="crossorigin="anonymous" /> */}
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
                  
                   <div className={`${classes.viewportcontainer}`}>
                   <div className={`${classes.viewport}`}>
                        <Image src={'/jack_home_on.jpg'} width={"619"} height={"351"} alt={""}></Image>
                        <Image src={'/jack_home_off_0.jpg'} width={"619"} height={"351"} alt={""}></Image>
                        <h2><Link href={"/equipment"}>Гидроабразивная резка</Link></h2>
                        <p>Более 70 видов материалов для раскроя. Холодный раскрой без тепловой деформации материала. Подготовка чертежей.</p>
                   </div>
                   </div> 

                    <div className={`${classes.maincontext} ${classes.banner}`}>
                        <div className={`${classes.itemBanner} ${classes.bannerArrow}`}>
                         <Link href={"/technology"}><Image src={'/arrowBanner.png'} width={"50"} height={"48"} alt={""}></Image></Link>
                        </div>
                        <div className={`${classes.bannerLinkText}`}>
                          <Link href={"/technology"}>Технология гидроабразивной резки</Link>
                        </div>
                    </div>

                    <div className={`${classes.worksList}`}>
                        <figure className={`${classes.itemWorks}`}>
                            <Link href={'#'}>
                                <Image src={'/works/1013_1.jpg'} width={'303'} height={'227'} alt={''}></Image>
                            </Link>
                            <figcaption>
                                <h2><Link href={'#'}>Адресная табличка из стали. Охуенная табличка рекомендую</Link></h2>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit explicabo voluptas culpa obcaecati molestiae. Quos.</p>
                            </figcaption>
                            <div className={classes.blokImgWorkLink}>
                                <div className={`${classes.blokImgWorkLink} ${classes.itemBox} ${classes.blokImgWorkLInkImg}`}><Link href={'#'}><Image src={'/morearrow.png'} width={'33'} height={'33'} alt=''></Image></Link></div>
                                <div className={`${classes.blokImgWorkLink} ${classes.itemBox} ${classes.blokImgWorkLInkText}`}><Link href={'#'}>Подробнее</Link></div>
                            </div>
                        </figure>
                        
                        <figure className={`${classes.itemWorks}`}>
                            <Link href={'#'}><Image src={'/works/8_1.jpg'} width={'303'} height={'227'} alt={''}></Image></Link>
                            <figcaption>
                                <h2><Link href={'#'}>Адресная табличка. Охуенная рекомендую</Link></h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia magnam eum voluptas mollitia, eveniet cupiditate.</p>
                            </figcaption>
                            <div className={classes.blokImgWorkLink}>
                                <div className={`${classes.blokImgWorkLink} ${classes.itemBox} ${classes.blokImgWorkLInkImg}`}><Link href={'#'}><Image src={'/morearrow.png'} width={'33'} height={'33'} alt=''></Image></Link></div>
                                <div className={`${classes.blokImgWorkLink} ${classes.itemBox} ${classes.blokImgWorkLInkText}`}><Link href={'#'}>Подробнее</Link></div>
                            </div>
                        </figure>
                    </div>

                    <div className={`${classes.blockRedPrice}`}>
                        <div className={`${classes.itemRedPrice}`}>
                            <Image src={'/twitcircle.gif'} width={'60'} height={'60'} alt={''}></Image>
                        </div>
                        <div className={`${classes.itemRedPrice} ${classes.textLinkRedBlock}`}>
                            <h2><Link href={'/materials'}>Стоимость реза различного материала</Link></h2>
                            <p><Link href={'/materials'}>Сталь, мрамор, гранит, латунь, медь, капролон, керамогранит, титан, стекло</Link></p>
                        </div>
                    </div>

                    <section>
                        <ul className={`${classes.priceline}`}>
                            <li><Link href={"#"}>Медь</Link>. Толщина: 10 мм. Стоимость раскроя за пог.м. — 1060 руб.<p><Link href={'/materials'}>Полный прайс-лист.</Link></p></li>
                            <li><Link href={"#"}>Алюминий</Link>. Толщина: 10 мм. Стоимость раскроя за пог.м. — 1340 руб. <p><Link href={'/materials'}>Полный прайс-лист.</Link></p></li>
                        </ul>
                    </section>

                    <div className={`${classes.maincontext} ${classes.allPriceLine}`}>
                        <div className={`${classes.imgAllPrice} ${classes.itemAllPrice}`}>
                            <Link href={'/materials'}><Image src={'/nextRed.gif'} width={'23'} height={'23'} alt={''}></Image></Link>
                        </div>
                        <div className={`${classes.linkAllPrice} ${classes.itemAllPrice}`}><Link href={'/materials'}>Весь прайс-лист на раскрой гидроабразивом</Link></div>
                    </div>
                    <div>
                        <Link href={'/equipment'}><Image src={'/logoindexmulticam.jpg'} width={'619'} height={'108'} alt={''}></Image></Link>
                    </div>
                    
                    <div className = {`${classes.containerNews}`}>
                        <figure className={`${classes.news_all}`}>
                            <Link href={'#'}><Image src={'/works/1013_1.jpg'} width={'303'} height={'227'} alt={''}></Image></Link>
                            <figcaption className={classes.newsfigcaption}>
                                <h2><Link href={'#'}>Адресная табличка. Охуенная рекомендую</Link></h2>
                            </figcaption>
                            <div className={classes.dtNews}>07 07 2015</div>
                            <p className={classes.leadNews}><Link href={"#"}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Link></p>
                        </figure>
                        <figure className={`${classes.news_all}`}>
                            <Link href={'#'}><Image src={'/works/1013_1.jpg'} width={'303'} height={'227'} alt={''}></Image></Link>
                            <figcaption className={classes.newsfigcaption}>
                                <h2><Link href={'#'}>Адресная табличка. Охуенная рекомендую</Link></h2>
                            </figcaption>
                            <div className={classes.dtNews}>07 07 2015</div>
                            <p className={classes.leadNews}><Link href={"#"}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic accusantium, harum est nulla ex velit commodi repudiandae non sed earum aliquam placeat cumque tenetur deleniti!</Link></p>
                        </figure>
                    </div>
                    <div className={classes.containerNewsBotton}>
                        <div className={classes.newsImg}>
                            <Link href={'/news'}><Image src={'/morearrow.png'} width={'33'} height={'33'} alt={''}></Image></Link>
                        </div>
                        <div className={classes.newsLink}><Link href={'/news'}>Все новости</Link></div>
                    </div>
                    
                    <div className={classes.containerItem}>
                        <div className={classes.itemImg}>
                            <Image src={'/item.gif'} width={'60'} height={'60'} alt={''}></Image>
                        </div>
                        <div className={classes.itemText}>
                            <h2><Link href={"/news/item"}>Статьи</Link></h2>
                            <p><Link href={"/news/item"}>Тематические статьи</Link></p>
                        </div>
                    </div>
                    <section>
                            <ul className={`${classes.priceline}`}>
                                <li>История CAM систем. <Link href={'#'}>Весь текст</Link></li>
                                <li>Обработка латуни. <Link href={'#'}>Весь текст</Link></li>
                            </ul>
                    </section>
                    <div className={`${classes.maincontext} ${classes.allPriceLine}`}>
                        <div className={`${classes.imgAllPrice} ${classes.itemAllPrice}`}>
                            <Link href={'/materials'}><Image src={'/nextRed.gif'} width={'23'} height={'23'} alt={''}></Image></Link>
                        </div>
                        <div className={`${classes.linkAllPrice} ${classes.itemAllPrice}`}><Link href={'/news/item'}>Все статьи</Link></div>
                    </div>

                    <div className={classes.containerVideo}>
                        <div className={classes.videoImg}>
                            <Image src={'/video.gif'} width={'60'} height={'60'} alt={''}></Image>
                        </div>
                        <div className={classes.videoText}>
                            <h2><Link href={"/news/video"}>Видео</Link></h2>
                            <p><Link href={"/news/video"}>Видеоматериалы на тему раскроя гидроабразивом</Link></p>
                        </div>
                    </div>
                    <section>
                            <ul className={`${classes.priceline}`}>
                                <li><Link href={'#'}>Раскрой гранита 80 мм.</Link> Раскрой гранита толщиной 80 мм. Гидроабарзив.</li>
                                <li><Link href={'#'}>Раскрой стали 2 мм.</Link> Создание чертежа для изготовления адресной таблички. Гидроабразивная резка.</li>
                            </ul>
                    </section>
                    <div className={`${classes.maincontext} ${classes.allVideoLine}`}>
                        <div className={`${classes.imgAllVideo} ${classes.itemAllVideo}`}>
                            <Link href={'/news/video'}><Image src={'/nextRed.gif'} width={'23'} height={'23'} alt={''}></Image></Link>
                        </div>
                        <div className={`${classes.linkAllVideo} ${classes.itemAllVideo}`}><Link href={'/news/video'}>Все видеоматериалы</Link></div>
                    </div>
                </div>

                <div className={`${classes.item} ${classes.asideright}`}>
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
            <div id="mydiv">5555555</div>
           
        

       </Layout>

       
   );
}

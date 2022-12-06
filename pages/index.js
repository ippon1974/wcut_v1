import Layout from "../components/layout/Layout";
import Header from "../components/ui/header/header";
import Navigation from "../components/ui/navigation/navigation";
import Footer from "../components/ui/footer/footer";
import classes from '../styles/index.module.scss';
import Link from "next/link";
import Head from 'next/head';
import Image from "next/image";
import React, { useState, useEffect } from 'react';
import $ from 'jquery';  

export  default function Index() {

    const bannerPort = {
        height: '0',
        top:'-352px',
        margin:'0',
        padding: "0",
        position:'relative'
      }

    const workPort = {
        height: '0',
        top:'-228px',
        margin:'0',
        padding: '0',
        position:'relative'
    }  

    const imgWork = {
        top: 0,
        left: 0,
        border: 0,
        display: 'block'
    }

    useEffect(() => {
        $(function(){
            $('.viewport').each(function () { var imgHeight =  $(this).find('>img').css('height');  $(this).animate({ height: imgHeight, top: '-' + imgHeight }, { queue: false, duration: 100, easing: 'swing' }).css('overflow', 'visible'); });
            $('.viewport').parent().closest('div').parent().hover(function(){$(this).find('.viewport').stop().animate({top: 0},{queue:false,duration:250,easing:'swing'}); }, function() { var imgHeight = $(this).find('.viewport').find('>img').css('height');  $(this).find('.viewport').stop().animate({top:'-'+imgHeight},{queue:false,duration:200,easing:'swing'}); });
        })

        $(function(){
            $('.viewportWork').each(function () { var imgHeight =  $(this).find('>img').css('height');  $(this).animate({ height: imgHeight, top: '-' + imgHeight }, { queue: false, duration: 100, easing: 'swing' }).css('overflow', 'visible'); });
            $('.viewportWork').parent().closest('div').parent().hover(function(){$(this).find('.viewportWork').stop().animate({top: 0},{queue:false,duration:250,easing:'swing'}); }, function() { var imgHeight = $(this).find('.viewportWork').find('>img').css('height');  $(this).find('.viewportWork').stop().animate({top:'-'+imgHeight},{queue:false,duration:200,easing:'swing'}); });
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
                    <Header />
                </div>
                
                <div className={`${classes.item} ${classes.nav}`}>

                   <Navigation />

                </div>
               
                <div className={`${classes.item} ${classes.maincontext}`}>

                   <div>
                   <Link href={'/equipment'}> 
                   <div className={`${classes.viewportcontainer}`}>
                   <div className={'viewport'} style={bannerPort}>
                        <Image src={'/jack_home_new.jpg'} width={"619"} height={"351"} alt={""}></Image>
                        <Image src={'/jack_home_off_0.jpg'} width={"619"} height={"351"} alt={""}></Image>
                   </div>
                   </div>
                   </Link>
                   </div>

                   <div className={classes.blockDesc}>
                   <h2><Link href={"/equipment"}>Гидроабразивная резка</Link></h2>
                   <p>Более 70 видов материалов для раскроя. Холодный раскрой без тепловой деформации материала. Подготовка чертежей.</p>
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
                        
                        <Link href={'#'}>    
                        <div className={`${classes.viewportcontainerWork}`}>
                            <div className={'viewportWork'} style={workPort}>
                                <Image style={imgWork} src={'/works/1013_1.jpg'} width={'303'} height={'227'} alt={''}></Image>
                                <Image style={imgWork} src={'/works/1013_2.jpg'} width={'303'} height={'227'} alt={''}></Image>
                            </div>
                        </div>
                        </Link>  
                        
                        <Link href={'#'}>    
                        <div className={classes.viewportcontainerWork}>
                            <div className={'viewportWork'} style={workPort}>
                                <Image style={imgWork} src={'/works/8_1.jpg'} width={'303'} height={'227'} alt={''}></Image>
                                <Image style={imgWork} src={'/works/8_2.jpg'} width={'303'} height={'227'} alt={''}></Image>
                            </div>
                        </div>
                        </Link>
                    
                    </div>

                    <div className={`${classes.worksListDesc}`}>
                        <div className={`${classes.one}`}>
                        <h2><Link href={'$'}>Адресная табличка. Охуенная рекомендую</Link></h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus at accusantium impedit magni, nam amet doloremque quos numquam magnam autem vel quaerat cumque. Consequatur, quidem.</p>
                        </div>
                        <div className={`${classes.two}`}>
                            <h2><Link href={'$'}>Очень крутая вентиляционная решетка. Покупай пока дешево!</Link></h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus at accusantium impedit magni, nam amet doloremque quos numquam magnam autem vel quaerat cumque. Consequatur, quidem.</p>
                        </div>
                    </div>

                    <div className={`${classes.worksListArrowLink}`}>
                            <div className={`${classes.block_all}`}>
                                <div className={`${classes.info_block}`}>
                                    <div className={`${classes.info_block_arrow}`}><Link href={'#'}><Image src={'/morearrow.png'} width={'33'} height={'33'} alt=''></Image></Link></div>
                                    <div className={`${classes.info_block_link}`}><Link href={'#'}>Подробнее</Link></div>
                                </div>
                            </div>
                            <div className={`${classes.block_all}`}>
                                <div className={`${classes.info_block}`}>
                                    <div className={`${classes.info_block_arrow}`}><Link href={'#'}><Image src={'/morearrow.png'} width={'33'} height={'33'} alt=''></Image></Link></div>
                                    <div className={`${classes.info_block_link}`}><Link href={'#'}>Подробнее</Link></div>
                                </div>
                            </div>
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
                                <h2><Link href={'#'}>Адресная табличка. Охуенная рекомендую. Проверка длины строки мать ее так прямо тут</Link></h2>
                            </figcaption>
                            <div className={classes.dtNews}>07 07 2015</div>
                            <p className={classes.leadNews}><Link href={"#"}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic accusantium, harum est null</Link></p>
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
                
                <div className={classes.componentfooter}>

                {/* <div> */}
                    <Footer />
                </div>
            
            </div>


            

            <div className={classes.endpage}></div>
       </Layout>

       
   );
}
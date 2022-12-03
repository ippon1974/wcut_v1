import Layout from "../../components/Layout";
import classes from '../../styles/works.module.scss';
import Link from "next/link";
import Head from 'next/head';
import Image from "next/image";
import React, { useState, useEffect } from 'react';
import $ from 'jquery';  

export default function Works() {
    useEffect(() => {
        $(function(){
            $('.viewportWork').each(function () { var imgHeight =  $(this).find('>img').css('height');  $(this).animate({ height: imgHeight, top: '-' + imgHeight }, { queue: false, duration: 100, easing: 'swing' }).css('overflow', 'visible'); });
            $('.viewportWork').parent().closest('div').parent().hover(function(){$(this).find('.viewportWork').stop().animate({top: 0},{queue:false,duration:250,easing:'swing'}); }, function() { var imgHeight = $(this).find('.viewportWork').find('>img').css('height');  $(this).find('.viewportWork').stop().animate({top:'-'+imgHeight},{queue:false,duration:200,easing:'swing'}); });
        })
    }) 
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


    return(
        <Layout title={'Работы'}>
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
                    

                    <div className={`${classes.newListWork}`}>
                        <Link href={'#'}>    
                        <div className={`${classes.viewportcontainerWork}`}>
                            <div className={'viewportWork'} style={workPort}>
                                <Image style={imgWork} src={'/works/1013_1.jpg'} width={'303'} height={'227'} alt={''}></Image>
                                <Image style={imgWork} src={'/works/1013_2.jpg'} width={'303'} height={'227'} alt={''}></Image>
                            </div>
                        </div>
                        </Link>

                        <Link href={'#'}>    
                        <div className={`${classes.viewportcontainerWork}`}>
                            <div className={'viewportWork'} style={workPort}>
                                <Image style={imgWork} src={'/works/8_1.jpg'} width={'303'} height={'227'} alt={''}></Image>
                                <Image style={imgWork} src={'/works/8_2.jpg'} width={'303'} height={'227'} alt={''}></Image>
                            </div>
                        </div>
                        </Link>
                        
                        <Link href={'#'}>    
                        <div className={`${classes.viewportcontainerWork}`}>
                            <div className={'viewportWork'} style={workPort}>
                                <Image style={imgWork} src={'/works/1013_1.jpg'} width={'303'} height={'227'} alt={''}></Image>
                                <Image style={imgWork} src={'/works/1013_2.jpg'} width={'303'} height={'227'} alt={''}></Image>
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
                            <div className={`${classes.block_all}`}>
                                <div className={`${classes.info_block}`}>
                                    <div className={`${classes.info_block_arrow}`}><Link href={'#'}><Image src={'/morearrow.png'} width={'33'} height={'33'} alt=''></Image></Link></div>
                                    <div className={`${classes.info_block_link}`}><Link href={'#'}>Подробнее</Link></div>
                                </div>
                            </div>
                    </div>    

                    {/* <div className={classes.worksList}>

                    <figure className={`${classes.itemWorks}`}>
                        <Link href={'#'}><Image src={'/works/8_1.jpg'} width={'303'} height={'227'} alt={''}></Image></Link>
                        <figcaption>
                            <h2><Link href={'#'}>Адресная табличка из стали</Link></h2>
                            <p>Рез стали 2мм. Гидроабразив.</p>
                        </figcaption>
                        <div className={classes.blokImgWorkLink}>
                            <div className={`${classes.blokImgWorkLink} ${classes.itemBox} ${classes.blokImgWorkLInkImg}`}><Link href={'#'}><Image src={'/morearrow.png'} width={'33'} height={'33'} alt=''></Image></Link></div>
                            <div className={`${classes.blokImgWorkLink} ${classes.itemBox} ${classes.blokImgWorkLInkText}`}><Link href={'#'}>Подробнее</Link></div>
                        </div>
                    </figure>

                    <figure className={`${classes.itemWorks}`}>
                        <Link href={'#'}><Image src={'/works/8_1.jpg'} width={'303'} height={'227'} alt={''}></Image></Link>
                        <figcaption>
                            <h2><Link href={'#'}>Адресная табличка из стали</Link></h2>
                            <p>Рез стали 2мм. Гидроабразив.</p>
                        </figcaption>
                        <div className={classes.blokImgWorkLink}>
                            <div className={`${classes.blokImgWorkLink} ${classes.itemBox} ${classes.blokImgWorkLInkImg}`}><Link href={'#'}><Image src={'/morearrow.png'} width={'33'} height={'33'} alt=''></Image></Link></div>
                            <div className={`${classes.blokImgWorkLink} ${classes.itemBox} ${classes.blokImgWorkLInkText}`}><Link href={'#'}>Подробнее</Link></div>
                        </div>
                    </figure>

                    <figure className={`${classes.itemWorks}`}>
                        <Link href={'#'}><Image src={'/works/1013_1.jpg'} width={'303'} height={'227'} alt={''}></Image></Link>
                        <figcaption>
                            <h2><Link href={'#'}>Звездочка из стали</Link></h2>
                            <p>Звездочка из стали. Гидроабразив.</p>
                        </figcaption>
                        <div className={classes.blokImgWorkLink}>
                            <div className={`${classes.blokImgWorkLink} ${classes.itemBox} ${classes.blokImgWorkLInkImg}`}><Link href={'#'}><Image src={'/morearrow.png'} width={'33'} height={'33'} alt=''></Image></Link></div>
                            <div className={`${classes.blokImgWorkLink} ${classes.itemBox} ${classes.blokImgWorkLInkText}`}><Link href={'#'}>Подробнее</Link></div>
                        </div>
                    </figure>


                    <figure className={`${classes.itemWorks}`}>
                        <Link href={'#'}><Image src={'/works/1_1.jpg'} width={'303'} height={'227'} alt={''}></Image></Link>
                        <figcaption>
                            <h2><Link href={'#'}>Изготовление букв из гранита</Link></h2>
                            <p>Рез стали 2мм. Гидроабразив.</p>
                        </figcaption>
                        <div className={classes.blokImgWorkLink}>
                            <div className={`${classes.blokImgWorkLink} ${classes.itemBox} ${classes.blokImgWorkLInkImg}`}><Link href={'#'}><Image src={'/morearrow.png'} width={'33'} height={'33'} alt=''></Image></Link></div>
                            <div className={`${classes.blokImgWorkLink} ${classes.itemBox} ${classes.blokImgWorkLInkText}`}><Link href={'#'}>Подробнее</Link></div>
                        </div>
                    </figure>

                    <figure className={`${classes.itemWorks}`}>
                        <Link href={'#'}><Image src={'/works/9_1.jpg'} width={'303'} height={'227'} alt={''}></Image></Link>
                        <figcaption>
                            <h2><Link href={'#'}>Панно из мрамора</Link></h2>
                            <p>Самое крутое панно из мрамора. Лучшее в мире мать вашу ...</p>
                        </figcaption>
                        <div className={classes.blokImgWorkLink}>
                            <div className={`${classes.blokImgWorkLink} ${classes.itemBox} ${classes.blokImgWorkLInkImg}`}><Link href={'#'}><Image src={'/morearrow.png'} width={'33'} height={'33'} alt=''></Image></Link></div>
                            <div className={`${classes.blokImgWorkLink} ${classes.itemBox} ${classes.blokImgWorkLInkText}`}><Link href={'#'}>Подробнее</Link></div>
                        </div>
                    </figure>

                    <figure className={`${classes.itemWorks}`}>
                        <Link href={'#'}><Image src={'/works/1014_1.jpg'} width={'303'} height={'227'} alt={''}></Image></Link>
                        <figcaption>
                            <h2><Link href={'#'}>Панно из мармора. Бабочка.</Link></h2>
                            <p>Звездочка из стали. Гидроабразив.</p>
                        </figcaption>
                        <div className={classes.blokImgWorkLink}>
                            <div className={`${classes.blokImgWorkLink} ${classes.itemBox} ${classes.blokImgWorkLInkImg}`}><Link href={'#'}><Image src={'/morearrow.png'} width={'33'} height={'33'} alt=''></Image></Link></div>
                            <div className={`${classes.blokImgWorkLink} ${classes.itemBox} ${classes.blokImgWorkLInkText}`}><Link href={'#'}>Подробнее</Link></div>
                        </div>
                    </figure>


                    </div>// */}

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
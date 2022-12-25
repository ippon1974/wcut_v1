import React, { useState, useEffect } from 'react';
import Layout from "../../components/layout/Layout";
import Header from "../../components/ui/header/Header";
import Navigation from "../../components/ui/navigation/Navigation";
import MobileNavigation from "../../components/ui/navigation/MobileNavigation";
import BlockWork from "../works/blockWork";
import BlockWorkMobile from "../works/blockWorkMobile";
import MobileFooter from "../../components/ui/footer/MobileFooter";
import Footer from "../../components/ui/footer/Footer";
import classes from '../../styles/works.module.scss';
import Link from "next/link";
import Head from 'next/head';
import Image from "next/image";
import $ from 'jquery';  
import { useMediaQuery } from 'react-responsive';

export default function Works() {

    const [mobile, setMobile] = useState(false)
    const isPhone = useMediaQuery({ query: '(max-width: 481px)'})
    useEffect(() => setMobile(isPhone), [isPhone]);

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
                <meta name="viewport" content="width=device-width"/>
             </Head>

            <div className={classes.wrapper}>
                <div className={`${classes.item} ${classes.header}`}>
                    <Header />
                </div>
                <div className={`${classes.item} ${classes.nav}`}>
                    {mobile ? <MobileNavigation /> : <Navigation />} 
                </div>
            
                <div className={`${classes.item} ${classes.maincontext}`}>
                    
                   {mobile ? <BlockWorkMobile /> : <BlockWork />}

                    {/* <div className={`${classes.newListWork}`}>
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
                    </div> */}


                    
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


                </div>

               <div className={classes.componentfooter}>
                {mobile ? <MobileFooter /> : <Footer />}
               </div>         
               
            </div>

            <div className={classes.endpage}></div>
        </Layout>
    );
}
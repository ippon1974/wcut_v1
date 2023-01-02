import React, { useState, useEffect } from 'react';
import Layout from "../../../components/layout/Layout";
import Header from "../../../components/ui/header/Header";
import Navigation from "../../../components/ui/navigation/main/Navigation";
import MobileNavigation from "../../../components/ui/navigation/mobile/MobileNavigation";
import MobileFooter from "../../../components/ui/footer/mobile/MobileFooter";
import Footer from "../../../components/ui/footer/main/Footer";
import classes from '../../../styles/about_id.module.scss';
import Link from "next/link";
import Head from 'next/head';
import Image from "next/image";
import { useMediaQuery } from 'react-responsive';


const One = () => {

    const [mobile, setMobile] = useState(false)
    const isPhone = useMediaQuery({ query: '(max-width: 481px)'})
    useEffect(() => setMobile(isPhone), [isPhone]);

    return (
        <>
            <Layout title={'О компании'}>

            <Head>
                <meta name="viewport" content="width=device-width"/>
            </Head>

            <div className={`${classes.wrapper}`}>
            <div className={`${classes.header}`}>

            <Header />

            </div>
                
                <div className={`${classes.nav}`}>
                    {mobile ? <MobileNavigation /> : <Navigation />}   
                </div>

                <div className={`${classes.item} ${classes.maincontext}`}>
                    <div className={classes.bannerHeadWork}>
                        <Image src={'/works/filter/1020.jpg'} width={'937'} height={'172'} alt={''} />
                    </div>

                    <div className={classes.logos_nameWork}>
                        <div className={classes.logos_works}>
                            <Image src={'/cs_client_logos.svg'} width={'91'} height={'91'} alt={''} />
                        </div>
                        <div className={classes.nameWork}>
                            <h1>Lorem ipsum dolor sit amet minima omnis pariatur fuga!</h1>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae, libero autem ratione voluptates itaque laboriosam, recusandae accusamus porro illo nobis aspernatur quisquam nisi, fugiat provident.</p>
                        </div>
                    </div>

                    <div className={classes.containerPreNextPage}>
                        <div className={classes.allwork}>
                            <Image src={'/prev.gif'} width={23} height={23} alt={''} />
                            
                            <span><Link href={'/works'} title={"Все работы"}>Работы</Link></span>
                        </div>
                        <div></div>
                        <div className={classes.pre}>
                           <Image src={'/prev.gif'} width={23} height={23} alt={''} />
                           <span><Link href={'#'} title={'Предыдущая'}>Предыдущая</Link></span>
                        </div>
                        <div className={classes.next}>
                           <span><Link href={'#'} title={"Следующая"}>Следующая</Link></span>
                           <Image src={'/next.gif'} width={23} height={23} alt={''} />
                        </div>
                    </div>

                    <div className={classes.contanerPageWork}>
                        <div className={classes.rightDesc}>
                            <span>Материал</span>
                            <p>Lorem ipsum, dolor sit amet</p>
                        </div>
                        <div>
                            <h3>Процесс</h3>
                            <p>Русский текст описание подробное работы попадает все это добро из базы данных</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam, numquam architecto asperiores id doloribus consectetur excepturi, modi sed molestias debitis repellendus. Quia soluta reiciendis obcaecati consequuntur sunt aut, rem enim explicabo sequi vitae ipsa velit harum totam. Vero animi quo minima iure ipsa, dicta adipisci?</p>
                        </div>
                        <div className={classes.panelImg}>
                            <Image src={'/works/big/8_1.jpg'} width={'461'} height={'345'} alt={''} />
                            <Image src={'/works/big/8_1.jpg'} width={'461'} height={'345'} alt={''} />
                            <Image src={'/works/big/8_1.jpg'} width={'461'} height={'345'} alt={''} />
                        </div>
                    </div>

                </div>

                {/* <div className={`${classes.item} ${classes.asideleft}`}>
                    <div>11111</div>
                </div> */}

                {/* <div className={`${classes.item} ${classes.maincontext}`}>
                    <div>
                       2222
                    </div>
                </div> */}

                {/* <div className={`${classes.item} ${classes.asideright}`}>
                    <div>333333</div>
                </div> */}

                {mobile ? <MobileFooter /> : <Footer />}
                
            </div>

            <div className={classes.endpage}></div>
            </Layout>
        </>
    )
}
export default One;
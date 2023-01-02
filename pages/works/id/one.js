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
import React, { useState, useEffect } from 'react';
import Layout from "../../../components/layout/Layout";
import Header from "../../../components/ui/header/Header";
import Navigation from "../../../components/ui/navigation/Navigation";
import NavigationArticle from "../../../components/ui/navigation/NavigationArticle";
import MobileNavigation from "../../../components/ui/navigation/MobileNavigation";
import BlockCNews from "../../news/cnews/blockCNews";
import BlockCNewsMobile from '../../news/cnews/blockCNewsMobile';
import MobileFooter from "../../../components/ui/footer/MobileFooter";
import Footer from "../../../components/ui/footer/Footer";
import classes from '../../../styles/articleCompany.module.scss';
import Link from "next/link";
import Head from 'next/head';
import Image from "next/image";
import { useMediaQuery } from 'react-responsive';

export default function Cnews() {

    const [mobile, setMobile] = useState(false)
    const isPhone = useMediaQuery({ query: '(max-width: 481px)'})
    useEffect(() => setMobile(isPhone), [isPhone]);

    return(
        <Layout title={'Новости компании'}>
             <Head>
                <meta name="viewport" content="width=device-width"/>
                {/* <meta name='viewport' content='width=device-width,initial-scale=1'/>
                <meta content='true' name='HandheldFriendly'/>
                <meta content='width' name='MobileOptimized'/>
                <meta content='yes' name='apple-mobile-web-app-capable'/> */}
            </Head>

            <div className={classes.wrapper}>
                <div className={`${classes.item} ${classes.header}`}>
                    <Header />
                </div>
                
                <div className={`${classes.item} ${classes.nav}`}>

                    {mobile ? <MobileNavigation /> : <Navigation />} 

                </div>
               
                <div className={`${classes.item} ${classes.maincontext}`}>
                    
                {mobile ? <BlockCNewsMobile /> : <BlockCNews />}

                    {/* <div className={classes.blockNewsMain}>
                        <div className={classes.dtMainList}>
                            <p>05 March 2020</p>
                            <span>Раздел: <Link href="">компания</Link></span>
                        </div>
                        <div className={classes.newsListMain}>
                            <h2><Link href="#">Калькулятор гидроабразивной резки</Link></h2>
                            <p>Калькулятор гидроабразивной резки</p>
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
                            <span>Раздел: <Link href="">компания</Link></span>
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
                    </div> */}

                </div>
                <div className={`${classes.item} ${classes.asideright}`}>

                    <NavigationArticle />

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
                {mobile ? <MobileFooter /> : <Footer />}
            </div>
            <div className={classes.endpage}></div>

        </Layout>
    );
}
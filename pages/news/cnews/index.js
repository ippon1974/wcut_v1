import React, { useState, useEffect } from 'react';
import Layout from "../../../components/layout/Layout";
import Header from "../../../components/ui/header/Header";
import Navigation from "../../../components/ui/navigation/main/Navigation";
import NavigationArticle from "../../../components/ui/navigation/main/news/NavigationArticle";
import MobileNavigation from "../../../components/ui/navigation/mobile/MobileNavigation";
import BlockCNews from "../../../components/block_code_page/news/cnews/blockCNews";
import BlockCNewsMobile from '../../../components/block_code_page/news/cnews/blockCNewsMobile';
import MobileFooter from "../../../components/ui/footer/mobile/MobileFooter";
import Footer from "../../../components/ui/footer/main/Footer";
import classes from '../../../styles/articleCompany.module.scss';
import Link from "next/link";
import Head from 'next/head';
import Image from "next/image";
import { useMediaQuery } from 'react-responsive';

export default function Cnews({articles:serverArticles}) {

    const [mobile, setMobile] = useState(false)
    const isPhone = useMediaQuery({ query: '(max-width: 481px)'})
    useEffect(() => setMobile(isPhone), [isPhone]);

    const[articles, setArticles] = useState(serverArticles);
    
    useEffect(()=> {
        async function load() {
            const response = await fetch('http://23.111.202.203:7000/news/company')
            const json = await response.json();
            setArticles(json);
        }
        if(!serverArticles){
            load();
        }
    }, [serverArticles])

    if(!articles){
        return <Layout>
            <p>...Loading</p>
        </Layout>
    }

    return(
        <Layout title={'Новости компании | Civek Water Jet'} description = {'Новости компании. Гидроабразивная резка'}>
             <Head>
                <meta name="viewport" content="width=device-width"/>
                <meta name="keywords" content={`Новости рынка гидроабразивной резки, новики станков, технологии гидроабразивнолй резки`} />
            </Head>

            <div className={classes.wrapper}>
                <div className={`${classes.item} ${classes.header}`}>
                    <Header />
                </div>
                
                <div className={`${classes.item} ${classes.nav}`}>
                    {mobile ? <MobileNavigation /> : <Navigation />}
                </div>
               
                <div className={`${classes.item} ${classes.maincontext}`}>
                    {mobile ? <BlockCNewsMobile articles = {articles} /> : <BlockCNews articles = {articles} />}
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

export async function getServerSideProps({req}) {
    if(!req){
        return {articles:null}
    }
    const res = await fetch('http://23.111.202.203:7000/news/company')
    const articles = await res.json();
    return { props: { articles } }
}
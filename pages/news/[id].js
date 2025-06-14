import {useState, useEffect} from 'react';
import {useRouter} from "next/router";
import Layout from "../../components/layout/Layout";
import Header from "../../components/ui/header/Header";
import Navigation from "../../components/ui/navigation/main/Navigation";
import NavigationArticle from "../../components/ui/navigation/main/news/NavigationArticle";
import MobileNavigation from "../../components/ui/navigation/mobile/MobileNavigation";
import BlockIdNews from "../../components/block_code_page/news/id/blockIdNews";
import BlockIdNewsMobile from '../../components/block_code_page/news/id/blockIdNewsMobile';
import MobileFooter from "../../components/ui/footer/mobile/MobileFooter";
import Footer from "../../components/ui/footer/main/Footer";
import Head from 'next/head';
import classes from '../../styles/article_id.module.scss';
import Link from "next/link";
import { useMediaQuery } from 'react-responsive';

const Article = ({article:serverArticle}) => {

    const[mobile, setMobile] = useState(false)
    const isPhone = useMediaQuery({ query: '(max-width: 481px)'})
    useEffect(() => setMobile(isPhone), [isPhone]);

    const[article, setArticle] = useState(serverArticle);
    const router = useRouter();

    useEffect(()=>{
        async function load() {
            const response = await fetch(`http://23.111.202.203:7000/news?id=${router.query.id}`);
            const data = await response.json();
            setArticle(data);
        }
        if(!serverArticle){
            load();
        }
    },[])// eslint-disable-line react-hooks/exhaustive-deps

    if(!article){
        return <Layout>
            <p>...Loading</p>
        </Layout>
    }

    return (
        <>
             <Layout title={`${article.title} | Civek Water Jet`} description = {`${article.title} | Гидроабразивная резка`}>
             <Head>
                <meta name="description" content={`${article.title} | Гидроабразивная резка`} />
                <meta name="keywords" content="" />
                <meta name="viewport" content="width=device-width"/>
                <meta content='true' name='HandheldFriendly'/>
                <meta content='width' name='MobileOptimized'/>
                <meta content='yes' name='apple-mobile-web-app-capable'/>
            </Head>

            <div className={classes.wrapper}>
            <div className={`${classes.item} ${classes.header}`}>
                <Header />
            </div>
                
            <div className={`${classes.item} ${classes.nav}`}>
                {mobile ? <MobileNavigation /> : <Navigation />} 
            </div>

                <div className={`${classes.item} ${classes.maincontext}`}>
                    {mobile ? <BlockIdNewsMobile article = {article} /> : <BlockIdNews article = {article} />}
                </div>
                <div className={`${classes.item} ${classes.asideright}`}>
                    <NavigationArticle article = {article.title_id} />
                </div>
                {mobile ? <MobileFooter /> : <Footer />}
            </div>

            <div className={classes.endpage}></div>

             </Layout>
        </>
    )
} 

export default Article;

export async function getServerSideProps({query, req}) {
    if(!req){
        return {article:null}
    }
    const response = await fetch(`http://23.111.202.203:7000/news?id=${query.id}`);
    const article = await response.json();
    return {props: {article}}
}
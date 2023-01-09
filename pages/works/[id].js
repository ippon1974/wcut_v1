import {useState, useEffect} from 'react';
import {useRouter} from "next/router";
import Layout from "../../components/layout/Layout";
import Header from "../../components/ui/header/Header";
import Navigation from "../../components/ui/navigation/main/Navigation";
import MobileNavigation from "../../components/ui/navigation/mobile/MobileNavigation";
import BlockIdWork from '../../components/block_code_page/work/id/blockIdWork';
import BlockIdWorkMobile from '../../components/block_code_page/work/id/blockIdWorkMobile';
import MobileFooter from "../../components/ui/footer/mobile/MobileFooter";
import Footer from "../../components/ui/footer/main/Footer";
import classes from '../../styles/works_id.module.scss';
import Head from 'next/head';



import { useMediaQuery } from 'react-responsive';


const Work = ({work:serverWork}) => {

    const[mobile, setMobile] = useState(false)
    const isPhone = useMediaQuery({ query: '(max-width: 481px)'})
    useEffect(() => setMobile(isPhone), [isPhone]);

    const[work, setWork] = useState(serverWork);
    const router = useRouter();

    useEffect(()=>{
        async function load() {
            const response = await fetch(`http://localhost:7000/works?id=${router.query.id}`);
            const data = await response.json();
            setWork(data);
        }
        if(!serverWork){
            load();
        }
    },[])// eslint-disable-line react-hooks/exhaustive-deps

    if(!work){
        return <Layout>
            <p>...Loading</p>
        </Layout>
    }

    return (
        <Layout title={'Работы'}>

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
                 {mobile ? <BlockIdWorkMobile work = {work} /> : <BlockIdWork work = {work} />}
                </div>

                {mobile ? <MobileFooter /> : <Footer />}
                
            </div>

            <div className={classes.endpage}></div>
            </Layout>
    )
}
export default Work;

export async function getServerSideProps({query, req}) {
    if(!req){
        return {work:null}
    }
    const response = await fetch(`http://localhost:7000/works?id=${query.id}`);
    const work = await response.json();
    return {props: {work}}
}
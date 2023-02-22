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

const Work = ({work:serverWork, prev:serverPrev, next:serverNext, maxid:serverMaxId, minid:serverMinId}) => {

    const router = useRouter();

    const[minid, setMinId] = useState(serverMinId);
    useEffect(()=>{
        async function load() {
            const res = await fetch(`http://23.105.246.179:7000/works/min`);
            const min = await res.json();
            setMinId(min);
        }
            load();
    },[serverMinId])// eslint-disable-line react-hooks/exhaustive-deps

    const[maxid, setMaxId] = useState(serverMaxId);
    useEffect(()=>{
        async function load() {
            const res = await fetch(`http://23.105.246.179:7000/works/max`);
            const max = await res.json();
            setMaxId(max);
        }
            load();
    },[serverMaxId])// eslint-disable-line react-hooks/exhaustive-deps

    const[prev, setPrevPage] = useState(serverPrev);
    useEffect(()=>{
       async function load() {
        const response = await fetch(`http://23.105.246.179:7000/works/prev?id=${router.query.id}`);
        const data = await response.json();
        if(data[0] == undefined){
            return
        }
        setPrevPage(data);
       }
        load();
    }, [serverPrev]);// eslint-disable-line react-hooks/exhaustive-deps



    const[next, setNextPage] = useState(serverNext);
    useEffect(()=>{
       async function load() {
        // const response = await fetch(`http://23.105.246.179:7000/works/next?id=${router.query.id}`);
        const response = await fetch(`/api/works/next/10`);
        const data = await response.json();
        if(data[0] == undefined){
            return
        }
        setNextPage(data);
       }
        load();
    }, [serverNext]);// eslint-disable-line react-hooks/exhaustive-deps


    const[mobile, setMobile] = useState(false)
    const isPhone = useMediaQuery({ query: '(max-width: 481px)'})
    useEffect(() => setMobile(isPhone), [isPhone]);

    const[work, setWork] = useState(serverWork);
    useEffect(()=>{
        async function load() {
            const response = await fetch(`http://23.105.246.179:7000/works?id=${router.query.id}`);
            const data = await response.json();
            setWork(data);
        }
        if(!serverWork){
            load();
        }
    },[serverWork])// eslint-disable-line react-hooks/exhaustive-deps

    if(!work){
        return <Layout>
            <p>...Loading</p>
        </Layout>
    }
    if(!prev){
        return <Layout>
            <p>...Loading</p>
        </Layout>
    }
    if(!next){
        return <Layout>
            <p>...Loading</p>
        </Layout>
    }

    return (
        <Layout title={`${serverWork.title} | ${'Услуги гидроабразивной резки Civek Water Jet'}`}>
           
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
                 {mobile ? <BlockIdWorkMobile work = {work} prevPage = {minid == work.id ? "" : prev[0].id} nextPage = {maxid == work.id ? "" : next[0].id} maxId = {maxid} minId= {minid} /> : <BlockIdWork work = {work} prevPage = {minid == work.id ? "" : prev[0].id} nextPage = {maxid == work.id ? "" : next[0].id} maxId = {maxid} minId= {minid} />}
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
        return {work:null, prev:null, next:null, maxid:null, minid:null}
    }
    const response = await fetch(`http://23.105.246.179:7000/works?id=${query.id}`);
    const work = await response.json();

    const respprev = await fetch(`http://23.105.246.179:7000/works/prev?id=${query.id}`);
    const prev = await respprev.json();

    const respnext = await fetch(`http://23.105.246.179:7000/works/next?id=${query.id}`);
    const next = await respnext.json();

    const respmaxid = await fetch(`http://23.105.246.179:7000/works/max`);
    const maxid = await respmaxid.json();

    const respminid = await fetch(`http://23.105.246.179:7000/works/min`);
    const minid = await respminid.json();

    return {props: {work, prev, next, maxid, minid} }
}
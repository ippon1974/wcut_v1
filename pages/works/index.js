import { useEffect, useState } from 'react'
import Layout from "../../components/layout/Layout";
import Header from "../../components/ui/header/Header";
import Navigation from "../../components/ui/navigation/main/Navigation";
import MobileNavigation from "../../components/ui/navigation/mobile/MobileNavigation";
import BlockWork from "../../components/block_code_page/work/blockWork";
import BlockWorkMobile from "../../components/block_code_page/work/blockWorkMobile";
import MobileFooter from "../../components/ui/footer/mobile/MobileFooter";
import Footer from "../../components/ui/footer/main/Footer";
import classes from '../../styles/works.module.scss';
import Head from 'next/head';
import $ from 'jquery';  
import { useMediaQuery } from 'react-responsive';

export default function Works({works:serverWorks}) {

    const [mobile, setMobile] = useState(false)
    const isPhone = useMediaQuery({ query: '(max-width: 481px)'})
    useEffect(() => setMobile(isPhone), [isPhone]);

    useEffect(() => {
        $(function(){
            $('.viewportWork').each(function () { var imgHeight =  $(this).find('>img').css('height');  $(this).animate({ height: imgHeight, top: '-' + imgHeight }, { queue: false, duration: 100, easing: 'swing' }).css('overflow', 'visible'); });
            $('.viewportWork').parent().closest('div').parent().hover(function(){$(this).find('.viewportWork').stop().animate({top: 0},{queue:false,duration:250,easing:'swing'}); }, function() { var imgHeight = $(this).find('.viewportWork').find('>img').css('height');  $(this).find('.viewportWork').stop().animate({top:'-'+imgHeight},{queue:false,duration:200,easing:'swing'}); });
        })
    }) 

    const[works, setWorks] = useState(serverWorks);

    useEffect(()=> {
        async function load() {
            const response = await fetch('http://localhost:7000/works/all')
            const json = await response.json();
            setWorks(json);
        }
        if(!serverWorks){
            load();
        }
    }, [serverWorks])

    if(!works){
        return <Layout>
            <p>...Loading</p>
        </Layout>
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
                   {mobile ? <BlockWorkMobile works={works} /> : <BlockWork works={works} />}
                </div>

               <div className={classes.componentfooter}>
                {mobile ? <MobileFooter /> : <Footer />}
               </div>         
            </div>

            <div className={classes.endpage}></div>
        </Layout>
    );
}

export async function getServerSideProps({req}) {
    if(!req){
        return {works:null}
    }
    const res = await fetch('http://localhost:7000/works/all')
    const works = await res.json();
    return { props: { works } }
}
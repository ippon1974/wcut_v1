import React, { useState, useEffect } from 'react';
import {useRouter} from "next/router";
import Layout from "../../../../components/layout/Layout";
import Header from "../../../../components/ui/header/Header";
import Navigation from "../../../../components/ui/navigation/main/Navigation";
import MobileNavigation from "../../../../components/ui/navigation/mobile/MobileNavigation";
import BlockIdMaterials from '../../../../components/block_code_page/materials/id/blockIdMaterials';
import BlockIdMaterialsMobile from '../../../../components/block_code_page/materials/id/blockIdMateterialsMobile';
import MobileFooter from "../../../../components/ui/footer/mobile/MobileFooter";
import Footer from "../../../../components/ui/footer/main/Footer";
import classes from '../../../../styles/materials.module.scss';
import Link from "next/link";
import Head from 'next/head';
import Image from "next/image";
import { useMediaQuery } from 'react-responsive';

const Size = ({mname:serverMName, costsize:serverCostSize}) => {

    const { asPath, pathname } = useRouter();
    const item = asPath.split('/');
    const pathItem = item[2];
    const pathSize = item[4];
    
    const[mname, setMName] = useState(serverMName);
    useEffect(() => {
        async function load() {
            const res = await fetch(`http://localhost:7000/materials?material=${pathItem}`);
            const mname = await res.json();
            setMName(mname);
        }
            load();
    },[serverMName])// eslint-disable-line react-hooks/exhaustive-deps

    const[costsize, setCostSize] = useState(serverCostSize);
    useEffect(() => {
        async function load() {
            const res = await fetch(`http://localhost:7000/costsize?id=${mname.id}&size=${pathSize}`);
            const costsize = await res.json();
            setCostSize(costsize);
        }
            load();
    },[serverCostSize])// eslint-disable-line react-hooks/exhaustive-deps



    const [mobile, setMobile] = useState(false)
    const isPhone = useMediaQuery({ query: '(max-width: 481px)'})
    useEffect(() => setMobile(isPhone), [isPhone]);

    return (
        <>
             <Layout title={'Ц'}>
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

                <div className={`${classes.item} ${classes.asideleft}`}>
                    <div><p>Цены на раскрой</p></div>
                </div>

                <div className={`${classes.item} ${classes.maincontext}`}>
                   
                    {mobile ? <BlockIdMaterialsMobile /> : <BlockIdMaterials mname={mname} costsize={costsize} />}
                  
                </div>

                <div className={`${classes.item} ${classes.asideright}`}>

                  <div className={`${classes.testHeadBlockOne}`}> 
                    <div className={classes.testHeadBlockOneImg}><Image src="/iconTwitter.gif" width={"29"} height={"29"} alt="" /></div>
                    <div className={classes.testHeadBlockOneText}>Контакты</div>
                </div>
                <div className={classes.testHeadBlockBody}>Пн-Пт с 9:00 до 19:00. Суббота и воскресенье выходные дни. Телефон в Москве: +7 (925) 585-33-71 (Мегафон)</div>
                <div className={classes.testHeadBlockTwo}>
                    <div className={classes.testHeadBlockTwoImg}><Image src="/lightarrow.png" width={"16"} height={"16"} alt="" /></div>
                    <div className={classes.testHeadBlockTwoLink}>
                        <Link href={"/contact"} title="Контакты">Контакты</Link>
                    </div>
                </div>
                
                </div>
                
                {mobile ? <MobileFooter /> : <Footer />}
            
            </div>
            <div className={classes.endpage}></div>
        

        </Layout>
        </>
    )

}
export default Size;

export async function getServerSideProps({query, req}) {
    if(!req){
        return {mname:null, costsize:null}
    }
    const response = await fetch(`http://localhost:7000/materials?material=${query.material}`);
    const mname = await response.json();

    const res = await fetch(`http://localhost:7000/costsize?id=${query.id}&size=${query.size}`);
    const costsize = await res.json();

    return {props: {mname, costsize} }
}
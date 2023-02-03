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

const Size = ({mname:serverMName, costsize:serverCostSize, costsizelist:serverCostSizeList}) => {

    const router = useRouter();
    const { asPath, pathname } = useRouter();
    const item = asPath.split('/');
    const pathItem = item[2];
    const pathSize = item[4];

    const [mobile, setMobile] = useState(false)
    const isPhone = useMediaQuery({ query: '(max-width: 481px)'})
    useEffect(() => setMobile(isPhone), [isPhone]);

    const[costsizelist, setCostSizeList] = useState(serverCostSizeList);
    useEffect(() => {
        async function load() {
            const r = await fetch(`http://localhost:7000/costsize/type?material_id=${mname.id}`);
            const costsizelist = await r.json();
            setCostSizeList(costsizelist);
        }
        if(!costsizelist){
            load();
        }
        //console.log("List of ....", costsizelist);
    },[costsizelist])// eslint-disable-line react-hooks/exhaustive-deps

    const[costsize, setCostSize] = useState(serverCostSize);
    useEffect(() => {
        async function load() {
            const res = await fetch(`http://localhost:7000/costsize?id=${mname.id}&size=${pathSize}`);
            const costsize = await res.json();
            setCostSize(costsize);
        }
        if(!serverCostSize){
            load();
        }
        //console.log("client COST ....", costsize);
    },[serverCostSize])// eslint-disable-line react-hooks/exhaustive-deps

    useEffect(()=>{
        costsize.size = pathSize;
        costsize.cost = serverCostSize.cost;
        if (router && router.query) {
        setCostSize({...costsize})
        }
     },[serverMName])// eslint-disable-line react-hooks/exhaustive-deps

    const[mname, setMName] = useState(serverMName);
    useEffect(() => {
        async function load() {
            const res = await fetch(`http://localhost:7000/materials?material=${pathItem}`);
            const mname = await res.json();
            setMName(mname);
        }
            //console.log("client Mat ....", mname);
            if(!serverMName){
                load();
            }
    },[serverMName])// eslint-disable-line react-hooks/exhaustive-deps

    if(!mname){
        return <Layout>
            <p>...Loading</p>
        </Layout>
    }


    const handle = (event) => {
        const size = event.target.value;
        const mat = router.query.material;
        router.push(`/materials/${mat}/size/${size}`);
    }

    return (
        <>
             <Layout title={`${mname.material}. Толщина: ${costsize.size} мм. Цена раскроя 1 пог. м.: ${costsize.cost} руб | Civek Water Jet гидроабразив`}>
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
                    {mobile ? <BlockIdMaterialsMobile mname={mname} costsize={costsize} costsizelist={costsizelist} router={router} /> : <BlockIdMaterials mname={mname} costsize={costsize} costsizelist={costsizelist} router={router} />}
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
        return {mname:null, costsize:null, costsizelist:null}
    }
    const response = await fetch(`http://localhost:7000/materials?material=${query.material}`);
    const mname = await response.json();

    const res = await fetch(`http://localhost:7000/costsize?id=${mname.id}&size=${query.size}`);
    const costsize = await res.json();
    //console.log("SERVER Cost ...", costsize, "query size ", query.size, "query id ", mname.id);

    const re = await fetch(`http://localhost:7000/costsize/type?material_id=${mname.id}`);
    const costsizelist = await re.json();

    return {props: {mname, costsize, costsizelist} }
}
import React, { useState, useEffect } from 'react';
import Layout from "../../components/layout/Layout";
import Header from "../../components/ui/header/Header";
import Navigation from "../../components/ui/navigation/main/Navigation";
import MobileNavigation from "../../components/ui/navigation/mobile/MobileNavigation";
import MobileFooter from "../../components/ui/footer/mobile/MobileFooter";
import Footer from "../../components/ui/footer/main/Footer";
import classes from '../../styles/materials.module.scss';
import Link from "next/link";
import Head from 'next/head';
import Image from "next/image";
import { useMediaQuery } from 'react-responsive';

export default function Price({materials:serverMaterials, costsize:serverCostSize}) {

    const[materials, setMaterials] = useState(serverMaterials);
    const[costsize, setCostSize] = useState(serverCostSize);

    function startFromZero(arr) {
        var newArr = [];
        var count = 0;
        for (var i in arr) {
            newArr[count++] = arr[i];
        }
        return newArr;
    }

    const tCostAglomerat = [];
    for(let i=0; i < costsize.length; i++){
        if(costsize[i].material_id == 1){
            tCostAglomerat[i] = costsize[i];
        }
    }
    const tCoAgl = startFromZero(tCostAglomerat);

    const tCostSteel = [];
    for(let i=0; i < costsize.length; i++){
        if(costsize[i].material_id == 2){
            tCostSteel[i] = costsize[i];
        }
    }
    const tCoSt = startFromZero(tCostSteel);

    const tCostGranite = [];
    for(let i=0; i < costsize.length; i++){
        if(costsize[i].material_id == 3){
            tCostGranite[i] = costsize[i];
        }
    }
    const tCoGra = startFromZero(tCostGranite);
    
    const[outprice, setOutPrice] = useState({
        aglomerat: "",
        steel: "",
        granite: ""
    });
   
    const handle = (event, translit) => {   
    if(translit == "aglomerat"){
        const { selectedIndex } = event.target.options;
        const{ id, cost, size} = tCoAgl[selectedIndex]; 
        setOutPrice(outprice => ({
            ...outprice,
            aglomerat: {id:id, cost:cost, size:size}
        }))
    }

    if(translit == "steel"){
        const { selectedIndex } = event.target.options;
        const{ id, cost, size} = tCoSt[selectedIndex];
        setOutPrice(outprice => ({
            ...outprice,
            steel: {id:id, cost:cost, size:size}
        }))
    }

    if(translit == "granite"){
        const { selectedIndex } = event.target.options;
        const{ id, cost, size} = tCoGra[selectedIndex];
        setOutPrice(outprice => ({
            ...outprice,
            granite: {id:id, cost:cost, size:size}
        }))
    }
    }

      function defCost(id){
        let res = "";
        let resA = [];
        materials.map(m => (
            costsize.map((c, i) => {
                if(c.material_id === id){
                    resA.push(c.cost);
                    res = Math.min(...resA);
                }   
            })
        ))
        return res;
      }

      function defSize(id){
        let res = "";
        let resA = [];
        materials.map(m => (
            costsize.map((c, i) => {
                if(c.material_id === id){
                    resA.push(c.size);
                    res = Math.min(...resA);
                }   
            })
        ))
        return res;
      }
      
    const [mobile, setMobile] = useState(false)
    const isPhone = useMediaQuery({ query: '(max-width: 481px)'})
    useEffect(() => setMobile(isPhone), [isPhone]);

    useEffect(()=> {
        async function load() {
            const response = await fetch('http://localhost:7000/materials/all')
            const json = await response.json();
            setMaterials(json);

            const rescost = await fetch('http://localhost:7000/costsize/all')
            const jcost = await rescost.json();
            setCostSize(jcost);
        }
        if(!serverMaterials){
            load();
        }
        }, [serverMaterials])// eslint-disable-line react-hooks/exhaustive-deps

        if(!materials){
            return <Layout>
                <p>...Loading</p>
            </Layout>
        }

    return(
        <Layout title={'Цены на раскрой гидроабразивом | Стоимость раскроя различных материалов с помощью технологии гидроабразивной резки.'}>
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
                     <div>
                        <h2>Стоимость раскроя материала с применением технологии гидроабразивной резки</h2>
                        <div className={classes.hr}></div>
                        <h3>Стоимость</h3>
                        <p>Точная стоимость услуг по гидроабразивной резке определяется после получения чертежей и составления технологии резки, оптимизации раскроя.</p>
                        <p><Link className={classes.activecalc} href="http://calculation.htz.ru/" target={'_blank'} title="Калькулятор гидроабразивной рhttp://localhost:7165/sites/all/themes/tommy/images/iconTwitter.gifезки"><strong>Калькулятор</strong></Link> гидроабразивной резки.</p>
                        <p>Стоимость раскроя материала указана в рублях РФ за один погонный метр <strong>без НДС</strong>. Минимальная стоимость заказа не должна быть <strong>меньше 5000 рублей</strong>.</p>
                        <p>Стоимость программы для раскроя — 2500 рублей.</p>
                       
                        <h3>Таблица стоимости раскроя материала гидроабразивом</h3>

                        <table className={classes.pricematerials}>
                        <tbody>
                            <tr>
                                <th>Материал</th>
                                <th>Толщина</th>
                                <th>Стоимость</th>
                            </tr>
                        {
                            materials.map((m, index) => 
                            <tr key={index}>
                                {m.translit === "aglomerat" ? <td><Link href={`/materials/${m.translit}/size/${!outprice.aglomerat.size ? defSize(m.id):outprice.aglomerat.size}`} title={`${m.material}. Толщина листа: ${!outprice.aglomerat.size ? defSize(m.id):outprice.aglomerat.size} мм.`}>{m.material}</Link></td> : ""}
                                {m.translit === "steel" ? <td><Link href={`/materials/${m.translit}/size/${!outprice.steel.size ? defSize(m.id):outprice.steel.size}`} title={`${m.material}. Толщина листа: ${!outprice.steel.size ? defSize(m.id):outprice.steel.size} мм.`}>{m.material}</Link></td> : ""}
                                {m.translit === "granite" ? <td><Link href={`/materials/${m.translit}/size/${!outprice.granite.size ? defSize(m.id):outprice.granite.size}`} title={`${m.material}. Толщина листа: ${!outprice.granite.size ? defSize(m.id):outprice.granite.size} мм.`}>{m.material}</Link></td> : ""}
                                
                                <td>
                                { m.translit == "aglomerat" ?   
                                <select onChange={event => handle(event, m.translit)}>
                                     {   
                                         tCoAgl.map((c, subindex) => {
                                            return <option key={subindex}>{c.size}</option>
                                         })
                                     }
                                </select> : ""
                                }

                                { m.translit == "steel" ?   
                                <select onChange={event => handle(event, m.translit)}>
                                     { 
                                         tCoSt.map((c, subindex) => {
                                            return <option key={subindex}>{c.size}</option>
                                         })
                                     }
             office                   </select> : ""
                                }

                                { m.translit == "granite" ?   
                                <select onChange={event => handle(event, m.translit)}>
                                     { 
                                         tCoGra.map((c, subindex) => {
                                            return <option key={subindex}>{c.size}</option>
                                         })
                                     }
                                </select> : ""
                                }
                                <span> мм.</span>
                                </td>
                                    {m.translit == "aglomerat" ? <td>{!outprice.aglomerat ? defCost(m.id) : ""}  {outprice.aglomerat.cost} <span className={'short'}>руб. пог. м.</span></td> : null} 
                                    {m.translit == "steel" ? <td>{!outprice.steel ? defCost(m.id) : ""} {outprice.steel.cost} <span className={'short'}>руб. пог. м.</span></td> : null} 
                                    {m.translit == "granite" ? <td>{!outprice.granite ? defCost(m.id) : ""} {outprice.granite.cost} <span className={'short'}>руб. пог. м.</span></td> : null}    
                                </tr>
                                )
                        }
                        </tbody>
                        </table>

                        <h3>Принимаем различные форматы файлов для подготовки программы раскроя материалов для гидроабразивных станков</h3>
                        <p><strong>Форматы файлов</strong>: (dwg, dxf, ald, anc, cnc, jpg, gif, pdf, txt, world, excel.).</p>
                        <h3>Расположение производства</h3>
                        <p>Адрес: 140080 ул. Карла Маркса 117 &lsquo;Б&rsquo;, офис № 503 Люберецкий р-н, пос. Красково, МО. Территория института  &laquo;ВНИИСТРОМ&raquo;</p>
                        <h3>Доставка</h3>
                        <p>Доставка заказа в любой регион России. Доставка по Москве и Московской области.</p>
                        
                        <div className={classes.mainlinefooter}>
                            <span><Link href={'/equipment'} title='Контакты'>
                            <Image src="/blogarrow.png" width={"15"} height={"15"} alt="img" />
                            Станки</Link></span></div>
                        </div>
                   
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
    );
}

export async function getServerSideProps({req}) {
    if(!req){
        return {materials:null, costsize:null}
    }
    const res = await fetch('http://localhost:7000/materials/all')
    const materials = await res.json();

    const rescost = await fetch('http://localhost:7000/costsize/all')
    const costsize = await rescost.json();
    return { props: { materials, costsize } }
}
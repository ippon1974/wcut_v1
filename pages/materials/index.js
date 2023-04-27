import React, { useState, useEffect } from 'react';
import Layout from "../../components/layout/Layout";
import Header from "../../components/ui/header/Header";
import Navigation from "../../components/ui/navigation/main/Navigation";
import MobileNavigation from "../../components/ui/navigation/mobile/MobileNavigation";
import BlockMaterial from '../../components/block_code_page/materials/blockMaterial';
import BlockMaterialMobile from '../../components/block_code_page/materials/blockMaterialMobile';
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

    function defCost(id){tAllMaterial
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

    function startFromZero(arr) {
        var newArr = [];
        var count = 0;
        for (var i in arr) {
            newArr[count++] = arr[i];
        }
        return newArr;
    }

    const tAllMaterial = (costsize, material_id )=> {
        const listCostMat = [];
        for(let i=0; i < costsize.length; i++){
            if(costsize[i].material_id == material_id){
                listCostMat[i] =  costsize[i];
            }
        }
        const tCostMat = startFromZero(listCostMat);
        return tCostMat;
    }

    
    const tCostAglomerat = [];
    for(let i=0; i < costsize.length; i++){
        if(costsize[i].material_id == 1){
            tCostAglomerat[i] = costsize[i];
        }
    }
    const tCoAgl = startFromZero(tCostAglomerat);

    const tCostAluminum = [];
    for(let i=0; i < costsize.length; i++){
        if(costsize[i].material_id == 2){
            tCostAluminum[i] = costsize[i];
        }
    }
    const tCoAlum = startFromZero(tCostAluminum);

    const tCostGranite = [];
    for(let i=0; i < costsize.length; i++){
        if(costsize[i].material_id == 9){
            tCostGranite[i] = costsize[i];
        }
    }
    const tCoGra = startFromZero(tCostGranite);

    const tCostBrass = [];
    for(let i=0; i < costsize.length; i++){
        if(costsize[i].material_id == 4){
            tCostBrass[i] = costsize[i];
        }
    }
    const tCoBrass = startFromZero(tCostBrass);

    const tCostCopper = [];
    for(let i=0; i < costsize.length; i++){
        if(costsize[i].material_id == 3){
            tCostCopper[i] = costsize[i];
        }
    }
    const tCoCopper = startFromZero(tCostCopper);


    const tCostPlexiglass = [];
    for(let i=0; i < costsize.length; i++){
        if(costsize[i].material_id == 5){
            tCostPlexiglass[i] = costsize[i];
        }
    }
    const tCoPlexiglass = startFromZero(tCostPlexiglass);

    const tCostGlass = [];
    for(let i=0; i < costsize.length; i++){
        if(costsize[i].material_id == 6){
            tCostGlass[i] = costsize[i];
        }
    }
    const tCoGlass = startFromZero(tCostGlass);

    const tCostGlassPlastic = [];
    for(let i=0; i < costsize.length; i++){
        if(costsize[i].material_id == 7){
            tCostGlassPlastic[i] = costsize[i];
        }
    }
    const tCoGlassPlastic = startFromZero(tCostGlassPlastic);

    const tCostMarble = [];
    for(let i=0; i < costsize.length; i++){
        if(costsize[i].material_id == 8){
            tCostMarble[i] = costsize[i];
        }
    }
    const tCoMarble = startFromZero(tCostMarble);

    const tCostCeramics = [];
    for(let i=0; i < costsize.length; i++){
        if(costsize[i].material_id == 10){
            tCostCeramics[i] = costsize[i];
        }
    }
    const tCoCeramics = startFromZero(tCostCeramics);

    const tCostSteelStainless = [];
    for(let i=0; i < costsize.length; i++){
        if(costsize[i].material_id == 11){
            tCostSteelStainless[i] = costsize[i];
        }
    }
    const tCoSteelStainless = startFromZero(tCostSteelStainless);

    const tCostSteelTool = [];
    for(let i=0; i < costsize.length; i++){
        if(costsize[i].material_id == 12){
            tCostSteelTool[i] = costsize[i];
        }
    }
    const tCoSteelTool = startFromZero(tCostSteelTool);

    const tCostSteeBlack = [];
    for(let i=0; i < costsize.length; i++){
        if(costsize[i].material_id == 13){
            tCostSteeBlack[i] = costsize[i];
        }
    }
    const tCoSteeBlack = startFromZero(tCostSteeBlack);

    const tCostTitanium = [];
    for(let i=0; i < costsize.length; i++){
        if(costsize[i].material_id == 14){
            tCostTitanium[i] = costsize[i];
        }
    }
    const tCoTitanium = startFromZero(tCostTitanium);

    const tCostTextolite = [];
    for(let i=0; i < costsize.length; i++){
        if(costsize[i].material_id == 15){
            tCostTextolite[i] = costsize[i];
        }
    }
    const tCoTextolite = startFromZero(tCostTextolite);

    const tCostCorfiberFiberglass = [];
    for(let i=0; i < costsize.length; i++){
        if(costsize[i].material_id == 16){
            tCostCorfiberFiberglass[i] = costsize[i];
        }
    }
    const tCoCorfiberFiberglass = startFromZero(tCostCorfiberFiberglass);

    const tCostAcrylic = [];
    for(let i=0; i < costsize.length; i++){
        if(costsize[i].material_id == 17){
            tCostAcrylic[i] = costsize[i];
        }
    }
    const tCoAcrylic = startFromZero(tCostAcrylic);

    const tCostPolyethylene = [];
    for(let i=0; i < costsize.length; i++){
        if(costsize[i].material_id == 18){
            tCostPolyethylene[i] = costsize[i];
        }
    }
    const tCoPolyethylene = startFromZero(tCostPolyethylene);

    const tCostPVC = [];
    for(let i=0; i < costsize.length; i++){
        if(costsize[i].material_id == 19){
            tCostPVC[i] = costsize[i];
        }
    }
    const tCoPVC = startFromZero(tCostPVC);

    const tCostPolypropylene = [];
    for(let i=0; i < costsize.length; i++){
        if(costsize[i].material_id == 20){
            tCostPolypropylene[i] = costsize[i];
        }
    }
    const tCoPolypropylene = startFromZero(tCostPolypropylene);

    const tCostFluoroplast = [];
    for(let i=0; i < costsize.length; i++){
        if(costsize[i].material_id == 20){
            tCostFluoroplast[i] = costsize[i];
        }
    }
    const tCoFluoroplast = startFromZero(tCostFluoroplast);

    const tCostKaprolon = [];
    for(let i=0; i < costsize.length; i++){
        if(costsize[i].material_id == 20){
            tCostKaprolon[i] = costsize[i];
        }
    }
    const tCoKaprolon = startFromZero(tCostKaprolon);

    const tCostRubber = [];
    for(let i=0; i < costsize.length; i++){
        if(costsize[i].material_id == 20){
            tCostRubber[i] = costsize[i];
        }
    }
    const tCoRubber = startFromZero(tCostRubber);

    const tCostTree = [];
    for(let i=0; i < costsize.length; i++){
        if(costsize[i].material_id == 21){
            tCostTree[i] = costsize[i];
        }
    }
    const tCoTree = startFromZero(tCostTree);

    const tCostKeramogranit = [];
    for(let i=0; i < costsize.length; i++){
        if(costsize[i].material_id == 25){
            tCostKeramogranit[i] = costsize[i];
        }
    }
    const tCoKeramogranit = startFromZero(tCostKeramogranit);

    const tCostVinylplast = [];
    for(let i=0; i < costsize.length; i++){
        if(costsize[i].material_id == 26){
            tCostVinylplast[i] = costsize[i];
        }
    }
    const tCoVinylplast = startFromZero(tCostVinylplast);

    
    const[outprice, setOutPrice] = useState({
        aglomerat: "",
        aluminum: "",
        granite: "",
        brass: "",
        copper: "",
        plexiglass: "",
        glass: "",
        glass_plastic: "",
        marble: "",
        ceramics: "",
        steel_stainless: "",
        steel_tool: "",
        steel_black: "",
        titanium: "",
        textolit: "",
        corfiber_fiberglass: "",
        acrylic_stone: "",
        polyethylene: "",
        pvc: "",
        polypropylene: "",
        fluoroplast: "",
        kaprolon: "",
        rubber: "",
        tree: "",
        keramogranit: "",
        vinylplast: ""
    });

    const handleClick = (translit, id, cost, size) => {
       if(translit == "aglomerat"){
        setOutPrice(outprice => ({
            ...outprice,
            aglomerat: {id:id, cost:cost, size:size}
        }))
       }
       if(translit == "aluminum"){
        setOutPrice(outprice => ({
            ...outprice,
            aluminum: {id:id, cost:cost, size:size}
        }))
       }
       if(translit == "granite"){
        setOutPrice(outprice => ({
            ...outprice,
            granite: {id:id, cost:cost, size:size}
        }))
       }
       if(translit == "brass"){
        setOutPrice(outprice => ({
            ...outprice,
            brass: {id:id, cost:cost, size:size}
        }))
       }
       if(translit == "copper"){
        setOutPrice(outprice => ({
            ...outprice,
            copper: {id:id, cost:cost, size:size}
        }))
       }
       if(translit == "marble"){
        setOutPrice(outprice => ({
            ...outprice,
            marble: {id:id, cost:cost, size:size}
        }))
       }
       if(translit == "plexiglass"){
        setOutPrice(outprice => ({
            ...outprice,
            plexiglass: {id:id, cost:cost, size:size}
        }))
       }
       if(translit == "glass"){
        setOutPrice(outprice => ({
            ...outprice,
            glass: {id:id, cost:cost, size:size}
        }))
       }
       if(translit == "glass_plastic"){
        setOutPrice(outprice => ({
            ...outprice,
            glass_plastic: {id:id, cost:cost, size:size}
        }))
       }
       if(translit == "ceramics"){
        setOutPrice(outprice => ({
            ...outprice,
            ceramics: {id:id, cost:cost, size:size}
        }))
       }
       if(translit == "steel_stainless"){
        setOutPrice(outprice => ({
            ...outprice,
            steel_stainless: {id:id, cost:cost, size:size}
        }))
       }
       if(translit == "steel_tool"){
        setOutPrice(outprice => ({
            ...outprice,
            steel_tool: {id:id, cost:cost, size:size}
        }))
       }
       if(translit == "steel_black"){
        setOutPrice(outprice => ({
            ...outprice,
            steel_black: {id:id, cost:cost, size:size}
        }))
       }
       if(translit == "titanium"){
        setOutPrice(outprice => ({
            ...outprice,
            titanium: {id:id, cost:cost, size:size}
        }))
       }
       if(translit == "textolit"){
        setOutPrice(outprice => ({
            ...outprice,
            textolit: {id:id, cost:cost, size:size}
        }))
       }
       if(translit == "corfiber_fiberglass"){
        setOutPrice(outprice => ({
            ...outprice,
            corfiber_fiberglass: {id:id, cost:cost, size:size}
        }))
       }
       if(translit == "acrylic_stone"){
        setOutPrice(outprice => ({
            ...outprice,
            acrylic_stone: {id:id, cost:cost, size:size}
        }))
       }
       if(translit == "polyethylene"){
        setOutPrice(outprice => ({
            ...outprice,
            polyethylene: {id:id, cost:cost, size:size}
        }))
       }
       if(translit == "pvc"){
        setOutPrice(outprice => ({
            ...outprice,
            pvc: {id:id, cost:cost, size:size}
        }))
       }
       if(translit == "polypropylene"){
        setOutPrice(outprice => ({
            ...outprice,
            polypropylene: {id:id, cost:cost, size:size}
        }))
       }
       if(translit == "fluoroplast"){
        setOutPrice(outprice => ({
            ...outprice,
            fluoroplast: {id:id, cost:cost, size:size}
        }))
       }
       if(translit == "kaprolon"){
        setOutPrice(outprice => ({
            ...outprice,
            kaprolon: {id:id, cost:cost, size:size}
        }))
       }
       if(translit == "rubber"){
        setOutPrice(outprice => ({
            ...outprice,
            rubber: {id:id, cost:cost, size:size}
        }))
       }
       if(translit == "tree"){
        setOutPrice(outprice => ({
            ...outprice,
            tree: {id:id, cost:cost, size:size}
        }))
       }
       if(translit == "keramogranit"){
        setOutPrice(outprice => ({
            ...outprice,
            keramogranit: {id:id, cost:cost, size:size}
        }))
       }
       if(translit == "vinylplast"){
        setOutPrice(outprice => ({
            ...outprice,
            vinylplast: {id:id, cost:cost, size:size}
        }))
       }
    }
   


    const handle = (event, translit) => {   
    if(translit == "aglomerat"){
        const { selectedIndex } = event.target.options;
        const{ id, cost, size} = tCoAgl[selectedIndex]; 
        setOutPrice(outprice => ({
            ...outprice,
            aglomerat: {id:id, cost:cost, size:size}
        }))
    }

     if(translit == "aluminum"){
        const { selectedIndex } = event.target.options;
        const{ id, cost, size} = tCoAlum[selectedIndex];
        setOutPrice(outprice => ({
            ...outprice,
            aluminum: {id:id, cost:cost, size:size}
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

    if(translit == "brass"){
        const { selectedIndex } = event.target.options;
        const{ id, cost, size} = tCoBrass[selectedIndex];
        setOutPrice(outprice => ({
            ...outprice,
            brass: {id:id, cost:cost, size:size}
        }))
    } 

    if(translit == "copper"){
        const { selectedIndex } = event.target.options;
        const{ id, cost, size} = tCoCopper[selectedIndex];
        setOutPrice(outprice => ({
            ...outprice,
            copper: {id:id, cost:cost, size:size}
        }))
    }

    if(translit == "plexiglass"){
        const { selectedIndex } = event.target.options;
        const{ id, cost, size} = tCoPlexiglass[selectedIndex];
        setOutPrice(outprice => ({
            ...outprice,
            plexiglass: {id:id, cost:cost, size:size}
        }))
    }

    if(translit == "glass"){
        const { selectedIndex } = event.target.options;
        const{ id, cost, size} = tCoGlass[selectedIndex];
        setOutPrice(outprice => ({
            ...outprice,
            glass: {id:id, cost:cost, size:size}
        }))
    }

    if(translit == "glass_plastic"){
        const { selectedIndex } = event.target.options;
        const{ id, cost, size} = tCoGlassPlastic[selectedIndex];
        setOutPrice(outprice => ({
            ...outprice,
            glass_plastic: {id:id, cost:cost, size:size}
        }))
    }

    if(translit == "marble"){
        const { selectedIndex } = event.target.options;
        const{ id, cost, size} = tCoMarble[selectedIndex];
        setOutPrice(outprice => ({
            ...outprice,
            marble: {id:id, cost:cost, size:size}
        }))
    }
    if(translit == "ceramics"){
        const { selectedIndex } = event.target.options;
        const{ id, cost, size} = tCoCeramics[selectedIndex];
        setOutPrice(outprice => ({
            ...outprice,
            сeramics: {id:id, cost:cost, size:size}
        }))
    }
    if(translit == "steel_stainless"){
        const { selectedIndex } = event.target.options;
        const{ id, cost, size} = tCoSteelStainless[selectedIndex];
        setOutPrice(outprice => ({
            ...outprice,
            steel_stainless: {id:id, cost:cost, size:size}
        }))
    }
    if(translit == "steel_tool"){
        const { selectedIndex } = event.target.options;
        const{ id, cost, size} = tCoSteelTool[selectedIndex];
        setOutPrice(outprice => ({
            ...outprice,
            steel_tool: {id:id, cost:cost, size:size}
        }))
    }
    if(translit == "steel_black"){
        const { selectedIndex } = event.target.options;
        const{ id, cost, size} = tCoSteeBlack[selectedIndex];
        setOutPrice(outprice => ({
            ...outprice,
            steel_black: {id:id, cost:cost, size:size}
        }))
    }
    if(translit == "titanium"){
        const { selectedIndex } = event.target.options;
        const{ id, cost, size} = tCoTitanium[selectedIndex];
        setOutPrice(outprice => ({
            ...outprice,
            titanium: {id:id, cost:cost, size:size}
        }))
    }
    if(translit == "textolit"){
        const { selectedIndex } = event.target.options;
        const{ id, cost, size} = tCoTextolite[selectedIndex];
        setOutPrice(outprice => ({
            ...outprice,
            textolit: {id:id, cost:cost, size:size}
        }))
    }
    if(translit == "corfiber_fiberglass"){
        const { selectedIndex } = event.target.options;
        const{ id, cost, size} = tCoCorfiberFiberglass[selectedIndex];
        setOutPrice(outprice => ({
            ...outprice,
            corfiber_fiberglass: {id:id, cost:cost, size:size}
        }))
    }
    if(translit == "acrylic_stone"){
        const { selectedIndex } = event.target.options;
        const{ id, cost, size} = tCoAcrylic[selectedIndex];
        setOutPrice(outprice => ({
            ...outprice,
            acrylic_stone: {id:id, cost:cost, size:size}
        }))
    }
    if(translit == "polyethylene"){
        const { selectedIndex } = event.target.options;
        const{ id, cost, size} = tCoPolyethylene[selectedIndex];
        setOutPrice(outprice => ({
            ...outprice,
            polyethylene: {id:id, cost:cost, size:size}
        }))
    }
    if(translit == "pvc"){
        const { selectedIndex } = event.target.options;
        const{ id, cost, size} = tCoPVC[selectedIndex];
        setOutPrice(outprice => ({
            ...outprice,
            pvc: {id:id, cost:cost, size:size}
        }))
    }
    if(translit == "polypropylene"){
        const { selectedIndex } = event.target.options;
        const{ id, cost, size} = tCoPolypropylene[selectedIndex];
        setOutPrice(outprice => ({
            ...outprice,
            polypropylene: {id:id, cost:cost, size:size}
        }))
    }
    if(translit == "fluoroplast"){
        const { selectedIndex } = event.target.options;
        const{ id, cost, size} = tCoFluoroplast[selectedIndex];
        setOutPrice(outprice => ({
            ...outprice,
            fluoroplast: {id:id, cost:cost, size:size}
        }))
    }
    if(translit == "kaprolon"){
        const { selectedIndex } = event.target.options;
        const{ id, cost, size} = tCoKaprolon[selectedIndex];
        setOutPrice(outprice => ({
            ...outprice,
            kaprolon: {id:id, cost:cost, size:size}
        }))
    }
    if(translit == "rubber"){
        const { selectedIndex } = event.target.options;
        const{ id, cost, size} = tCoRubber[selectedIndex];
        setOutPrice(outprice => ({
            ...outprice,
            rubber: {id:id, cost:cost, size:size}
        }))
    }
    if(translit == "tree"){
        const { selectedIndex } = event.target.options;
        const{ id, cost, size} = tCoTree[selectedIndex];
        setOutPrice(outprice => ({
            ...outprice,
            tree: {id:id, cost:cost, size:size}
        }))
    }
    if(translit == "keramogranit"){
        const { selectedIndex } = event.target.options;
        const{ id, cost, size} = tCoKeramogranit[selectedIndex];
        setOutPrice(outprice => ({
            ...outprice,
            keramogranit: {id:id, cost:cost, size:size}
        }))
    }
    if(translit == "vinylplast"){
        const { selectedIndex } = event.target.options;
        const{ id, cost, size} = tCoVinylplast[selectedIndex];
        setOutPrice(outprice => ({
            ...outprice,
            vinylplast: {id:id, cost:cost, size:size}
        }))
    }

    }

    const [mobile, setMobile] = useState(false)
    const isPhone = useMediaQuery({ query: '(max-width: 481px)'})
    useEffect(() => setMobile(isPhone), [isPhone]);

    useEffect(()=> {
        async function load() {
            const response = await fetch('http://23.105.246.179:7000/materials/all')
            const json = await response.json();
            setMaterials(json);

            const rescost = await fetch('http://23.105.246.179:7000/costsize/all')
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
        <Layout title={'Стоимость гидроабразивной резки материалов.| Civek Water Jet - услуги гидроабразивной резки'}>
             <Head>
                <meta name="viewport" content="width=device-width"/>
                <meta name="description" content={`Гидроабразивная резка цена. Раскрой более 50 типов материалов различной толщины и плотности`} />
                <meta name="keywords" content={`Цена гидроабразивной резки, разрезать сталь, разрезать мрамор, разрезать гранит`} />
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
                        {/* <p><Link className={classes.activecalc} href="http://calculation.htz.ru/" target={'_blank'} title="Калькулятор гидроабразивной рhttp://localhost:7165/sites/all/themes/tommy/images/iconTwitter.gifезки"><strong>Калькулятор</strong></Link> гидроабразивной резки.</p> */}
                        <p>Стоимость раскроя материала указана в рублях РФ за один погонный метр <strong className={classes.ndc}>без НДС</strong>. Минимальная стоимость заказа не должна быть <strong>меньше 5000 рублей</strong>.</p>
                        <p>Стоимость программы для раскроя — 2500 рублей.</p>
                        <h3>Таблица стоимости раскроя материала. Гидроабразивная резка.</h3>

                        {mobile ? <BlockMaterialMobile materials={materials} costsize={costsize} outprice={outprice} defSize={defSize} defCost={defCost} handleClick={handleClick} /> : <BlockMaterial materials={materials} costsize={costsize} outprice={outprice} defSize={defSize} defCost={defCost} handle={handle} />}
                        
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
    const res = await fetch('http://23.105.246.179:7000/materials/all')
    const materials = await res.json();

    const rescost = await fetch('http://23.105.246.179:7000/costsize/all')
    const costsize = await rescost.json();
    return { props: { materials, costsize } }
}
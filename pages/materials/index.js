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
import Select from "react-select";

export default function Price() {

    const [mobile, setMobile] = useState(false)
    const isPhone = useMediaQuery({ query: '(max-width: 481px)'})
    useEffect(() => setMobile(isPhone), [isPhone]);

    const [aglomerat, setAglomerat] = useState('215');
    const[brass, setBrass] = useState('278');
    const[steel, setSteel] = useState('418');


    // const options = [
    //     { value: "blues", label: "Blues" },
    //     { value: "rock", label: "Rock" },
    //     { value: "jazz", label: "Jazz" },
    //     { value: "orchestra", label: "Orchestra" },
    //   ];

    // function handleChange(event) {
	// 	setValue(event.target.value);
	// }



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
                        
                        {/* <select value={value} onChange={handleChange}>
                            <option value={'o'}>text1</option>
                            <option>text2</option>
                            <option>text3</option>
                            <option>text4</option>
                        </select>
                        <p>ваш выбор: {value}</p> */}

                        {/* <select value={value} onChange={(event) => setValue(event.target.value)}>
                                    <option value="5">5</option>
                                    <option value="10">10</option>
                                    <option value="15">15</option>
                                    <option value="20">20</option>
                                    <option value="25">25</option>
                                    <option value="30">30</option>
                                    <option value="35">35</option>
                                    <option value="40">40</option>
                                    <option value="45">45</option>
                                    <option value="50">50</option>
                        </select>
                        <p>
                            ваш выбор: {value}
                        </p> */}

                        {/* <Select options={options} /> */}

                        <h3>Таблица стоимости раскроя материала гидроабразивом</h3>
                        
                        <table className={classes.pricematerials}>
                            <tbody>
                            <tr>
                                <th>Материал</th>
                                <th>Толщина</th>
                                <th>Стоимость</th>
                            </tr>
                            <tr>
                                <td><a href={'/materials/id/one'} title="Агломерат. 10 мм. 960 руб. 1 пог. метр. Гидроабразив">Агломерат</a></td>
                                <td>
                                <select value={aglomerat} onChange={(event) => setAglomerat(event.target.value)}>
                                    <option value="215">5</option>
                                    <option value="355">10</option>
                                    <option value="485">15</option>
                                    <option value="525">20</option>
                                    <option value="680">25</option>
                                    <option value="788">30</option>
                                    <option value="855">35</option>
                                    <option value="950">40</option>
                                    <option value="1050">45</option>
                                    <option value="1350">50</option>
                                </select> мм.
                                </td>
                                <td>{aglomerat} руб. <span class="short">пог. м.</span></td>
                            </tr>
                            <tr>
                                <td><a href={"/materials/id/one"} title="Агломерат. 10 мм. 960 руб. 1 пог. метр. Гидроабразив">Латунь</a></td>
                                <td>
                                <select value={brass} onChange={(event) => setBrass(event.target.value)}>
                                    <option value="278">5</option>
                                    <option value="378">10</option>
                                    <option value="478">15</option>
                                    <option value="579">20</option>
                                    <option value="615">25</option>
                                    <option value="735">30</option>
                                    <option value="815">35</option>
                                    <option value="988">40</option>
                                    <option value="1150">45</option>
                                    <option value="1385">50</option>
                                </select> мм.
                                </td>
                                <td>{brass} руб. <span class="short">пог. м.</span></td>
                            </tr>

                            <tr>
                                <td><a href={"/materials/id/one"} title="Агломерат. 10 мм. 960 руб. 1 пог. метр. Гидроабразив">Нержавеющая сталь</a></td>
                                <td>
                                <select value={steel} onChange={(event) => setSteel(event.target.value)}>
                                    <option value="418">5</option>
                                    <option value="535">10</option>
                                    <option value="682">15</option>
                                    <option value="766">20</option>
                                    <option value="825">25</option>
                                    <option value="818">30</option>
                                    <option value="1018">35</option>
                                    <option value="1288">40</option>
                                    <option value="1378">45</option>
                                    <option value="1546">50</option>
                                </select> мм.
                                </td>
                                <td>{steel} руб. <span class="short">пог. м.</span></td>
                            </tr>
                           
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
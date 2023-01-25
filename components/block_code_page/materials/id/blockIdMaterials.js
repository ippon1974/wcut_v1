import {useState, useEffect} from 'react';
import {useRouter} from "next/router";
import classes from '../../../../styles/materials.module.scss';
import Link from "next/link";
import Image from "next/image";

const blockIdMateterials = (props) => {

    const { asPath, pathname } = useRouter();
    const item = asPath.split('/');
    const mName = item[2];
    const cSize = item[4];

    const[mat, setMat] = useState(props.mname);
    useEffect(()=>{
        async function load() {
            const res = await fetch(`http://localhost:7000/materials?material=${mName}`);
            const m = await res.json();
            setMat(m);
        }
            load();
    },[mName])// eslint-disable-line react-hooks/exhaustive-deps

    const[costsize, setCostSize] = useState(props.costsize);
    useEffect(()=>{
        async function load() {
            const res = await fetch(`http://localhost:7000/costsize?id=${mat.id}&size=${cSize}`);
            const csize = await res.json();
            setCostSize(csize);
        }
            load();
    },[cSize])// eslint-disable-line react-hooks/exhaustive-deps

    return (
        <>
                 <div>
                        <h2>Гидроабразивная резка материала. {mat.material}. Толщина: {costsize.size} мм.</h2>
                        <div className={classes.hr}></div>
                        <h3>Стоимость раскроя: {costsize.cost} руб. за 1 пог. м. </h3>
                        <p><Link className={classes.activecalc} href={'http://calculation.htz.ru/'} title={"Калькулятор гидроабразивной резки"} target={'_blank'}>Калькулятор</Link> гидроабразивной резки</p>
                        <h3>Раскрой нержавеющей стали</h3>
                        <p>Сегодня раскрой металла гидроабразивом находит все более широкое применение не только в строительстве и промышленности. </p>
                        <h3>Достоинства раскроя гидроабразивом: </h3>
                        <ul>
                            <li>Раскрой листового металла</li>
                            <li>Резка металла по заданному шаблону</li>
                            <li>Резка изделий из нержавеющей стали</li>
                            <li>Резка труб различного диаметра</li>
                            <li>Получение идеально ровных краев без следов оплавления или заусениц</li>
                            <li>Высокая скорость и точность резки и раскроя материала любой степени твердости</li>
                            <li>Возможность работы с материалом практически любой толщины, начиная с 1 мм</li>
                            <li>Возможность осуществления резки под любым углом наклона и по любой конфигурации</li>
                            <li>Отсутствие термического и механического воздействия на зону реза, что исключает деформацию деталей и позволяет выполнять раскрой металлических листов с полимерным покрытием без его повреждения</li>
                            <li>Относительная дешевизна услуг по гидроабразивной резке.</li>
                        </ul>
                        <p>С использованием такой технологии выполняются масштабные проекты. Производят сувенирную и рекламную продукцию. </p>
                        <p>Возможности в этой сфере ограничены только фантазией дизайнеров! </p>
                        <h3>Области применения:</h3>
                        <ul>
                            <li>Специальное машиностроение </li>
                            <li>Авиационная промышленность (изготовление высокоточных деталей) </li>
                            <li>Судостроительная отрасль (обработка листов металла большой толщины) </li>
                            <li>Металлообрабатывающее производство (изготовление различных заготовок) </li>
                            <li>Массовое производство деталей различной сложности </li>
                            <li>Изготовление рекламных вывесок, табличек </li>
                            <li>Производство сувенирной продукции </li>
                            <li>Строительство, дизайн и ремонт (изготовление фигурных деталей и декоративных элементов) </li>
                        </ul>
                        <h3>Форматы файлов</h3>
                        <p>Принимаем форматы файлов: (dwg, dxf, ald, anc, cnc, jpg, gif, pdf, txt, world, excel.).</p>
                        <h3>Производство</h3>
                        <p>Расположение производство: 140080 ул. Карла Маркса д. 117 &#8216;Б&#8217;, офис № 503 Люберецкий р-н, пос. Красково, МО. Территория института &laquo;ВНИИСТРОМ&raquo;</p>
                        <h3>Доставка</h3>
                        <p>Доставка заказа в любой регион России. Доставка по Москве и Московской области.</p>
                    
                        <div className={classes.mainlinefooter}>
                            <span><Link href={'/contact'} title='Контакты'>
                            <Image src="/blogarrow.png" width={"15"} height={"15"} alt="img" />
                            Контакты</Link></span>
                        </div>

                </div>
        </>
    )
}
export default blockIdMateterials;
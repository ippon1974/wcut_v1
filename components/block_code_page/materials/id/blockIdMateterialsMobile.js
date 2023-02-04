import classes from '../../../../styles/materials.module.scss';
import Link from "next/link";
import Image from "next/image";

const blockIdMateterialsMobile = (props) => {

    const router = props.router;

    const handle = (event) => {
        const size = event.target.value;
        const mat = props.router.query.material;
        props.router.push(`/materials/${mat}/size/${size}`);
    }

    const { asPath, pathname } = router;
    const item = asPath.split('/');
    const pathItem = item[2];
    const pathSize = item[4];

    return (
        <>
             <div>      
                        <p className={classes.linkpricehead} title={"Весь прайс-лист на расркой материала"}><Link href={'/materials'}>Прайс лист</Link></p>
                        <h2>Гидроабразивная резка {props.mname.material} Толщина листа: {props.costsize.size} мм</h2>
                        <div className={classes.hr}></div>
                        <h3>Стоимость: {props.costsize.cost} руб. за 1 пог. м.</h3>
                        <h3>Толщина листа:&ensp;
                            <select onChange={event => handle(event)}>
                            {
                                props.costsizelist.map((csl, i)=>{
                                    if(csl.size == pathSize){
                                    return <option key={i} value={csl.size} selected>{csl.size}</option>
                                    }
                                    return <option key={i} value={csl.size}>{csl.size}</option>
                                })
                            }
                            </select>
                            &ensp;мм.</h3>
                        {/* <p><Link className={classes.activecalc} href={'http://calculation.htz.ru/'} title={"Калькулятор гидроабразивной резки"} target={'_blank'}>Калькулятор</Link> гидроабразивной резки</p> */}
                        {/* <h3>Раскрой нержавеющей стали</h3> */}
                        <p>Сегодня раскрой металла гидроабразивом находит все более широкое применение не только в строительстве и промышленности. </p>
                        <h3>Достоинства раскроя гидроабразивом:</h3>
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
                        <p>Расположение производство: 140080 ул. Карла Маркса д. 117 &#8216;Б&#8217;, офис № 503 Люберецкий р-н, пос. Красково, МО. Территория института &#171;ВНИИСТРОМ&#187;</p>
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
export default blockIdMateterialsMobile;
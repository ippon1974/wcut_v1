import classes from '../../../../styles/article_id.module.scss';
import Link from "next/link";
import Image from "next/image";

const BlockIdNews = (props) => {
    function fdt(d){
        let dt = new Date(d);
        return dt.toLocaleDateString();
    }
    return (
        <>
            <div className={classes.blockNewsMain}>
                <div className={classes.dtMainList}>
                    <p>{fdt(props.article.dt)}</p>
                    <span>Раздел: <Link href="">статьи</Link></span>
                </div>
                <div className={classes.newsListMain}>
                    <h2>{props.article.title}</h2>
                    <div dangerouslySetInnerHTML={{__html: props.article.body}} />
                    {/* <h2>История CAM систем</h2>
                    <Image src={'/news/1033.jpg'} width={'460'} height={'345'} alt={''} />
                    <h3>История CAM систем — прошлое, настоящее и будущее</h3>
                    <p>Многие области промышленности, архитектуры, дизайна постоянно развиваются и приспосабливаются к новым потребностям и изменениям в отраслевых стандартах. Благодаря автоматической системе (CAM) было создано единое сообщество производителей станков с ЧПУ.</p>
                    <h3>Автоматизация производства с помощью CAM систем</h3>
                    <p>В основном система CAM используется для написание программ с использованием G-кода для станков с ЧПУ.</p>
                    <p>Например с помощью системы CAD на компьютере можно создать электронный чертеж, а затем с помощью системы CAM преобразовать сделанный чертеж в G-код с построчным набором инструкций для станка. Сегодня практически любой станок с ЧПУ понимает G- код. Цель CAM системы ускорить производство и производственный процесс.</p>
                    <p>Самые ранние примеры технологии CAM относятся к станкам с ЧПУ, использовавшимся в начале 1950-х годов. Эти машины не были такими интуитивными или продвинутыми, как машины, к которым вы, вероятно, привыкли в наши дни, они использовали закодированные инструкции на перфорированной бумаге для управления простыми производственными инструкциями.</p>
                    <h3>Станки с ЧПУ и Массачусетский технологический институт (MIT)</h3>
                    <p>Начало CAM в значительной степени приписывается Джону Т. Парсонсу.</p>
                    <p>Работая в компании своего отца он начал искать изготовления вертолетных винтов. Стремясь ускорить производственный процесс Парсонс начал рассматривать идею использования перфокарт для выполнения инженерных расчетов. Работая с Фрэнком Суленом, Парсонс разработал перфокарты, которые можно было запрограммировать для обеспечения автоматизированной обработки. </p> */}

                </div>
            </div>  
        </>
    )
}
export default BlockIdNews;
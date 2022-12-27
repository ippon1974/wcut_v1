import classes from '../../styles/article.module.scss';
import Link from "next/link";
import Image from "next/image";

const BlockNewsMobile = () => {
    return (
        <>
            <h2>Новости</h2>
            <div className={classes.hr}></div>
            <div className={classes.blockNewsMain}>
                <div className={classes.newsListMain}>
                    <p>05 March 2020</p>
                    <span>Раздел: <Link href={'#'}>статьи</Link></span>
                    <h2><Link href="#">Первая новоить из базы данных приходит сюда. История CAM систем</Link></h2>
                    <p className={classes.ctxNews}>История CAM систем — прошлое, настоящее и будущее</p>
                </div>
            </div>

            <div className={classes.blockNewsMain}>
                <div className={classes.newsListMain}>
                    <p>05 March 2020</p>
                    <span>Раздел: <Link href={'#'}>статьи</Link></span>
                    <h2><Link href="#">Первая новоить из базы данных приходит сюда. История CAM систем</Link></h2>
                    <p className={classes.ctxNews}>История CAM систем — прошлое, настоящее и будущее</p>
                </div>
            </div>

            <div className={classes.blockNewsMain}>
                <div className={classes.newsListMain}>
                    <p>05 March 2020</p>
                    <span>Раздел: <Link href={'#'}>статьи</Link></span>
                    <h2><Link href="#">Первая новоить из базы данных приходит сюда. История CAM систем</Link></h2>
                    <p className={classes.ctxNews}>История CAM систем — прошлое, настоящее и будущее</p>
                </div>
            </div>

            <div className={classes.blockNewsMain}>
                <div className={classes.newsListMain}>
                    <p>05 March 2020</p>
                    <span>Раздел: <Link href={'#'}>статьи</Link></span>
                    <h2><Link href="#">Первая новоить из базы данных приходит сюда. История CAM систем</Link></h2>
                    <p className={classes.ctxNews}>История CAM систем — прошлое, настоящее и будущее</p>
                </div>
            </div>

        </>
    )
}
export default BlockNewsMobile;
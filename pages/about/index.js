import Layout from "../../components/Layout";
import classes from '../../styles/about.module.scss';
import Link from "next/link";

export default function About() {
    return(
        <Layout title={'О компании'}>

            <div className={classes.wrapper}>
                <div className={`${classes.item} ${classes.header}`}>
                    <div className={classes.wrapperLogo}>
                        <div className={`${classes.itemLogo} ${classes.logo}`}><Link title='Сивек Water Jet' href={'/'}><img src="/logo.jpg" alt="Сивек Water Jet"/></Link></div>
                        <div className={`${classes.itemLogo} ${classes.texthead}`}>
                            {/*<h2>Гидроабразивная резка в Москве</h2>*/}
                            {/*<h3>Металл, стекло, камень, агломерат, полимеры, пластик, керамика.</h3>*/}
                            {/*<p>140080 ул. Карла Маркса д. 117'Б', офис № 503 Люберецкий р-н, пос. Красково, МО. Территория института «ВНИИСТРОМ»</p>*/}
                        </div>
                    </div>


                </div>
                <div className={`${classes.item} ${classes.nav}`}>

                    <ul className={classes.menunav}>
                        <li><a href="">Главная</a></li>
                        <li><a href="">Услуги</a></li>
                        <li><a href="">Работы</a></li>
                        <li><a href="">Станки</a></li>
                        <li><a href="">Цены</a></li>
                        <li><a href="">Технология</a></li>
                        <li><a href="">Новости</a></li>
                        <li><a href="">О компании</a></li>
                        <li><a href="">Контакты</a></li>
                    </ul>

                </div>
                <div className={`${classes.item} ${classes.asideleft}`}>Aside</div>
                <div className={`${classes.item} ${classes.maincontext}`}>Main</div>
                <div className={`${classes.item} ${classes.asideright}`}>Aside</div>
                <div className={`${classes.item} ${classes.footer}`}>Footer</div>
            </div>

        </Layout>
    );
}
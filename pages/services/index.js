import Layout from "../../components/Layout";
import classes from '../../styles/service.module.scss';
import Link from "next/link";

export default function Services() {
    return(
       <Layout title={'Услуги'}>
           <div className={classes.wrapper}>
               <div className={`${classes.box} ${classes.a}`}>
                   <div className={classes.wrapHeader}>
                       <div className={`${classes.headpage} ${classes.logo}`}><Link title='Сивек Water Jet' href={'/'}><img src="/logo.jpg" alt="Сивек Water Jet"/></Link></div>
                       <div className={`${classes.headpage} ${classes.headdesc}`}>
                           <h2>Гидроабразивная резка в Москве</h2>
                           <h3>Металл, стекло, камень, агломерат, полимеры, пластик, керамика.</h3>
                           <p>140080 ул. Карла Маркса д. 117'Б', офис № 503 Люберецкий р-н, пос. Красково, МО. Территория института «ВНИИСТРОМ»</p>
                       </div>
                   </div>
               </div>
               <div className={`${classes.box} ${classes.b}`}>
                   <ul className={classes.menunav}>
                       <li>Главная</li>
                       <li>Услуги</li>
                       <li>Работы</li>
                       <li>Станки</li>
                       <li>Цены</li>
                       <li>Технология</li>
                       <li>Новости</li>
                       <li>О компании</li>
                       <li>Контакты</li>
                   </ul>
               </div>
               <div className={`${classes.box} ${classes.nav}`}>c</div>
               <div className={`${classes.box} ${classes.d}`}>d</div>
               <div className={`${classes.box} ${classes.e}`}>e</div>
               <div className={`${classes.box} ${classes.f}`}>f</div>
               <div className={`${classes.box} ${classes.g}`}>g</div>
               <div className={`${classes.box} ${classes.h}`}>h</div>
               <div className={`${classes.box} ${classes.i}`}>i</div>
          </div>


       </Layout>
    );
}
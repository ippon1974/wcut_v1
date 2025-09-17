import classes from './footer.module.scss';
import {Helmet} from 'react-helmet';

const Footer = () => {

    let d = new Date();
    let year = d.getFullYear();
    
    return (
        <>  
            
            <div className={`${classes.maincontext} ${classes.footer}`}>
                <div>
                    <p>121357, г.Москва, ул.Верейская,д.29 С 82 </p>
                </div>
            </div>
            <div className={classes.footerline}>&copy; {year} &laquo;Сивек Ватер Джет&raquo;</div>
        </>
    )
}

export default Footer;
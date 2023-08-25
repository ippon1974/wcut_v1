import classes from './footer.module.scss';
import {Helmet} from 'react-helmet';

const Footer = () => {

    let d = new Date();
    let year = d.getFullYear();
    
    return (
        <>  
            
            <div className={`${classes.maincontext} ${classes.footer}`}>
                <div>
                    <p>Посёлок ВУГИ, 1с4, Люберцы, Московская область, 140004. Территория института &laquo;ННЦ ГП - ИГД им. А.А. Скочинского&raquo;</p>
                </div>
            </div>
            <div className={classes.footerline}>&copy; {year} &laquo;Сивек Water Jet&raquo;</div>
        </>
    )
}

export default Footer;
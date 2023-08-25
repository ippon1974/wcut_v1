import classes from './footer_mobile.module.scss';

const MobileFooter = () => {

    let d = new Date();
    let year = d.getFullYear();
    

    return (
        <>
           <div className={`${classes.footerMobile}`}>
                   <div>
                        <p>Посёлок ВУГИ, 1с4, Люберцы, Московская область, 140004. Территория института &laquo;ННЦ ГП - ИГД им. А.А. Скочинского&raquo;</p>
                   </div>
            </div>
            <div className={classes.footerlineMobile}><div><span>&copy; {year} &laquo;Сивек Water Jet&raquo;</span></div></div>
        </>
    )
}

export default MobileFooter;
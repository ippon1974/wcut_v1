import classes from './footer_mobile.module.scss';

const MobileFooter = () => {

    let d = new Date();
    let year = d.getFullYear();
    

    return (
        <>
           <div className={`${classes.footerMobile}`}>
                   <div>
                        <p>121357, г.Москва, ул.Верейская,д.29 С 82</p>
                   </div>
            </div>
            <div className={classes.footerlineMobile}><div><span>&copy; {year} &laquo;Сивек Ватер Джет&raquo;</span></div></div>
        </>
    )
}

export default MobileFooter;
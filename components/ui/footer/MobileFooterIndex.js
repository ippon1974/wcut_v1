import classes from './footer_mobile_Index.module.scss';

const MobileFooterIndex = () => {

    let d = new Date();
    let year = d.getFullYear();
    

    return (
        <>
           <div className={`${classes.footerMobile}`}>
                   <div>
                        <p>140080 ул. Карла Маркса д. 117 &lsquo;Б&rsquo;, офис № 503 Люберецкий р-н, пос. Красково, МО. Территория института &laquo;ВНИИСТРОМ&raquo;</p>
                   </div>
            </div>
            <div className={classes.footerlineMobile}><div><span>&copy; {year} &laquo;Сивек Water Jet&raquo;</span></div></div>
        </>
    )
}

export default MobileFooterIndex;
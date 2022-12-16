import classes from '../../../components/ui/footer/footermobile.module.scss';

const MobileFooter = () => {

    let d = new Date();
    let year = d.getFullYear();
    

    return (
        <>
           <div className={`${classes.footerMobile}`}>
                   <div>
                        <p>140080 ул. Карла Маркса д. 117 &lsquo;Б&rsquo;, офис № 503 Люберецкий р-н, пос. Красково, МО. Территория института &laquo;ВНИИСТРОМ&raquo;</p>
                   </div>
            </div>
            <div className={classes.footerlineMobile}>&copy; {year} &laquo;Сивек Water Jet&raquo;</div>
        </>
    )
}

export default MobileFooter;
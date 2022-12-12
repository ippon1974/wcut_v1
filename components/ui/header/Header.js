import classes from '../../../components/ui/header/header.module.scss';
import Link from "next/link";
import { useRouter } from 'next/router';

const Header = () => {

    const { asPath, pathname } = useRouter();
    const logoLink = '/';
    
    return (
        <>
            <div className={`${classes.wrapperLogo}`}>
                        <div className={`${classes.itemLogo} ${classes.logo}`}>

                        {asPath == logoLink ? (
                                    <picture>
                                        <img src="/logo.jpg" alt="Сивек Water Jet" />
                                    </picture>
                            ) : (
                                <Link title='Сивек Water Jet' href={'/'}>
                                    <picture>
                                        <img src="/logo.jpg" alt="Сивек Water Jet" />
                                    </picture>
                                </Link>
                            )}

                        </div>
                        <div className={`${classes.itemLogo} ${classes.texthead}`}>
                            <div>
                                <h2>Гидроабразивная резка в Москве</h2>
                                <h3>Металл, стекло, камень, агломерат, полимеры, пластик, керамика.</h3>
                                <p>140080 ул. Карла Маркса д. 117 &lsquo;Б&rsquo;, офис № 503 Люберецкий р-н, пос. Красково, МО. Территория института &laquo;ВНИИСТРОМ&raquo;</p>
                            </div>
                        </div>
                    </div>
        </>
    )
}

export default Header;
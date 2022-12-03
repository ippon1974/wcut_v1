import Link from "next/link";
import { useRouter } from 'next/router';
import Image from 'next/image';
import classes from '../styles/Header.module.scss';

const Header = () => {

    const {asPath, pathname} = useRouter();

    return(
        <>
                7777
            {/* <div className={`${classes.wrapperLogo}`}>
                        <div className={`${classes.itemMy} ${classes.logo}`}>
                            <Link title='Сивек Water Jet' href={'/'}>
                                <picture>
                                    <img src="/logo.jpg" alt="Сивек Water Jet 5555" />
                                </picture>
                            </Link>
                        </div>
                        <div className={`${classes.itemMy} ${classes.texthead}`}>
                            <div>
                                <h2>Гидроабразивная резка в Москве</h2>
                                <h3>Металл, стекло, камень, агломерат, полимеры, пластик, керамика.</h3>
                                <p>140080 ул. Карла Маркса д. 117 &lsquo;Б&rsquo;, офис № 503 Люберецкий р-н, пос. Красково, МО. Территория института &laquo;ВНИИСТРОМ&raquo;</p>
                            </div>
                        </div>
                    </div> */}
        
        </>
    )
};

export default Header;
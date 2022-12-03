import Link from "next/link";
import { useRouter } from 'next/router';
import Image from 'next/image';

const Header = () => {

    const {asPath, pathname} = useRouter();



     const itemHeader = {
        'margin': 0,
        'grid-area': 'head'
     }
     const wrapperLogo = {
        'display': 'grid',
        'grid-template-areas':
                "logo texthead",
        'grid-template-columns': '224px' + '1fr',
        'grid-template-rows': 6.9375 + 'em'     
    }

     const itemLogoLogo = {
        'margin': 0,
        'grid-area': 'logo',
        'margin': '20px 0 0 37px'
     }
     const itemLogoLogoTextHead = {}

    

    return(
        <>

        <div style={itemHeader}>
            <div style={wrapperLogo}>
                <div style={itemLogoLogo}>
                    <Link title='Сивек Water Jet' href={'/'}>
                        <picture>
                            <img src="/logo.jpg" alt="Сивек Water Jet" />
                        </picture>
                    </Link>
                </div>
                <div style={itemLogoLogoTextHead}>
                    <div>
                        <h2>Гидроабразивная резка в Москве</h2>
                        <h3>Металл, стекло, камень, агломерат, полимеры, пластик, керамика.</h3>
                        <p>140080 ул. Карла Маркса д. 117 &lsquo;Б&rsquo;, офис № 503 Люберецкий р-н, пос. Красково, МО. Территория института &laquo;ВНИИСТРОМ&raquo;</p>
                    </div>
                </div>
            </div>

        </div>

        
        {/* <div style={item}>
            <div className={'wrapperLogo'}>
                <div className={`itemLogo logo`}>
                    <Link title='Сивек Water Jet' href={'/'}>
                        <picture>
                            <img src="/logo.jpg" alt="Сивек Water Jet" />
                        </picture>
                    </Link>
                </div>
                <div className={`itemLogo texthead`}>
                    <div>
                        <h2>Гидроабразивная резка в Москве 500</h2>
                        <h3>Металл, стекло, камень, агломерат, полимеры, пластик, керамика.</h3>
                        <p>140080 ул. Карла Маркса д. 117 &lsquo;Б&rsquo;, офис № 503 Люберецкий р-н, пос. Красково, МО. Территория института &laquo;ВНИИСТРОМ&raquo;</p>
                    </div>
                </div>
            </div>

        </div> */}

        </>
    )
};

export default Header;
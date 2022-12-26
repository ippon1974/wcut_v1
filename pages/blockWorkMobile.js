import classes from '../styles/index.module.scss';
import Link from "next/link";
import Image from "next/image";

const BlockWorkMobile = () => {
    
       


    return (
        <>
             <div className={`${classes.worksList}`}>

                <Link href={'#'}>    
                <div>
                    <Image className={classes.responseImg} src={'/works/2_1.jpg'} width={'303'} height={'227'} alt={''}></Image> 
                </div>
                </Link>  
                <div className={classes.descWork}>
                    <p><Link href={'#'} title={'Адресная табличка. Охуенная рекомендую'}>Адресная табличка. Охуенная рекомендую</Link></p>
                </div>
                
                <Link href={'#'}>    
                <div>
                    <Image className={classes.responseImg} src={'/works/12_1.jpg'} width={'303'} height={'227'} alt={''}></Image>
                </div>
                </Link>
                <div className={classes.descWork}>
                    <p><Link href={'#'} title={'Адресная табличка. Охуенная рекомендую'}>Адресная табличка. Охуенная рекомендую 5 454555 454 5465465 4564654564 654654654</Link></p>
                </div>
            
            </div>

            {/* <div className={`${classes.worksListDesc}`}>
                <div className={`${classes.one}`}>
                <h2><Link href={'#'} title={'Адресная табличка. Охуенная рекомендую.'}>Адресная табличка. Охуенная рекомендую 22.</Link></h2>
                    <p>0555 Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus at accusantium impedit magni, nam amet doloremque quos numquam magnam autem vel quaerat cumque. Consequatur, quidem.</p>
                </div>
                <div className={`${classes.two}`}>
                    <h2><Link href={'#'} title={'Очень крутая вентиляционная решетка. Покупай пока дешево!'}>Очень крутая вентиляционная решетка. Покупай пока дешево!</Link></h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus at accusantium impedit magni, nam amet doloremque quos numquam magnam autem vel quaerat cumque. Consequatur, quidem.</p>
                </div>
            </div> */}
            
        </>
    )
}
export default BlockWorkMobile;
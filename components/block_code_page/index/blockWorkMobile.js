import classes from '../../../styles/index.module.scss';
import Link from "next/link";
import Image from "next/image";

const BlockWorkMobile = () => {

    return (
        <>
             <div className={`${classes.worksList}`}>

                <Link href={'/works/id/one'}>    
                <div>
                    <Image className={classes.responseImg} src={'/works/2_1.jpg'} width={'303'} height={'227'} alt={''}></Image> 
                </div>
                </Link>  
                <div className={classes.descWork}>
                    <p><Link href={'/works/id/one'} title={'Адресная табличка. Охуенная рекомендую'}>Адресная табличка. Охуенная рекомендую</Link></p>
                </div>
                
                <Link href={'/works/id/one'}>    
                <div>
                    <Image className={classes.responseImg} src={'/works/12_1.jpg'} width={'303'} height={'227'} alt={''}></Image>
                </div>
                </Link>
                <div className={classes.descWork}>
                    <p><Link href={'/works/id/one'} title={'Адресная табличка. Охуенная рекомендую'}>Адресная табличка. Охуенная рекомендую 5 454555 454 5465465 4564654564 654654654</Link></p>
                </div>
            
            </div>
        </>
    )
}
export default BlockWorkMobile;
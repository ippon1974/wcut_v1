import classes from '../../../styles/works.module.scss';
import Link from "next/link";
import Image from "next/image";

const BlockWorkMobile = () => {


    return (
        <>
            <div className={`${classes.newListWork}`}>
                        <h2>Работы. Технология гидроабразивной резки.</h2>

                            <div className={classes.hr}></div>

                        <Link href={'#'}>    
                        <div>
                            <Image className={classes.responseImg} src={'/works/2_1.jpg'} width={'303'} height={'227'} alt={''}></Image>
                        </div>
                        </Link>
                        
                        <div className={classes.descWork}>
                            <Link href={'#'} title={'Адресная табличка. Охуенная рекомендую'}>Адресная табличка. Охуенная рекомендую</Link>
                        </div>

                        <Link href={'#'}>    
                        <div>
                             <Image className={classes.responseImg} src={'/works/12_1.jpg'} width={'303'} height={'227'} alt={''}></Image>
                        </div>
                        </Link>
                        <div className={classes.descWork}>
                            <Link href={'#'} title={'Адресная табличка. Охуенная рекомендую'}>Адресная табличка. Охуенная рекомендую. Проверка длины текста описания работы </Link>
                        </div>
                        
                        <Link href={'#'}>    
                        <div>
                            <Image className={classes.responseImg} src={'/works/3_1.jpg'} width={'303'} height={'227'} alt={''}></Image>
                        </div>
                        </Link>
                        <div className={classes.descWork}>
                            <Link href={'#'} title={'Очень крутая вентиляционная решетка. Покупай пока дешево!'}>Очень крутая вентиляционная решетка. Покупай пока дешево!</Link>
                        </div>

                        <Link href={'#'}>    
                        <div>
                            <Image className={classes.responseImg} src={'/works/1013_1.jpg'} width={'303'} height={'227'} alt={''}></Image>
                        </div>
                        </Link>
                        <div className={classes.descWork}>
                            <Link href={'#'} title={'Очень крутая вентиляционная решетка. Покупай пока дешево!'}>Очень крутая вентиляционная решетка. Покупай пока дешево!</Link>
                        </div>
                    </div>
                   
        </>
    )         
}
export default BlockWorkMobile;
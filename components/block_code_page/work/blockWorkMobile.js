import classes from '../../../styles/works.module.scss';
import Link from "next/link";
import Image from "next/image";

const BlockWorkMobile = (props) => {

    return (
        <>
            <div className={`${classes.newListWork}`}>
                        <h2>Работы. Технология гидроабразивной резки.</h2>

                            <div className={classes.hr}></div>

                            {props.works.map(work => (
                                <div key={work.id}>  
                                <Link href={`/works/[id]`} as={`/works/${work.id}`}> 
                                <div>
                                    <Image className={classes.responseImg} src={`/works/small/${work.img_1}.jpg`} width={'303'} height={'227'} alt={''}></Image>
                                </div>
                                </Link>
                                <div className={classes.descWork}>
                                <Link href={`/works/[id]`} as={`/works/${work.id}`} title={work.title}>{work.title}</Link>
                                </div>
                                
                                </div>
                                 
                            ))}     


                        {/* <Link href={'/works/id/one'}>    
                        <div>
                            <Image className={classes.responseImg} src={'/works/2_1.jpg'} width={'303'} height={'227'} alt={''}></Image>
                        </div>
                        </Link>
                        
                        <div className={classes.descWork}>
                            <Link href={'/works/id/one'} title={'Адресная табличка. Охуенная рекомендую'}>Адресная табличка. Охуенная рекомендую</Link>
                        </div>

                        <Link href={'/works/id/one'}>    
                        <div>
                             <Image className={classes.responseImg} src={'/works/12_1.jpg'} width={'303'} height={'227'} alt={''}></Image>
                        </div>
                        </Link>
                        <div className={classes.descWork}>
                            <Link href={'/works/id/one'} title={'Адресная табличка. Охуенная рекомендую'}>Адресная табличка. Охуенная рекомендую. Проверка длины текста описания работы </Link>
                        </div>
                        
                        <Link href={'/works/id/one'}>    
                        <div>
                            <Image className={classes.responseImg} src={'/works/3_1.jpg'} width={'303'} height={'227'} alt={''}></Image>
                        </div>
                        </Link>
                        <div className={classes.descWork}>
                            <Link href={'/works/id/one'} title={'Очень крутая вентиляционная решетка. Покупай пока дешево!'}>Очень крутая вентиляционная решетка. Покупай пока дешево!</Link>
                        </div>

                        <Link href={'/works/id/one'}>    
                        <div>
                            <Image className={classes.responseImg} src={'/works/1013_1.jpg'} width={'303'} height={'227'} alt={''}></Image>
                        </div>
                        </Link>
                        <div className={classes.descWork}>
                            <Link href={'/works/id/one'} title={'Очень крутая вентиляционная решетка. Покупай пока дешево!'}>Очень крутая вентиляционная решетка. Покупай пока дешево!</Link>
                        </div> */}
                    </div>
                   
        </>
    )         
}
export default BlockWorkMobile;
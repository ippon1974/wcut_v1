import classes from '../../../styles/index.module.scss';
import Link from "next/link";
import Image from "next/image";

const BlockWork = () => {
    
        const workPort = {
        height: '0',
        top:'-228px',
        margin:'0',
        padding: '0',
        position:'relative'
    } 

    const imgWork = {
        top: 0,
        left: 0,
        border: 0,
        display: 'block'
    }


    return (
        <>
             <div className={`${classes.worksList}`}>
                
                <Link href={'#'}>    
                <div className={`${classes.viewportcontainerWork}`}>
                    <div className={'viewportWork'} style={workPort}>
                        <Image style={imgWork} src={'/works/1013_1.jpg'} width={'303'} height={'227'} alt={''}></Image>
                        <Image style={imgWork} src={'/works/1013_2.jpg'} width={'303'} height={'227'} alt={''}></Image>
                    </div>
                </div>
                </Link>  
                
                <Link href={'#'}>    
                <div className={classes.viewportcontainerWork}>
                    <div className={'viewportWork'} style={workPort}>
                        <Image style={imgWork} src={'/works/8_1.jpg'} width={'303'} height={'227'} alt={''}></Image>
                        <Image style={imgWork} src={'/works/8_2.jpg'} width={'303'} height={'227'} alt={''}></Image>
                    </div>
                </div>
                </Link>
            
            </div>

            <div className={`${classes.worksListDesc}`}>
                <div className={`${classes.one}`}>
                <h2><Link href={'#'} title={'Адресная табличка. Охуенная рекомендую.'}>Адресная табличка. Охуенная рекомендую.</Link></h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus at accusantium impedit magni, nam amet doloremque quos numquam magnam autem vel quaerat cumque. Consequatur, quidem.</p>
                </div>
                <div className={`${classes.two}`}>
                    <h2><Link href={'#'} title={'Очень крутая вентиляционная решетка. Покупай пока дешево!'}>Очень крутая вентиляционная решетка. Покупай пока дешево!</Link></h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus at accusantium impedit magni, nam amet doloremque quos numquam magnam autem vel quaerat cumque. Consequatur, quidem.</p>
                </div>
            </div>
        </>
    )
}
export default BlockWork;
import classes from '../../../styles/works.module.scss';
import Link from "next/link";
import Image from "next/image";


const blockWork = () => {

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
            <div className={`${classes.newListWork}`}>
                        <Link href={'/works/id/one'}>  
                        <div className={`${classes.viewportcontainerWork}`}>
                            <div className={'viewportWork'} style={workPort}>
                                <Image style={imgWork} src={'/works/1013_1.jpg'} width={'303'} height={'227'} alt={''}></Image>
                                <Image style={imgWork} src={'/works/1013_2.jpg'} width={'303'} height={'227'} alt={''}></Image>
                            </div>
                        </div>
                        </Link>

                        <Link href={'/works/id/one'}>    
                        <div className={`${classes.viewportcontainerWork}`}>
                            <div className={'viewportWork'} style={workPort}>
                                <Image style={imgWork} src={'/works/8_1.jpg'} width={'303'} height={'227'} alt={''}></Image>
                                <Image style={imgWork} src={'/works/8_2.jpg'} width={'303'} height={'227'} alt={''}></Image>
                            </div>
                        </div>
                        </Link>
                        
                        <Link href={'/works/id/one'}>    
                        <div className={`${classes.viewportcontainerWork}`}>
                            <div className={'viewportWork'} style={workPort}>
                                <Image style={imgWork} src={'/works/1013_1.jpg'} width={'303'} height={'227'} alt={''}></Image>
                                <Image style={imgWork} src={'/works/1013_2.jpg'} width={'303'} height={'227'} alt={''}></Image>
                            </div>
                        </div>
                        </Link>
                    </div>

                    <div className={`${classes.worksListDesc}`}>
                        <div className={`${classes.one}`}>
                        <h2><Link href={'/works/id/one'}>Адресная табличка. Охуенная рекомендую</Link></h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus at accusantium impedit magni, nam amet doloremque quos numquam magnam autem vel quaerat cumque. Consequatur, quidem.</p>
                        </div>
                        <div className={`${classes.two}`}>
                            <h2><Link href={'/works/id/one'}>Очень крутая вентиляционная решетка. Покупай пока дешево!</Link></h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus at accusantium impedit magni, nam amet doloremque quos numquam magnam autem vel quaerat cumque. Consequatur, quidem.</p>
                        </div>
                        <div className={`${classes.two}`}>
                            <h2><Link href={'/works/id/one'}>Очень крутая вентиляционная решетка. Покупай пока дешево!</Link></h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus at accusantium impedit magni, nam amet doloremque quos numquam magnam autem vel quaerat cumque. Consequatur, quidem.</p>
                        </div>
                    </div>

                    <div className={`${classes.worksListArrowLink}`}>
                            <div className={`${classes.block_all}`}>
                                <div className={`${classes.info_block}`}>
                                    <div className={`${classes.info_block_arrow}`}><Link href={'#'}><Image src={'/morearrow.png'} width={'33'} height={'33'} alt=''></Image></Link></div>
                                    <div className={`${classes.info_block_link}`}><Link href={'#'}>Подробнее</Link></div>
                                </div>
                            </div>
                            <div className={`${classes.block_all}`}>
                                <div className={`${classes.info_block}`}>
                                    <div className={`${classes.info_block_arrow}`}><Link href={'#'}><Image src={'/morearrow.png'} width={'33'} height={'33'} alt=''></Image></Link></div>
                                    <div className={`${classes.info_block_link}`}><Link href={'#'}>Подробнее</Link></div>
                                </div>
                            </div>
                            <div className={`${classes.block_all}`}>
                                <div className={`${classes.info_block}`}>
                                    <div className={`${classes.info_block_arrow}`}><Link href={'#'}><Image src={'/morearrow.png'} width={'33'} height={'33'} alt=''></Image></Link></div>
                                    <div className={`${classes.info_block_link}`}><Link href={'#'}>Подробнее</Link></div>
                                </div>
                            </div>
                    </div>   
        </>
    )                
}
export default blockWork;
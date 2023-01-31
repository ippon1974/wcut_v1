import classes from '../../../styles/works.module.scss';
import Link from "next/link";
import Image from "next/image";


const blockWork = (props) => {

    const workPort = {
        height: '0',
        top:'-228px',
        margin:'0',
        padding: '0',
        position:'relative'
    } 
    
    return (
        <>
            <div className={classes.allContainerWork}>        
                {props.works.map((work) => ( 
                     <div key={work.id} className={`${classes.itemWorks}`}>
                         <Link href={`/works/[id]`} as={`/works/${work.id}`} title={work.title}> 
                        <div className={`${classes.viewportcontainerWork}`}>
                            <div className={'viewportWork'} style={workPort}>
                                <Image src={`/works/front/${work.img_1}.jpg`} width={'303'} height={'227'} alt={''}></Image>
                                <Image src={`/works/front/${work.img_2}.jpg`} width={'303'} height={'227'} alt={''}></Image>
                            </div>
                        </div>
                        </Link> 
                        <div className={classes.allContainerWorkDesc}>
                            <h2><Link href={`/works/[id]`} as={`/works/${work.id}`} title={work.title}>{work.title}</Link></h2>
                            <p>{work.titlelong}</p>
                        </div>
                        <div className={classes.allContainerWorkArrowLink}>
                            <div className={classes.imgLink}><Link href={`/works/[id]`} as={`/works/${work.id}`} title={'Описание работы'}><Image src={'/morearrow.png'} width={'33'} height={'33'} alt=''></Image></Link></div>
                            <div className={classes.textLink}><Link href={`/works/[id]`} as={`/works/${work.id}`} title={'Описание работы'}>Подробнее</Link></div>
                        </div>
                     </div>
                ))}
            </div>
        </>
    )                
}
export default blockWork;
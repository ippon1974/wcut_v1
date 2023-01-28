import classes from '../../../styles/index.module.scss';
import Link from "next/link";
import Image from "next/image";

const BlockWork = (props) => {
    
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
                
                {props.works.map((w,i)=>(
                <Link key={i} href={`/works/${w.id}`}>    
                    <div className={`${classes.viewportcontainerWork}`}>
                        <div className={'viewportWork'} style={workPort}>
                            <Image style={imgWork} src={`/works/small/${w.img_1}.jpg`} width={'303'} height={'227'} alt={''}></Image>
                            <Image style={imgWork} src={`/works/small/${w.img_2}.jpg`} width={'303'} height={'227'} alt={''}></Image>
                        </div>
                    </div>
                </Link> 
                ))}
            </div>

            <div className={`${classes.worksListDesc}`}>
                {props.works.map((w,i)=>(
                    <div key={i} className={`${classes.one}`}>
                    <h2><Link href={`/works/${w.id}`} title={w.title}>{w.title}</Link></h2>
                        <p>{w.titlelong}</p>
                    </div>
                ))}
            </div>
        </>
    )
}
export default BlockWork;
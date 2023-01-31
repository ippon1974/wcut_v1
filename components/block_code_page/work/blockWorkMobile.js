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
                                    <Image className={classes.responseImg} src={`/works/front/${work.img_1}.jpg`} width={'303'} height={'227'} alt={''}></Image>
                                </div>
                                </Link>
                                <div className={classes.descWork}>
                                <Link href={`/works/[id]`} as={`/works/${work.id}`} title={work.title}>{work.title}</Link>
                                </div>
                                
                                </div> 
                            ))} 
                    </div>
                   
        </>
    )         
}
export default BlockWorkMobile;
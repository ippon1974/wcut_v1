import {useState, useEffect} from 'react';
import {useRouter} from "next/router";
import classes from '../../../../styles/works_id.module.scss';
import Link from "next/link";
import Image from "next/image";

const BlockIdWork = (props) => {

    const { asPath, pathname } = useRouter();
    const idworkold = asPath.split('/');
    const idworknew = idworkold[2];

    const[w, setW] = useState(props.work);
    useEffect(()=>{
        async function load() {
            const res = await fetch(`http://localhost:7000/works?id=${idworknew}`);
            const d = await res.json();
            setW(d);
        }
            load();
    },[idworknew])// eslint-disable-line react-hooks/exhaustive-deps

    
    return (
        <>
            <div className={classes.bannerHeadWork}>
                        <Image src={`/works/filter/${props.work.img_1}.jpg`} width={'935'} height={'172'} alt={''} />
            </div>
                    <div className={classes.logos_nameWork}>
                        <div className={classes.logos_works}>
                            <Image src={'/cs_client_logos.svg'} width={'91'} height={'91'} alt={''} />
                        </div>
                        <div className={classes.nameWork}>
                            <h1>{w.title}</h1>
                            <p>{w.titlelong}</p>
                        </div>
                    </div>

                    <div className={classes.containerPreNextPage}>
                        <div className={classes.allwork}>
                            <Image src={'/prev.gif'} width={23} height={23} alt={''} />
                            <span><Link href={'/works'} title={"Все работы"}>Работы</Link></span>
                        </div>
                        <div></div>
                        {w.id === props.minId  ?
                             <div className={classes.pre}>
                             {/* <Image src={'/prev.gif'} width={23} height={23} alt={''} />
                             <span><Link href={"/works/1"} title={'Предыдущая'}>Предыдущая</Link></span> */}
                             </div>
                        : 
                            <div className={classes.pre}>
                            <Link href={`/works/${props.prevPage}`}><Image src={'/prev.gif'} width={23} height={23} alt={''} /></Link>
                            <span><Link href={`/works/${props.prevPage}`} title={'Предыдущая'}>Предыдущая</Link></span>
                            </div>
                        }
                        
                        {w.id === props.maxId  ?  
                        <div className={classes.next}>
                           {/* <span><Link href={`/works/${props.nextPage}`} title={"Следующая"}>Следующая</Link></span>
                           <Image src={'/next.gif'} width={23} height={23} alt={''} /> */}
                        </div>
                        :
                        <div className={classes.next}>
                           <span><Link href={`/works/${props.nextPage}`} title={"Следующая"}>Следующая</Link></span>
                           <Link href={`/works/${props.nextPage}`}><Image src={'/next.gif'} width={23} height={23} alt={''} /></Link>
                        </div>
                        }

                        </div>

                    <div className={classes.contanerPageWork}>
                        <div className={classes.rightDesc}>
                            <span>Материал</span>
                            <p>{props.work.materialname}</p>
                        </div>
                        <div>
                            <h3>Процесс {w.id == 0 ? "yes" : "no"}</h3>
                            <div dangerouslySetInnerHTML={{__html: props.work.body}} />

                        </div>
                        <div className={classes.panelImg}>
                            {w.img_1 ? <Image src={`/works/big/${w.img_1}.jpg`} width={"460"} height={"345"} alt={w.title} /> : ""}
                            {w.img_2 ? <Image src={`/works/big/${w.img_2}.jpg`} width={"460"} height={"345"} alt={w.title} /> : ""}
                            {w.img_3 ? <Image src={`/works/big/${w.img_3}.jpg`} width={"460"} height={"345"} alt={w.title} /> : ""}
                            {w.img_4 ? <Image src={`/works/big/${w.img_4}.jpg`} width={"460"} height={"345"} alt={w.title} /> : ""}
                            {w.img_5 ? <Image src={`/works/big/${w.img_5}.jpg`} width={"460"} height={"345"} alt={w.title} /> : ""}
                        </div>
                    </div> 
        </>
    )
}
export default BlockIdWork;
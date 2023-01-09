import classes from '../../../../styles/works_id.module.scss';
import Link from "next/link";
import Image from "next/image";

const BlockIdWork = (props) => {
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
                            <h1>{props.work.title}</h1>
                            <p>{props.work.titlelong}</p>
                        </div>
                    </div>

                    <div className={classes.containerPreNextPage}>
                        <div className={classes.allwork}>
                            <Image src={'/prev.gif'} width={23} height={23} alt={''} />
                            <span><Link href={'/works'} title={"Все работы"}>Работы</Link></span>
                        </div>
                        <div></div>
                        <div className={classes.pre}>
                           <Image src={'/prev.gif'} width={23} height={23} alt={''} />
                           <span><Link href={'#'} title={'Предыдущая'}>Предыдущая</Link></span>
                        </div>
                        <div className={classes.next}>
                           <span><Link href={'#'} title={"Следующая"}>Следующая</Link></span>
                           <Image src={'/next.gif'} width={23} height={23} alt={''} />
                        </div>
                    </div>

                    <div className={classes.contanerPageWork}>
                        <div className={classes.rightDesc}>
                            <span>Материал</span>
                            <p>{props.work.materialname}</p>
                        </div>
                        <div>
                            <h3>Процесс</h3>
                            <div dangerouslySetInnerHTML={{__html: props.work.body}} />

                        </div>
                        <div className={classes.panelImg}>
                            {props.work.img_1 ? <Image src={`/works/big/${props.work.img_1}.jpg`} width={"460"} height={"345"} alt={props.work.title} /> : ""}
                            {props.work.img_2 ? <Image src={`/works/big/${props.work.img_2}.jpg`} width={"460"} height={"345"} alt={props.work.title} /> : ""}
                            {props.work.img_3 ? <Image src={`/works/big/${props.work.img_3}.jpg`} width={"460"} height={"345"} alt={props.work.title} /> : ""}
                            {props.work.img_4 ? <Image src={`/works/big/${props.work.img_4}.jpg`} width={"460"} height={"345"} alt={props.work.title} /> : ""}
                            {props.work.img_5 ? <Image src={`/works/big/${props.work.img_5}.jpg`} width={"460"} height={"345"} alt={props.work.title} /> : ""}
                        </div>
                    </div> 
        </>
    )
}
export default BlockIdWork;
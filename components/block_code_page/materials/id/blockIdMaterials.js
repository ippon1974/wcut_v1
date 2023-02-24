import classes from '../../../../styles/materials.module.scss';
import Link from "next/link";
import Image from "next/image";

const blockIdMateterials = (props) => {

    const router = props.router;

    const handle = (event) => {
        const size = event.target.value;
        const mat = props.router.query.material;
        props.router.push(`/materials/${mat}/size/${size}`);
    }

    const { asPath, pathname } = router;
    const item = asPath.split('/');
    const pathItem = item[2];
    const pathSize = item[4];

    return (
        <>
                 <div>
                        <h2>Гидроабразивная резка<p>{props.mname.material}</p>Толщина листа: {props.costsize.size} мм</h2>
                        <div className={classes.hr}></div>
                        <h3 className={classes.ndc}>Без НДС!</h3>
                        <h3>Стоимость раскроя: {props.costsize.cost} руб. за 1 пог. м.</h3>
                        <h3>Толщина листа:&ensp;
                            <select onChange={event => handle(event)}>
                            {
                                props.costsizelist.map((csl, i)=>{
                                    if(csl.size == pathSize){
                                    return <option key={i} value={csl.size} selected>{csl.size}</option>
                                    }
                                    return <option key={i} value={csl.size}>{csl.size}</option>
                                })
                            }
                            </select>
                            &ensp;мм.</h3>
                    
                        <div dangerouslySetInnerHTML={{__html: props.mname.description_body}} />     
                        
                        <div className={classes.mainlinefooter}>
                            <span><Link href={'/contact'} title='Контакты'>
                            <Image src="/blogarrow.png" width={"15"} height={"15"} alt="img" />
                            Контакты</Link></span>
                        </div>

                </div>
        </>
    )
}
export default blockIdMateterials;
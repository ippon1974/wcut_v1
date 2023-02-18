import classes from '../../../../styles/materials.module.scss';
import Link from "next/link";
import Image from "next/image";

const blockIdMateterialsMobile = (props) => {

    const router = props.router;

    const handleClick = (path) => {
        props.router.push(path)
    }

    const { asPath, pathname } = router;
    const item = asPath.split('/');
    const pathItem = item[2];
    const pathSize = item[4];

    return (
        <>
             <div>      
                        <p className={classes.linkpricehead} title={"Весь прайс-лист на расркой материала"}><Link href={'/materials'}>Прайс лист</Link></p>
                        <h2>Гидроабразивная резка {props.mname.material} <p>Толщина листа: {props.costsize.size} мм</p></h2>
                        <div className={classes.hr}></div>
                        
                        <div className={classes.id_cost_container}>

                            <div className={classes.id_cost}>
                                {props.costsize.cost} <span className={classes.rub_id}></span>
                            </div>

                            <div className={classes.id_desc_meter}>За метр погон.</div>
                            <div className={classes.id_desc_ndc}>Без НДС!</div>

                            <div className={classes.id_desc_tiles}>
                            
                            <div className={classes.id_tiles_size_container}>
                            {props.costsizelist.map((size, i)=>{
                                if(size.size == pathSize){
                                return <div className={classes.id_tiles_size} key={i}><button className={classes.btn_list_price_id_disable} onClick={() => handleClick(`/materials/${props.mname.translit}/size/${size.size}`)} title={`${props.mname.material}. Толщина: ${size.size} мм`}>{size.size}</button></div>
                                }
                                return <div className={classes.id_tiles_size} key={i}><button className={classes.btn_list_price_id} onClick={() => handleClick(`/materials/${props.mname.translit}/size/${size.size}`)} title={`${props.mname.material}. Толщина: ${size.size} мм`}>{size.size}</button></div>
                            })}
                            </div>

                            </div>
                        </div>

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
export default blockIdMateterialsMobile;
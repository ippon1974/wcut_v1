import classes from '../../../styles/materials.module.scss';
import Link from "next/link";

const BlockMateterialMobile = (props) => {

    let keyObj = Object.keys(props.outprice);
   
    return (
        <>
        <div className={classes.hr}></div>

         {props.materials.map((m, index) =>
             <div key={index} className={classes.pr_desc_cost}>
                {keyObj.map((name, i) => {
                    if(m.translit === name)
                    return <div key={i} className={classes.pr_desc}>
                            <p><Link href={`/materials/${m.translit}/size/${!props.outprice[name].size ? props.defSize(m.id):props.outprice[name].size}`} title={`${m.material}. Толщина листа: ${!props.outprice[name].size ? props.defSize(m.id):props.outprice[name].size} мм.`}>{m.material}</Link></p>
                            <span>Толщина листа: {!props.outprice[name] ? props.defSize(m.id):props.outprice[name].size} мм</span>
                           </div>
                 })}
                 
                {keyObj.map((name, i) => {
                        if(m.translit === name)
                        return <div key={i} className={classes.pr_cost}><p>{!props.outprice[name] ? props.defCost(m.id):props.outprice[name].cost} <span className={classes.rub}></span> <span>без НДС</span></p> <span>За пог. метр.</span></div>
                })}   

                <div className={classes.pr_box_tiles_size_links}>
                <div className={classes.container_tiles}>
                {   
                    props.costsize.map((c, subindex) => {
                    if(m.id === c.material_id)
                        if(c.size == props.outprice[m.translit].size){
                            return <div key={subindex}><button className={classes.btn_list_price_disable} onClick={() => props.handleClick(m.translit, m.id, c.cost, c.size)} title={`Толщина материала: ${c.size} мм`}>{c.size}</button></div>    
                        }else{
                            return <div key={subindex}><button className={classes.btn_list_price} onClick={() => props.handleClick(m.translit, m.id, c.cost, c.size)} title={`Толщина материала: ${c.size} мм`}>{c.size}</button></div>
                        }
                    })
                }
                </div>
                </div>
            
            </div>
         )}
        </>
    )
}
export default  BlockMateterialMobile; 
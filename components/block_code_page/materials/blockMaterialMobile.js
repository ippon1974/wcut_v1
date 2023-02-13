import classes from '../../../styles/materials.module.scss';
import Link from "next/link";

const BlockMateterialMobile = (props) => {

    let keyObj = Object.keys(props.outprice);
    const sayHello = ()=>{
        console.log("say");
    }
    
    return (
        <>
        <div className={classes.hr}></div>

         {props.materials.map((m, index) =>
             <div key={index} className={classes.pr_desc_cost}>
                {keyObj.map((name, i) => {
                    if(m.translit === name)
                    return <div key={i} className={classes.pr_desc}>
                            <p><Link href={`/materials/${m.translit}/size/${!props.outprice[name].size ? props.defSize(m.id):props.outprice[name].size}`} title={`${m.material}. Толщина листа: ${!props.outprice[name].size ? props.defSize(m.id):props.outprice[name].size} мм.`}>{m.material}</Link></p>
                            <span>Толщина листа: {props.defSize(m.id)} мм</span>
                           </div>
                 })}
                 
                {keyObj.map((name, i) => {
                        if(m.translit === name)
                        return <div key={i} className={classes.pr_cost}><p>{!props.outprice[name] ? props.defCost(m.id):props.outprice[name].cost} P <span>без НДС</span></p> <span>За пог. метр.</span></div>
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
                        // return <div key={subindex}><button className={classes.btn_list_price} onClick={() => props.handleClick(m.translit, m.id, c.cost, c.size)} title={`Толщина материала: ${c.size} мм`}>{c.size}</button></div>    
                    })
                }
                </div>
                </div>
            
            </div>
         )}


          {/* <div className={classes.pr_desc_cost}>
            <div className={classes.pr_desc}>
                <p><Link href={'/'}>Нержавеющая сталь</Link></p><span>Толщина листа: 5 мм</span>
            </div>
            <div className={classes.pr_cost}>
                <p>1566 P <span>без НДС</span></p><span>За пог. метр.</span>
            </div>
            <div className={classes.pr_box_tiles_size_links}>
               <div className={classes.container_tiles}>
                <div><Link href={'/'}>5</Link></div>
                <div><Link href={'/'}>10</Link>event => props.handle(event, m.translit)</div>
                <div><Link href={'/'}>15</Link></div>
                <div><Link href={'/'}>20</Link></div>
                <div><Link href={'/'}>25</Link></div>
                <div><Link href={'/'}>30</Link></div>
                <div><Link href={'/'}>35</Link></div>
                <div><Link href={'/'}>40</Link></div>
                <div><Link href={'/'}>45</Link></div>
                <div><Link href={'/'}>50</Link></div>
                <div><Link href={'/'}>55</Link></div>
                <div><Link href={'/'}>60</Link></div>
                <div><Link href={'/'}>65</Link></div>
                <div><Link href={'/'}>70</Link></div>
                <div><Link href={'/'}>75</Link></div>
               </div>  
            </div>
          </div> */}

          {/* <div className={classes.pr_desc_cost}>
            <div className={classes.pr_desc}>
                <p><Link href={'/'}>Агломерат</Link></p><span>Толщина листа: 10 мм</span>
            </div>
            <div className={classes.pr_cost}>
                <p>899 P <span>без НДС</span></p><span>За пог. метр.</span>
            </div>
            <div className={classes.pr_box_tiles_size_links}>
               <div className={classes.container_tiles}>
                <div>10</div>
                <div>20</div>
                <div>30</div>
               </div>  
            </div>
          </div> */}
         
          
          {/* <table className={classes.pricematerials}>
                        <tbody>
                            <tr>
                                <th>Материал</th>
                                <th>Толщина</th>
                                <th>Стоимость</th>
                            </tr>
                        {
                            props.materials.map((m, index) => 
                            
                            <tr key={index}>
                                
                                {keyObj.map((name, i) => {
                                    if(m.translit === name)
                                    return <td key={i}><Link href={`/materials/${m.translit}/size/${!props.outprice[name].size ? props.defSize(m.id):props.outprice[name].size}`} title={`${m.material}. Толщина листа: ${!props.outprice[name].size ? props.defSize(m.id):props.outprice[name].size} мм.`}>{m.material}</Link></td>
                                })}

                               

                                <td>
                                <select onChange={event => props.handle(event, m.translit)}>
                                     {   
                                        props.costsize.map((c, subindex) => {
                                            if(m.id === c.material_id)
                                            return <option key={subindex}>{c.size}</option>
                                        })
                                     }
                                </select>
                                <span> мм.</span>
                                </td>
                                    {keyObj.map((name, i) => {
                                        if(m.translit === name)
                                        return <td key={i}>{!props.outprice[name] ? props.defCost(m.id) : ""}  {props.outprice[name].cost} <span className={'short'}>руб. пог. м.</span></td>
                                    })}    
                                   
                                </tr>
                                )
                        }
                        </tbody>
                        </table> */}
        </>
    )
}
export default  BlockMateterialMobile; 
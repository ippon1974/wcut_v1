import classes from '../../../styles/materials.module.scss';
import Link from "next/link";

const BlockMateterialMobile = (props) => {
    
    return (
        <>
          <table className={classes.pricematerials}>
                        <tbody>
                            <tr>
                                <th>Материал</th>
                                <th>Толщина</th>
                                <th>Стоимость</th>
                            </tr>
                        {
                            props.materials.map((m, index) => 
                            <tr key={index}>
                                {m.translit === "aglomerat" ? <td><Link href={`/materials/${m.translit}/size/${!props.outprice.aglomerat.size ? props.defSize(m.id):props.outprice.aglomerat.size}`} title={`${m.material}. Толщина листа: ${!props.outprice.aglomerat.size ? props.defSize(m.id):props.outprice.aglomerat.size} мм.`}>{m.material}</Link></td> : ""}
                                <td>
                                
                                { m.translit == "aglomerat" ?   
                                <select onChange={event => props.handle(event, m.translit)}>
                                     {   
                                         props.tCoAgl.map((c, subindex) => {
                                            return <option key={subindex}>{c.size}</option>
                                         })
                                     }
                                </select> : ""
                                }
                                <span> мм.</span>
                                </td>
                                    {m.translit == "aglomerat" ? <td>{!props.outprice.aglomerat ? props.defCost(m.id) : ""}  {props.outprice.aglomerat.cost} <span className={'short'}>руб. пог. м.</span></td> : null}                          
                                </tr>
                                )
                        }
                        </tbody>
                        </table>
        </>
    )
}
export default  BlockMateterialMobile; 
import classes from '../../../styles/materials.module.scss';
import Link from "next/link";

const  BlockMaterial = (props) => {

    let keyObj = Object.keys(props.outprice);

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
                        </table>
        </>
    )

}
export default BlockMaterial;
import classes from '../../../styles/materials.module.scss';
import Link from "next/link";

const BlockMateterialMobile = (props) => {

    const CostSizelList= [
        {id:1, material_id: 1, translit: "aglomerat"},
        {id:2, material_id: 2, translit: "aluminum"},
        {id:3, material_id: 2, translit: "copper"},
        {id:4, material_id: 2, translit: "brass"},
        {id:5, material_id: 2, translit: "plexiglass"},
        {id:6, material_id: 2, translit: "glass"},
        {id:7, material_id: 2, translit: "glass_plastic"},
        {id:8, material_id: 2, translit: "marble"},
        {id:9, material_id: 2, translit: "granite"}
    ];

    const obj = props.outprice;

    var keyObj = Object.keys(props.outprice);
    keyObj.map((name, i)=>{
        console.log("vovna ", name);
    })

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
                                
                                {/* {CostSizelList.map((costList, i) => {
                                    
                                    var keyNames = Object.keys(props.outprice);
                                    //console.log(keyNames);

                                    if(costList.translit == m.translit)
                                    return <p key={i}>{costList.translit} {props.outprice.aglomerat.size}</p>                                    
                                })} */}

                                {keyObj.map((name, i) => {

                                    if(m.translit === name)
                                    return <p key={i}>{m.material} {`${!props.outprice.aglomerat.size ? props.defSize(m.id): props.outprice.name.size}`}</p>
                                })}



                               

                                {m.translit === "aglomerat" ? <td><Link href={`/materials/${m.translit}/size/${!props.outprice.aglomerat.size ? props.defSize(m.id):props.outprice.aglomerat.size}`} title={`${m.material}. Толщина листа: ${!props.outprice.aglomerat.size ? props.defSize(m.id):props.outprice.aglomerat.size} мм.`}>{m.material}</Link></td> : ""}
                                {m.translit === "aluminum" ? <td><Link href={`/materials/${m.translit}/size/${!props.outprice.aluminum.size ? props.defSize(m.id):props.outprice.aluminum.size}`} title={`${m.material}. Толщина листа: ${!props.outprice.aluminum.size ? props.defSize(m.id):props.outprice.aluminum.size} мм.`}>{m.material}</Link></td> : ""}
                                {m.translit === "steel" ? <td><Link href={`/materials/${m.translit}/size/${!props.outprice.steel.size ? props.defSize(m.id):props.outprice.steel.size}`} title={`${m.material}. Толщина листа: ${!props.outprice.steel.size ? props.defSize(m.id):props.outprice.steel.size} мм.`}>{m.material}</Link></td> : ""}
                                {m.translit === "steel_tool" ? <td><Link href={`/materials/${m.translit}/size/${!props.outprice.steel_tool.size ? props.defSize(m.id):props.outprice.steel_tool.size}`} title={`${m.material}. Толщина листа: ${!props.outprice.steel_tool.size ? props.defSize(m.id):props.outprice.steel_tool.size} мм.`}>{m.material}</Link></td> : ""}
                                {m.translit === "granite" ? <td><Link href={`/materials/${m.translit}/size/${!props.outprice.granite.size ? props.defSize(m.id):props.outprice.granite.size}`} title={`${m.material}. Толщина листа: ${!props.outprice.granite.size ? props.defSize(m.id):props.outprice.granite.size} мм.`}>{m.material}</Link></td> : ""}
                                {m.translit === "brass" ? <td><Link href={`/materials/${m.translit}/size/${!props.outprice.brass.size ? props.defSize(m.id):props.outprice.brass.size}`} title={`${m.material}. Толщина листа: ${!props.outprice.brass.size ? props.defSize(m.id):props.outprice.brass.size} мм.`}>{m.material}</Link></td> : ""}
                                {m.translit === "copper" ? <td><Link href={`/materials/${m.translit}/size/${!props.outprice.copper.size ? props.defSize(m.id):props.outprice.copper.size}`} title={`${m.material}. Толщина листа: ${!props.outprice.copper.size ? props.defSize(m.id):props.outprice.copper.size} мм.`}>{m.material}</Link></td> : ""}
                                {m.translit === "plexiglass" ? <td><Link href={`/materials/${m.translit}/size/${!props.outprice.plexiglass.size ? props.defSize(m.id):props.outprice.plexiglass.size}`} title={`${m.material}. Толщина листа: ${!props.outprice.plexiglass.size ? props.defSize(m.id):props.outprice.plexiglass.size} мм.`}>{m.material}</Link></td> : ""}
                                {m.translit === "glass" ? <td><Link href={`/materials/${m.translit}/size/${!props.outprice.glass.size ? props.defSize(m.id):props.outprice.glass.size}`} title={`${m.material}. Толщина листа: ${!props.outprice.glass.size ? props.defSize(m.id):props.outprice.glass.size} мм.`}>{m.material}</Link></td> : ""}
                                {m.translit === "glass_plastic" ? <td><Link href={`/materials/${m.translit}/size/${!props.outprice.glass_plastic.size ? props.defSize(m.id):props.outprice.glass_plastic.size}`} title={`${m.material}. Толщина листа: ${!props.outprice.glass_plastic.size ? props.defSize(m.id):props.outprice.glass_plastic.size} мм.`}>{m.material}</Link></td> : ""}
                                {m.translit === "marble" ? <td><Link href={`/materials/${m.translit}/size/${!props.outprice.marble.size ? props.defSize(m.id):props.outprice.marble.size}`} title={`${m.material}. Толщина листа: ${!props.outprice.marble.size ? props.defSize(m.id):props.outprice.marble.size} мм.`}>{m.material}</Link></td> : ""}
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

                                    {m.translit == "aglomerat" ? <td>{!props.outprice.aglomerat ? props.defCost(m.id) : ""}  {props.outprice.aglomerat.cost} <span className={'short'}>руб. пог. м.</span></td> : null} 
                                    {m.translit == "aluminum" ? <td>{!props.outprice.aluminum ? props.defCost(m.id) : ""}  {props.outprice.aluminum.cost} <span className={'short'}>руб. пог. м.</span></td> : null} 
                                    {m.translit == "steel" ? <td>{!props.outprice.steel ? props.defCost(m.id) : ""} {props.outprice.steel.cost} <span className={'short'}>руб. пог. м.</span></td> : null}
                                    {m.translit == "steel_tool" ? <td>{!props.outprice.steel_tool ? props.defCost(m.id) : ""} {props.outprice.steel_tool.cost} <span className={'short'}>руб. пог. м.</span></td> : null} 
                                    {m.translit == "granite" ? <td>{!props.outprice.granite ? props.defCost(m.id) : ""} {props.outprice.granite.cost} <span className={'short'}>руб. пог. м.</span></td> : null} 
                                    {m.translit == "brass" ? <td>{!props.outprice.brass ? props.defCost(m.id) : ""} {props.outprice.brass.cost} <span className={'short'}>руб. пог. м.</span></td> : null}
                                    {m.translit == "copper" ? <td>{!props.outprice.copper ? props.defCost(m.id) : ""} {props.outprice.copper.cost} <span className={'short'}>руб. пог. м.</span></td> : null}
                                    {m.translit == "plexiglass" ? <td>{!props.outprice.plexiglass ? props.defCost(m.id) : ""} {props.outprice.plexiglass.cost} <span className={'short'}>руб. пог. м.</span></td> : null}
                                    {m.translit == "glass" ? <td>{!props.outprice.glass ? props.defCost(m.id) : ""} {props.outprice.glass.cost} <span className={'short'}>руб. пог. м.</span></td> : null}
                                    {m.translit == "glass_plastic" ? <td>{!props.outprice.glass_plastic ? props.defCost(m.id) : ""} {props.outprice.glass_plastic.cost} <span className={'short'}>руб. пог. м.</span></td> : null} 
                                    {m.translit == "marble" ? <td>{!props.outprice.marble ? props.defCost(m.id) : ""} {props.outprice.marble.cost} <span className={'short'}>руб. пог. м.</span></td> : null}                         
                                
                                </tr>
                                )
                        }
                        </tbody>
                        </table>
        </>
    )
}
export default  BlockMateterialMobile; 
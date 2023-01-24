import {useState, useEffect} from 'react';
import {useRouter} from "next/router";

const Material = ({material:serverMaterial}) => {

    const router = useRouter();

    const[materialid, setMaterialId] = useState(serverMaterial);
    useEffect(()=>{
        async function load() {
            // const res = await fetch(`localhost:7000/materials?material=${router.query.material}&size=${router.query.size}`);
            const res = await fetch(`localhost:7000/materials?material=${router.query.material}`);
            const min = await res.json();
            setMaterialId(min);
        }
            load();
    },[serverMinId])// eslint-disable-line react-hooks/exhaustive-deps



    return (
        <>
            <h1>Material ID</h1>
        </>
    )

}
export default Material;
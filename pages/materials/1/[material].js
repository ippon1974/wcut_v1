import {useState, useEffect} from 'react';
import {useRouter} from "next/router";
import Layout from "../../components/layout/Layout";

const Material = ({material:serverMaterial, size:serverSize}) => {

    const router = useRouter();

    const[material, setMaterial] = useState(serverMaterial);
    
    useEffect(()=>{
        async function load() {
            const response = await fetch(`http://localhost:7000/materials?material=${router.query.material}`);
            const data = await response.json();
            setMaterial(data);
        }
        if(!serverMaterial){
            load();
        }
    },[serverMaterial])// eslint-disable-line react-hooks/exhaustive-deps

    const[size, setSize] = useState(serverSize);
    useEffect(()=>{
        async function load() {
            const response = await fetch(`http://localhost:7000/costsize?id=1&size=5`);
            const data = await response.json();
            setSize(data);
            console.log("size ...", data);
        }
        if(!serverSize){
            load();
        }
    },[serverSize])// eslint-disable-line react-hooks/exhaustive-deps


    if(!material){
        return <Layout>
            <p>...Loading</p>
        </Layout>
    }

    return (
        <>
            <h1>Material ID and Size ID {material.material}</h1>
        </>
    )

}
export default Material;

export async function getServerSideProps({query, req}) {
    if(!req){
        return {material:null, size: null}
    }

    const response = await fetch(`http://localhost:7000/materials?material=${query.material}`);
    const material = await response.json();

    const res = await fetch(`http://localhost:7000/costsize?id=1&size=5`);
    const size = await res.json();

    return {props: {material, size} }
}
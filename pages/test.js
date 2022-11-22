import Script from "next/script";
import Head from "next/head";
//import Layout from "../components/Layout";

export default function Test() {  
    
    return ( 
        <>
         <Script src="https://example.com/script.js" strategy="worker" />
        
        </>
    );
}
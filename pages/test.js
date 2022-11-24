import React, { useRef, useEffect } from 'react';
import $ from 'jquery';
import classes from '../styles/test.module.scss';
import Image from "next/image";
import Link from "next/link";
//import Head from 'next/head';
import {Helmet} from "react-helmet";  
import Script from 'next/script'

export default function Test() {  
    
   
    useEffect(() => {
       var ver = $;
       console.log(ver.fn.jquery);
     })
       
    return ( 
        <>
       <Script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js" />
       
       <p>Hi</p>
      
       <div>
            <a href="#">
                        <div className={classes.viewportcontainer}>
                            <div className={classes.viewport}>
                                <img src="/work_off.jpg" width="303" height="227" />
                                <img src="/work_off.jpg" width="303" height="227" />
                            </div>
                        </div>
            </a>
      </div>
       
    
        </>
    );
}
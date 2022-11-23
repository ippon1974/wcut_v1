import React, { useState, useEffect } from 'react';
import $ from 'jquery';
import classes from '../styles/test.module.scss';
import Image from "next/image";
import Link from "next/link";
import Head from 'next/head';
import {Helmet} from "react-helmet";  
import Script from 'next/script'

export default function Test() {  
    
    useEffect(() => {

            $(".myport").hover(function(){
            $(this).find('>img').attr("src", "img/Vector4.png");
          })


          var msg = $;
          console.log('Версия JQUERY ' + msg.fn.jquery);
          
          $(function() {
            $('.myport').each(function(){var imgHeight = $(this).find('>img').css('height');
            $(this).animate({height: imgHeight, top: '-' + imgHeight },{ queue: false, duration: 100, easing:'swing'}).css('overflow','visible'); });
         
          });
    })

    return ( 
        <>
       
         <Head>
            
         </Head>

        {/* <img id="container" src='https://avatars0.githubusercontent.com/u/70142' />
        <button>Resize</button> */}

        <Link href={'#'}>
         <div className={classes.viewportcontainer}>
               <div className={classes.viewport}>
               <Image src={'/works/1013_1.jpg'} width={'303'} height={'227'} alt={''}></Image>
               <Image src={'/works/1013_2.jpg'} width={'303'} height={'227'} alt={''}></Image>
               </div>
         </div>
         </Link>


            <p className={'mystring'}>
                new new new
            </p>
            <br />

            <Link href={'#'}>
            <div className={classes.myportcontainer}>
            <div className={classes.myport}>
                <Image src={'/works/1013_1.jpg'} width={'303'} height={'227'} alt={''}></Image>
                <Image src={'/works/1013_2.jpg'} width={'303'} height={'227'} alt={''}></Image>
            </div>
            </div>
            </Link>

            
    
         

        </>
    );
}
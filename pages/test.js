import React, { useState, useEffect } from 'react';
import $, { ready } from 'jquery';
import classes from '../styles/test.module.scss';
import Image from "next/image";
import Link from "next/link";
import Head from 'next/head';

export default function Test() {  
    
    useEffect(() => {
        //$(function() {$('button').on('click', function() {$('#container').css('width', '156px').css('height', 'auto')});});
        
        $(function () {
            $('.viewport').each(function () { var imgHeight = $(this).find('>img').css('height'); 
            $(this).animate({ height: imgHeight, top: '-' + imgHeight }, { queue: false, duration: 100, easing: 'swing' }).css('overflow', 'visible'); });
            setTimeout("$('.viewport').parent().parent().closest('div').parent().hover(function(){ $(this).find('.viewport').stop().animate({top: 0},{queue:false,duration:250,easing:'swing'}); }, function() {var imgHeight = $(this).find('.viewport').find('>img').css('height'); $(this).find('.viewport').stop().animate({top:'-'+imgHeight},{queue:false,duration:200,easing:'swing'}); });", 500);
        });
    })

    return ( 
        <>
        <Head>
            <script type="text/javascript" src="http://wcut.ru/App_Themes/ThemeDef/misc/jquery/jquery.min.js"></script>
            <script type="text/javascript" src="http://wcut.ru/App_Themes/ThemeDef/misc/jquery.once"></script>
        </Head>

        {/* <img id="container" src='https://avatars0.githubusercontent.com/u/70142' />
        <button>Resize</button> */}

        <Link href={'#'}>
         <div className={classes.viewportcontainer}>
               <div className={classes.viewport} style={{top:"-227px"}}>
               <Image src={'/works/1013_1.jpg'} width={'303'} height={'227'} alt={''}></Image>
               <Image src={'/works/1013_2.jpg'} width={'303'} height={'227'} alt={''}></Image>
               </div>
         </div>
         </Link>
        </>
    );
}
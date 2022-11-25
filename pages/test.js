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
        var $profile = $(".influencers");
        var $profileLink = $profile.find("a");
        var $activeProfile = $profileLink.hasClass("active");
        var imageHoverName = "/hover.jpg";
        var imageColourName = "/colour.jpg";
        var TRANSITION_DURATION = 500, inTimeout;

        $profile.find("img").hover(function() {
            $activeProfile = $(this).closest("a").hasClass("active");
            if (!$activeProfile) {
              var src = $(this).attr('src').replace(imageColourName, imageHoverName);
              var self = this;
              clearTimeout(inTimeout);
              this.style.opacity = 0;
              inTimeout = setTimeout(function(){
                self.src = src;
                self.style.opacity = 1
              }, TRANSITION_DURATION )
            }
            return false
          }, function() {
            $activeProfile = $(this).closest("a").hasClass("active");
            if (!$activeProfile) {
              var src = $(this).attr('src').replace(imageHoverName, imageColourName);
              var self = this;
              clearTimeout(inTimeout);
              this.style.opacity = 0;
              inTimeout = setTimeout(function(){
                self.src = src;
                self.style.opacity = 1
              }, TRANSITION_DURATION )
            }
            return false
          });
    
    });


    return ( 
            <>
    <div className={classes.influencers}>
    <div className={'influencers'}>
    <a href="#">
        <Image src="/work_off.jpg" width={'74'} height={'74'} alt={""} />
    </a>
    <a href="#">
        <Image src="/thoughts_off.jpg" width={'74'} height={'74'} alt={""} />
    </a>
    <a href="#">
        <Image src="/news_off.jpg" width={'74'} height={'74'} alt={""} />
    </a>
    </div>
    </div>
            
            </>
    );
}
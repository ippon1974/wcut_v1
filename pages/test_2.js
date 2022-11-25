import React, { useRef, useEffect } from 'react';
import $ from 'jquery';
import classes from '../styles/test.module.scss';

export default function Test_2() {
    
    const mystyle = {
        height: '0px',
        top:'-228px',
        margin:'0',
        position:'relative'
      }
    const myImg = {
        top:'0',
        left:'0',
        border:'0',
        display: 'block'
    }
    
    useEffect(() => {
        $(function(){
            $('.viewport').each(function () { var imgHeight =  $(this).find('>img').css('height');  $(this).animate({ height: imgHeight, top: '-' + imgHeight }, { queue: false, duration: 100, easing: 'swing' }).css('overflow', 'visible'); });
            $('.viewport').parent().parent().closest('div').parent().hover(function(){$(this).find('.viewport').stop().animate({top: 0},{queue:false,duration:250,easing:'swing'}); }, function() { var imgHeight = $(this).find('.viewport').find('>img').css('height');  $(this).find('.viewport').stop().animate({top:'-'+imgHeight},{queue:false,duration:200,easing:'swing'}); });
        })
    })    

    return(

        <>
                    <a href="#">
                        <div className={classes.viewportcontainer}>
                            <div class="viewport" style={mystyle}>
                                <img style={myImg} src="works/1013_1.jpg" width="303" height="227" />
                                <img style={myImg} src="works/1013_2.jpg" width="303" height="227" />
                            </div>
                        </div>
                    </a> 
        </>
    );
}

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import classes from '../styles/error.module.scss';
import { useMediaQuery } from 'react-responsive';

export default function ErrorPage() {

    const [mobile, setMobile] = useState(false)
    const isPhone = useMediaQuery({ query: '(max-width: 481px)'})
    useEffect(() => setMobile(isPhone), [isPhone]);

    return(
        <>
         {mobile ?  
         <div className={classes.container404Mobile}>
                <div>
                    <h1><Link href={'/'} title={'На главную'}>404</Link></h1>
                </div>
        </div> :  
        <div className={classes.container404}>
                <div>
                    <h1><Link href={'/'} title={'На главную'}>404</Link></h1>
                </div>
        </div>} 

        <script
                 dangerouslySetInnerHTML={{__html: `
                (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
                m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
                (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
      
                ym(26204994, "init", {
                      clickmap:true,
                      trackLinks:true,
                      accurateTrackBounce:true
                });
              `,
            }}
          />
        <noscript>
          <div>
          <picture>
            <img src="https://mc.yandex.ru/watch/26204994" style={{ position:'absolute', left:'-9999px' }} alt="" />
          </picture>
          </div>
        </noscript>
           
        </>
    );
}
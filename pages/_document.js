import Document, { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    {/* <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet" /> */}
                    <link rel="shortcut icon" href="/icon.ico" type="image/x-icon"></link>
                    <link type="image/png" sizes="120x120" rel="icon" href="/favicon-120x120.png"></link>
                </Head>

                <body>
                <Main /> 
                <NextScript />
                
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


       

            </body>
            </Html>
        )
    }
}
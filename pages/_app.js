import '../styles/reset.scss';
import '../styles/main.scss';
//import '../styles/test.scss';
//import '../js/test.js';
//import '../js/jquery.min.js';
//import '../js/jquery.once.js';
import NextNProgress from "nextjs-progressbar";
import Script from 'next/script'

export default function MyApp({Component, pageProps}) {
  return(
      <>
        <NextNProgress
                color="#ee3124"
                startPosition={0.3}
                stopDelayMs={200}
                height={2}
                showOnShallow={true} /> 
        <Component {...pageProps} />
      </>
  );
}
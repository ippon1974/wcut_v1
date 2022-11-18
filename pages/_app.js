import '../styles/reset.scss';
import '../styles/main.scss';
import '../styles/test.scss';
import '../js/main';
import NextNProgress from "nextjs-progressbar";

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
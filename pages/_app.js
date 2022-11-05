import '../styles/reset.scss';
import '../styles/main.scss';
import '../styles/test.scss';
import '../js/main';
import NextNProgress from "nextjs-progressbar";

export default function MyApp({Component, pageProps}) {
  return(
      <>
        {/*<NextNProgress*/}
        {/*    color="red"*/}
        {/*    startPosition={0.3}*/}
        {/*    stopDelayMs={200}*/}
        {/*    height={1}*/}
        {/*    showOnShallow={true} />*/}
        <Component {...pageProps} />
      </>
  );
}
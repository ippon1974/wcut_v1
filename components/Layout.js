import Head from 'next/head';
import Header from "./Header";
import NavBar from "./NavBar";
import Footer from "./Footer";

const Layout = ({children, title = 'Civek Water Jet', description = 'Можем отрезать что хочешь',keywords = 'Ключевые слова прямо тут бля' }) => {

        return(
            <>
                    <Head>
                            <title>{title}</title>
                            <meta name="description" content={description} />
                            <meta name="keywords" content={keywords} />
                            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    </Head>

                <div className="Layout">
                <Header/>
                <NavBar/>
                        <div className="Content">
                                {children}
                        </div>
                <Footer/>
                </div>
            </>
        )
}

export default Layout;
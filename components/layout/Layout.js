import Head from 'next/head';

const Layout = ({children, title = 'Civek Water Jet', description = '',keywords = '' }) => {

        return(
            <>
                    <Head>
                            <title>{title}</title>
                            {/* <meta name="description" content={description} /> */}
                            {/* <meta name="keywords" content={keywords} /> */}
                            {/* <meta name="viewport" content="width=device-width, initial-scale=1.0" /> */}
                    </Head>
                    
        

                {/* <Header/> */}

                {children}
                
                {/* <NavBar/> */}
                {/*<Footer/>*/}
                
                
            </>
        )
}

export default Layout;
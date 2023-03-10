import Head from 'next/head';

const Layout = ({children, title = 'Civek Water Jet | Гидроабразивная резка в Москве и Москвовской области', description = 'Гидроабразивная резка металла',keywords = 'Водорезка, гидрорез, гидрорезка, гидроабразив' }) => {

        return(
            <>
                    <Head>
                            <title>{title}</title>
                            <meta name="description" content={description} />
                            <meta name="keywords" content={keywords} />
                    </Head>
                    
                {/* <Header/> */}

                {children}
                
                {/* <NavBar/> */}
                {/*<Footer/>*/}
                
                
            </>
        )
}

export default Layout;
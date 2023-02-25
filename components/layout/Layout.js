import Head from 'next/head';

const Layout = ({children, title = 'Civek Water Jet | Гидроабразивная резка в Москве и Москвовской области', description = 'Услуги гидроабразивной резки в Москве',keywords = 'Гидрорез, гидроабразив, раскрой водой' }) => {

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
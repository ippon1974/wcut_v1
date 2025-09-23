import Head from 'next/head';

const Layout = ({children, title = 'Сивек Ватер Джет | Резка водой, гидроабразивная резка в Москве и Москвовской области', description = 'Гидроабразивная резка металла',keywords = 'Резка водой, водорезка, гидрорез, гидрорезка, гидроабразив' }) => {

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
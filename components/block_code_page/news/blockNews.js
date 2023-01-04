import React, { useState, useEffect } from 'react';
import classes from '../../../styles/article.module.scss';
import Link from "next/link";
import Image from "next/image";

const BlockNews = (props) => {
    

    function fdt(d){
        let dt = new Date(d);
        return dt.toLocaleDateString();
    }

    return (
        <>
                {props.articles.map(articles => (
                    
                    <div key={articles.id} className={classes.blockNewsMain}>
                         <div className={classes.dtMainList}>
                            <p>{fdt(articles.dt)}</p>
                            <span>Раздел: <Link href="">статьи</Link></span>
                        </div>
                        <div className={classes.newsListMain}>
                            <h2><Link href={"/news/id/one"}>{articles.title}</Link></h2>
                            <p>{articles.titlelong}</p>
                            <div className={classes.mainlinefooter}>
                                <span><Link href={'#'} title='Весь текст'>
                                <Image src="/blogarrow.png" width={"15"} height={"15"} alt="img" />
                                Весь текст</Link>
                                </span>
                            </div>
                        </div>
                        
                    </div>
                ))}
            
        
            {/* <div className={classes.blockNewsMain}>
                <div className={classes.dtMainList}>
                    <p>05 March 2020</p>
                    <span>Раздел: <Link href="">статьи</Link></span>
                </div>
                <div className={classes.newsListMain}>
                    <h2><Link href={"/news/id/one"}>История CAM систем</Link></h2>
                    <p>История CAM систем — прошлое, настоящее и будущее</p>
                <div className={classes.mainlinefooter}>
                    <span><Link href={'#'} title='Весь текст'>
                        <Image src="/blogarrow.png" width={"15"} height={"15"} alt="img" />
                        Весь текст</Link>
                    </span>
                </div>
                </div>
            </div>

                    <div className={classes.blockNewsMain}>
                        <div className={classes.dtMainList}>
                            <p>05 March 2020</p>
                            <span>Раздел: <Link href="">статьи</Link></span>
                        </div>
                        <div className={classes.newsListMain}>
                            <h2><Link href={'/news/id/one'}>Производство вентиляционных решеток</Link></h2>
                            <p>Производство вентиляционных решеток из нержавеющей стали, латуни, меди. Толщина материала от 3 до 10 мм. Civek Water Jet предлагает вентиляционные решетки по вашим размерам.</p>
                        <div className={classes.mainlinefooter}>
                            <span><Link href={'#'} title='Весь текст'>
                                <Image src="/blogarrow.png" width={"15"} height={"15"} alt="img" />
                                Весь текст</Link>
                            </span>
                        </div>
                        </div>
                    </div>

                    <div className={classes.blockNewsMain}>
                        <div className={classes.dtMainList}>
                            <p>05 March 2020</p>
                            <span>Раздел: <Link href="">статьи</Link></span>
                        </div>
                        <div className={classes.newsListMain}>
                            <h2><Link href={'/news/id/one'}>Производство вентиляционных решеток</Link></h2>
                            <p>Производство вентиляционных решеток из нержавеющей стали, латуни, меди. Толщина материала от 3 до 10 мм. Civek Water Jet предлагает вентиляционные решетки по вашим размерам.</p>
                        <div className={classes.mainlinefooter}>
                            <span><Link href={'#'} title='Весь текст'>
                                <Image src="/blogarrow.png" width={"15"} height={"15"} alt="img" />
                                Весь текст</Link>
                            </span>
                        </div>
                        </div>
                    </div> */}
        </>
    )
}
export default BlockNews;

// export async function getServerSideProps({req}) {
//     if(!req){
//         return {post:null}
//     }
//     const response = await fetch('http://localhost:7000/news/all')
//     const articles = await response.json();

//     return {props: {articles}}
// }
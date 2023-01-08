import React, { useState, useContext, useEffect } from 'react';
import Link from "next/link";
import Image from "next/image";
import classes from '../../../../../components/ui/navigation/main/news/navigationArticle.module.scss';
import { useRouter } from 'next/router';


const NavigationArticle = (props) => { 
   
    const { asPath, pathname } = useRouter();
    const [over, setOver] = useState(false);
    
    const [news, setNews] = useState(false);
    const [marketnews, setMarketnews] = useState(false);
    const [cnews, setCnews] = useState(false);
    const [show, setShow] = useState(false);
    const [item, setItem] = useState(false);
    const [video, setVideo] = useState(false);

    const menuArticle = [
        {id: '1', title_id: "0", title: 'Новости', item: "news", uri: '/news', img: "/allposts_off.jpg", active: "/allposts_on.jpg"},
        {id: '2', title_id: "1", title: 'Новости рынка', item: "marketnews", uri: '/news/marketnews', img: "/news_off.jpg", active: "/news_on.jpg"},
        {id: '3', title_id: "2", title: 'Новости компании', item: "cnews", uri: '/news/cnews', img: "/work_off.jpg", active: "/work_on.jpg"},
        {id: '4', title_id: "3", title: 'Выставки', item: "show", uri: '/news/show', img: "/thoughts_off.jpg", active: "/thoughts_on.jpg"},
        {id: '5', title_id: "4", title: 'Статьи', item: "item", uri: '/news/item', img: "/topten_off.jpg", active: "/topten_on.jpg"},
        {id: '6', title_id: "5", title: 'Видео', item: "video", uri: '/news/video', img: "/fun_off.jpg", active: "/fun_on.jpg"}
        ];
    
    return (
        <>
            <div className={classes.blockNewsNavRight}>
                    <div className={`${classes.boxnews} ${classes.nameItem}`}>
                        <Image src="/filterby.png" width={"224"} height={"33"} alt="" />
                    </div>
                    
                    {asPath === menuArticle[0].uri ?
                        <div className={`${classes.boxnews} ${classes.news}`} key={menuArticle.id}>
                        <Link href={menuArticle[0].uri} title={menuArticle[0].title}>
                            <Image
                             src={menuArticle[0].active}
                             width={"74"} 
                             height={"74"} 
                             alt={menuArticle[0].title} />
                        </Link>
                    </div>
                     : 
                     <div className={`${classes.boxnews} ${classes.news}`}>
                                    <Link href={menuArticle[0].uri} title={menuArticle[0].title}>
                                        <Image
                                          onMouseOver={()=>setNews(true)}
                                          onMouseOut={()=>setNews(false)}
                                          src = { news ? menuArticle[0].active : menuArticle[0].img}
                                          width={"74"} 
                                          height={"74"} 
                                          alt={menuArticle[0].title} />
                                      </Link>
                                </div>
                     }

                    {asPath === menuArticle[1].uri || menuArticle[1].title_id == props.article ? 
                        <div className={`${classes.boxnews} ${classes.news}`}>
                        <Link href={menuArticle[1].uri} title={menuArticle[1].title}>
                            <Image
                             src={menuArticle[1].active}
                             width={"74"} 
                             height={"74"} 
                             alt={menuArticle[1].title} />
                        </Link>
                    </div>
                     : 
                     <div className={`${classes.boxnews} ${classes.news}`}>
                                    <Link href={menuArticle[1].uri} title={menuArticle[1].title}>
                                        <Image
                                          onMouseOver={()=>setMarketnews(true)}
                                          onMouseOut={()=>setMarketnews(false)}
                                          src = { marketnews ? menuArticle[1].active : menuArticle[1].img}
                                          width={"74"} 
                                          height={"74"} 
                                          alt={menuArticle[1].title} />
                                      </Link>
                    </div>
                     }
                     {asPath === menuArticle[2].uri || menuArticle[2].title_id == props.article? 
                        <div className={`${classes.boxnews} ${classes.news}`}>
                        <Link href={menuArticle[2].uri} title={menuArticle[2].title}>
                            <Image
                             src={menuArticle[2].active}
                             width={"74"} 
                             height={"74"} 
                             alt={menuArticle[2].title} />
                        </Link>
                    </div>
                     : 
                     <div className={`${classes.boxnews} ${classes.news}`}>
                                    <Link href={menuArticle[2].uri} title={menuArticle[2].title}>
                                        <Image
                                          onMouseOver={()=>setCnews(true)}
                                          onMouseOut={()=>setCnews(false)}
                                          src = { cnews ? menuArticle[2].active : menuArticle[2].img}
                                          width={"74"} 
                                          height={"74"} 
                                          alt={menuArticle[2].title} />
                                      </Link>
                    </div>
                     }
                     {asPath === menuArticle[3].uri || menuArticle[3].title_id == props.article? 
                        <div className={`${classes.boxnews} ${classes.news}`}>
                        <Link href={menuArticle[3].uri} title={menuArticle[3].title}>
                            <Image
                             src={menuArticle[3].active}
                             width={"74"} 
                             height={"74"} 
                             alt={menuArticle[3].title} />
                        </Link>
                    </div>
                     : 
                     <div className={`${classes.boxnews} ${classes.news}`}>
                                    <Link href={menuArticle[3].uri} title={menuArticle[3].title}>
                                        <Image
                                          onMouseOver={()=>setShow(true)}
                                          onMouseOut={()=>setShow(false)}
                                          src = { show ? menuArticle[3].active : menuArticle[3].img}
                                          width={"74"} 
                                          height={"74"} 
                                          alt={menuArticle[3].title} />
                                      </Link>
                    </div>
                     }
                     {asPath === menuArticle[4].uri || menuArticle[4].title_id == props.article? 
                        <div className={`${classes.boxnews} ${classes.news}`}>
                        <Link href={menuArticle[4].uri} title={menuArticle[4].title}>
                            <Image
                             src={menuArticle[4].active}
                             width={"74"} 
                             height={"74"} 
                             alt={menuArticle[4].title} />
                        </Link>
                    </div>
                     : 
                     <div className={`${classes.boxnews} ${classes.news}`}>
                                    <Link href={menuArticle[4].uri} title={menuArticle[4].title}>
                                        <Image
                                          onMouseOver={()=>setItem(true)}
                                          onMouseOut={()=>setItem(false)}
                                          src = { item ? menuArticle[4].active : menuArticle[4].img}
                                          width={"74"} 
                                          height={"74"} 
                                          alt={menuArticle[4].title} />
                                      </Link>
                    </div>
                     }
                      {asPath === menuArticle[5].uri || menuArticle[5].title_id == props.article? 
                        <div className={`${classes.boxnews} ${classes.news}`}>
                        <Link href={menuArticle[5].uri} title={menuArticle[5].title}>
                            <Image
                             src={menuArticle[5].active}
                             width={"74"} 
                             height={"74"} 
                             alt={menuArticle[5].title} />
                        </Link>
                    </div>
                     : 
                     <div className={`${classes.boxnews} ${classes.news}`}>
                                    <Link href={menuArticle[5].uri} title={menuArticle[5].title}>
                                        <Image
                                          onMouseOver={()=>setVideo(true)}
                                          onMouseOut={()=>setVideo(false)}
                                          src = { video ? menuArticle[5].active : menuArticle[5].img}
                                          width={"74"} 
                                          height={"74"} 
                                          alt={menuArticle[5].title} />
                                      </Link>
                    </div>
                     }
                    
            </div>
        </>
    )
}

export default NavigationArticle;
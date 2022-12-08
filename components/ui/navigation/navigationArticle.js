import React, { useState, useContext, useEffect } from 'react';
import Link from "next/link";
import Image from "next/image";
import classes from '../../../components/ui/navigation/navigationArticle.module.scss';
import { useRouter } from 'next/router';

const NavigationArticle = () => { 

    const { asPath, pathname } = useRouter();
    const [over, setOver] = useState(false);
    
    const handleName = name => {
        setOver({
          name: name.target.value
        });
      };
   
    const menuArticle = [
        {id: '1', title: 'Новости', uri: '/news', img: "/allposts_off.jpg", active: "/allposts_on.jpg"},
        {id: '2', title: 'Новости рынка', uri: '/news/marketnews', img: "/news_off.jpg", active: "/news_on.jpg"},
        {id: '3', title: 'Новости компании', uri: '/news/cnews', img: "/work_off.jpg", active: "/work_on.jpg"},
        {id: '4', title: 'Выставки', uri: '/news/show', img: "/thoughts_off.jpg", active: "/thoughts_on.jpg"},
        {id: '5', title: 'Статьи', uri: '/news/item', img: "/topten_off.jpg", active: "/topten_on.jpg"},
        {id: '6', title: 'Видео', uri: '/news/video', img: "/fun_off.jpg", active: "/fun_on.jpg"}
        ];

    const item = asPath.split('/');
    const pathItem = item[1];

    return (
        <>

            <div className={classes.blockNewsNavRight}>
                   
                    <div className={`${classes.boxnews} ${classes.nameItem}`}>
                        <Image src="/filterby.png" width={"224"} height={"33"} alt="" />
                    </div>

                   
                    {menuArticle.map(menuArticle => {
                        //const [over, setOver] = useState(false);
                        {handleName}
                        
                        if (asPath === menuArticle.uri)
                        {
                            return (
                                <div className={`${classes.boxnews} ${classes.news}`} key={menuArticle.id}>
                                    <Link href={menuArticle.uri} title={menuArticle.title}>
                                        <Image
                                         src={menuArticle.active}
                                         width={"74"} 
                                         height={"74"} 
                                         alt={menuArticle.title} />
                                    </Link>
                                </div>
                            )
                        }else {
                            return (
                                <div className={`${classes.boxnews} ${classes.news}`} key={menuArticle.id}>
                                    <Link href={menuArticle.uri} title={menuArticle.title}>
                                        <Image
                                          onMouseOver={() => setOver(true)}
                                          onMouseOut={() => setOver(false)}
                                          src = { over ? menuArticle.active : menuArticle.img}
                                          width={"74"} 
                                          height={"74"} 
                                          alt={menuArticle.title} />
                                    </Link>
                                </div>
                            )
                        }

                    })}
            </div>
        </>
    )
}

export default NavigationArticle;
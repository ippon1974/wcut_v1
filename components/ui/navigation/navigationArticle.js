import React, { useState } from 'react';
import Link from "next/link";
import Image from "next/image";
import classes from '../../../components/ui/navigation/navigationArticle.module.scss';
import { useRouter } from 'next/router';

const NavigationArticle = () => {

    const { asPath, pathname } = useRouter();
    // const [hover, setHover] = useState(false);

    const menuArticle = [
        {id: '1', title: 'Новости', uri: '/news', img: "/allposts_off.jpg"},
        {id: '2', title: 'Новости рынка', uri: '/news/marketnews', img: "/news_off.jpg"},
        {id: '3', title: 'Новости компании', uri: '/news/cnews', img: "/work_off.jpg"},
        {id: '4', title: 'Выставки', uri: '/news/show', img: "/thoughts_off.jpg"},
        {id: '5', title: 'Статьи', uri: '/news/item', img: "/topten_off.jpg"},
        {id: '6', title: 'Видео', uri: '/news/video', img: "/fun_off.jpg"}
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
                    if (asPath === menuArticle.uri)
                    {
                        return (
                            <div className={`${classes.boxnews} ${classes.news}`} key={menuArticle.id}>

                                <Link href={menuArticle.uri} title={menuArticle.title}>
                                    <Image src={menuArticle.img} width={"74"} height={"74"} alt="Новости"></Image>
                                </Link>

                            </div>
                        )
                    }else {
                        return (
                            <div className={`${classes.boxnews} ${classes.news}`} key={menuArticle.id}>

                            <Link href={menuArticle.uri} title={menuArticle.title}>

                                <Image src={menuArticle.img} width={"74"} height={"74"} alt="Новости"></Image>
                                
                                {/* <Image src={'/allposts_off.jpg'} width={'74'} height={'74'}
                                onMouseEnter={() => setHover(true)}
                                onMouseLeave={() => setHover(false)}
                                /> */}

                            </Link>
                        </div>
                        )
                    }

                })}

                                               {/* <div className={`${classes.boxnews} ${classes.news}`}>
                    <Link href={"/news"} title="Новости">
                        <Image src="/allposts_off.jpg" width={"74"} height={"74"} alt="Новости"></Image>
                    </Link>
                </div>
                <div className={`${classes.boxnews} ${classes.market}`}>
                    <Link href={"/news/marketnews"} title="Новости рынка">
                        <Image src={"/news_off.jpg"} width={"74"} height={"74"} alt="Новости рынка"></Image>
                    </Link>
                </div>
                <div className={`${classes.boxnews} ${classes.cnews}`}>
                    <Link href={"/news/cnews"} title="Новости компании">
                        <Image src={"/work_off.jpg"} width={"74"} height={"74"} alt="Новости компании"></Image>
                    </Link>
                </div>
                <div className={`${classes.boxnews} ${classes.show}`}>
                    <Link href={"/news/show"} title="Выставки">
                        <Image src={"/thoughts_off.jpg"} width={"74"} height={"74"} alt="Выставки"></Image>
                    </Link>
                </div>
                <div className={`${classes.boxnews} ${classes.item}`}>
                    <Link href={"/news/item"} title="Статьи">
                        <Image src={"/topten_off.jpg"} width={"74"} height={"74"} alt="Статьи"></Image>
                    </Link>
                </div>
                <div className={`${classes.boxnews} ${classes.video}`}>
                    <Link href={"/news/video"} title="Видео">
                        <Image src={"/fun_off.jpg"} width={"74"} height={"74"} alt="Видио"></Image>
                    </Link>
                </div> */}

                </div>
        </>
    )
}

export default NavigationArticle;
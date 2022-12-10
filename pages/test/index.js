import React, { useState, useContext, useEffect } from 'react';
import Link from "next/link";
import Image from "next/image";

export default function Test() {

    const [over, setOver] = useState(false);
    const [overone, setOverOne] = useState(false);
    const [overtwo, setOverTwo] = useState(false);

    const menuArticle = [
        {id: '1', title: 'Новости', uri: '/news', img: "/allposts_off.jpg", active: "/allposts_on.jpg"},
        {id: '2', title: 'Новости рынка', uri: '/news/marketnews', img: "/news_off.jpg", active: "/news_on.jpg"},
        {id: '3', title: 'Новости компании', uri: '/news/cnews', img: "/work_off.jpg", active: "/work_on.jpg"},
        {id: '4', title: 'Выставки', uri: '/news/show', img: "/thoughts_off.jpg", active: "/thoughts_on.jpg"},
        {id: '5', title: 'Статьи', uri: '/news/item', img: "/topten_off.jpg", active: "/topten_on.jpg"},
        {id: '6', title: 'Видео', uri: '/news/video', img: "/fun_off.jpg", active: "/fun_on.jpg"}
        ];
    return(
        <>
           <Link href={menuArticle[0].uri} title={menuArticle[0].title}>
                    <Image
                        onMouseOver={()=>setOver(true)}
                        onMouseOut={()=>setOver(false)}
                        src = { over ? menuArticle[0].active : menuArticle[0].img}
                        width={"74"} 
                        height={"74"} 
                        alt={menuArticle[0].title} />
            </Link>
            <Link href={menuArticle[1].uri} title={menuArticle[1].title}>
                    <Image
                        onMouseOver={()=>setOverOne(true)}
                        onMouseOut={()=>setOverOne(false)}
                        src = { overone ? menuArticle[1].active : menuArticle[1].img}
                        width={"74"} 
                        height={"74"} 
                        alt={menuArticle[1].title} />
            </Link>
            <Link href={menuArticle[2].uri} title={menuArticle[2].title}>
                    <Image
                        onMouseOver={()=>setOverTwo(true)}
                        onMouseOut={()=>setOverTwo(false)}
                        src = { overtwo ? menuArticle[2].active : menuArticle[2].img}
                        width={"74"} 
                        height={"74"} 
                        alt={menuArticle[1].title} />
            </Link>
            
         {/* {menuArticle.map((menuArticle) => {
            //const [over, setOver] = useState(false);
            return(
                <div key={menuArticle.id}>
                    <Link href={menuArticle.uri} title={menuArticle.title}>
                    <Image
                        onMouseOver={()=>setOver(true)}
                        onMouseOut={()=>setOver(false)}
                        src = { over ? menuArticle.active : menuArticle.img}
                        width={"74"} 
                        height={"74"} 
                        alt={menuArticle.title} />
                    </Link>
                </div>
            )
         })} */}
        </>
    )
}
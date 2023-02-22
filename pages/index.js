import React, { useState, useEffect } from 'react';
import Layout from "../components/layout/Layout";
import Header from "../components/ui/header/Header";
import TextHead from "../components/block_code_page/index/textHead";
import TextHeadMobile from "../components/block_code_page/index/textHeadMobile";
import Navigation from "../components/ui/navigation/main/Navigation";
import MobileNavigation from "../components/ui/navigation/mobile/MobileNavigation";
import BlockWork from "../components/block_code_page/index/blockWork";
import BlockWorkMobile from "../components/block_code_page/index/blockWorkMobile";
import MobileFooterIndex from "../components/ui/footer/mobile/MobileFooterIndex";
import Footer from "../components/ui/footer/main/Footer";
import classes from '../styles/index.module.scss';
import Link from "next/link";
import Head from 'next/head';
import Image from "next/image";
import $ from 'jquery';
import { format } from 'date-fns'
import { useMediaQuery } from 'react-responsive';  

export  default function Index({works:serverWorks, materials:serverMaterials, costsize:serverCostSize, news:serverNews, newsitem:serverNewsItem, newsvideo:serverNewsVideo}) {

    const [mobile, setMobile] = useState(false)
    const isPhone = useMediaQuery({ query: '(max-width: 481px)'})
    useEffect(() => setMobile(isPhone), [isPhone]);

    const bannerPort = {
        height: '0',
        top:'-352px',
        margin:'0',
        padding: "0",
        position:'relative'
      }

    const workPort = {
        height: '0',
        top:'-228px',
        margin:'0',
        padding: '0',
        position:'relative'
    }  

    const imgWork = {
        top: 0,
        left: 0,
        border: 0,
        display: 'block'
    }

    useEffect(() => {
        $(function(){
            $('.viewport').each(function () { var imgHeight =  $(this).find('>img').css('height');  $(this).animate({ height: imgHeight, top: '-' + imgHeight }, { queue: false, duration: 100, easing: 'swing' }).css('overflow', 'visible'); });
            $('.viewport').parent().closest('div').parent().hover(function(){$(this).find('.viewport').stop().animate({top: 0},{queue:false,duration:250,easing:'swing'}); }, function() { var imgHeight = $(this).find('.viewport').find('>img').css('height');  $(this).find('.viewport').stop().animate({top:'-'+imgHeight},{queue:false,duration:200,easing:'swing'}); });
        })

        $(function(){
            $('.viewportWork').each(function () { var imgHeight =  $(this).find('>img').css('height');  $(this).animate({ height: imgHeight, top: '-' + imgHeight }, { queue: false, duration: 100, easing: 'swing' }).css('overflow', 'visible'); });
            $('.viewportWork').parent().closest('div').parent().hover(function(){$(this).find('.viewportWork').stop().animate({top: 0},{queue:false,duration:250,easing:'swing'}); }, function() { var imgHeight = $(this).find('.viewportWork').find('>img').css('height');  $(this).find('.viewportWork').stop().animate({top:'-'+imgHeight},{queue:false,duration:200,easing:'swing'}); });
        })
    })

    const[works, setWorks] = useState(serverWorks);
    const[materials, setMaterials] = useState(serverMaterials);
    const[costsize, setCostSize] = useState(serverCostSize);
    const[news, setNews] = useState(serverNews);
    const[item, setItem] = useState(serverNewsItem);
    const[video, setVideo] = useState(serverNewsVideo);

    useEffect(()=> {
        async function load() {
            const resworks = await fetch('http://23.105.246.179:7000/works/main')
            const works = await resworks.json();
            setWorks(works);

            const resmaterials = await fetch('http://23.105.246.179:7000/materials/all')
            const mat = await resmaterials.json();
            setMaterials(mat);

            const rescost = await fetch('http://23.105.246.179:7000/costsize/all')
            const cost = await rescost.json();
            setCostSize(cost);

            const resnews = await fetch('http://23.105.246.179:7000/news/main')
            const news = await resnews.json();
            setNews(news);

            const resitem = await fetch('http://23.105.246.179:7000/news/main/item')
            const item = await resitem.json();
            setItem(item);

            const resvideo = await fetch('http://23.105.246.179:7000/news/main/video')
            const video = await resvideo.json();
            setVideo(video);

        }

        if(!serverWorks){
            load();
        }
        if(!serverMaterials){
            load();
        }
        if(!serverCostSize){
            load();
        }
        if(!serverNews){
            load();
        }
        if(!serverNewsItem){
            load();
        }
        if(!serverNewsVideo){
            load();
        }

    }, [serverWorks, serverMaterials, serverCostSize, serverNews, serverNewsItem, serverNewsVideo])

    if(!works){
        return <Layout>
            <p>...Loading 1</p>
        </Layout>
    }
    if(!materials){
        return <Layout>
            <p>...Loading 2</p>
        </Layout>
    }
    if(!costsize){
        return <Layout>
            <p>...Loading 3</p>
        </Layout>
    }
    if(!news){
        return <Layout>
            <p>...Loading 4</p>
        </Layout>
    }
    // if(!item){
    //     return <Layout>
    //         <p>...Loading 5</p>
    //     </Layout>
    // }
    // if(!video){
    //     return <Layout>
    //         <p>...Loading 6</p>
    //     </Layout>
    // }

   return (
    <Layout title={'Civek Water Jet | Гидроабразивная резка в Москве и Москвовской области'} description={'Про Index'} keywords={'Ключ про Index'}>
    <Head>
        <meta name="viewport" content="width=device-width"/>
    </Head>
    <div className={classes.wrapper}>
        
        <div className={`${classes.item} ${classes.header}`}>
            <Header />
        </div>
        
        <div className={`${classes.item} ${classes.nav}`}>
          {mobile ? <MobileNavigation /> : <Navigation />}
        </div>
       
        <div className={`${classes.item} ${classes.maincontext}`}>

           <div>
           <Link href={'/equipment'}> 
           <div className={`${classes.viewportcontainer}`}>
           <div className={'viewport'} style={bannerPort}>
                <Image src={'/jack_home_new.jpg'} width={"619"} height={"351"} alt={""}></Image>
                <Image src={'/jack_home_off_0.jpg'} width={"619"} height={"351"} alt={""}></Image>
           </div>
           </div>
           </Link>
           </div>

           {mobile ? <TextHeadMobile /> : <TextHead />}

            <div className={`${classes.maincontext} ${classes.banner}`}>
                <div className={`${classes.itemBanner} ${classes.bannerArrow}`}>
                 <Link href={"/technology"}><Image src={'/arrowBanner.png'} width={"50"} height={"48"} alt={""}></Image></Link>
                </div>
                <div className={`${classes.itemBanner} ${classes.bannerLinkText}`}>
                  <Link href={"/technology"} title={'Технология гидроабразивной резки'}>Технология гидроабразивной резки</Link>
                </div>
            </div>
            
            {mobile ? <BlockWorkMobile works = {works} /> : <BlockWork works={works} />}
            
            <div className={`${classes.worksListArrowLink}`}>
                {works.map((w,i)=>(
                    <div key={i} className={`${classes.block_all}`}>
                         <div className={`${classes.info_block}`}>
                             <div className={`${classes.info_block_arrow}`}><Link href={`/works/${w.id}`} title={`${w.title}`}><Image src={'/morearrow.png'} width={'33'} height={'33'} alt=''></Image></Link></div>
                             <div className={`${classes.info_block_link}`}><Link href={`/works/${w.id}`} title={`${w.title}`}>Подробнее</Link></div>
                         </div>
                     </div>
                ))}
            </div>   

            <div className={`${classes.blockRedPrice}`}>
                <div className={`${classes.itemRedPrice}`}>
                    <Image src={'/twitcircle.gif'} width={'60'} height={'60'} alt={''}></Image>
                </div>
                <div className={`${classes.itemRedPrice} ${classes.textLinkRedBlock}`}>
                    <h2><Link href={'/materials'} title={'Прайс лист на раскрой'}>Прайс лист на раскрой</Link></h2>
                    <p><Link href={'/materials'}>Сталь, мрамор, гранит, латунь, медь, капролон, керамогранит, титан, стекло</Link></p>
                </div>
            </div>

            <section>
                <ul className={`${classes.priceline}`}>
                    
                    {
                      materials.map((m,i)=>{
                        return (
                            costsize.map((cost,sub) => {
                                if(m.id == cost.material_id && m.id === 2 && cost.size < 15)
                                return (
                                  <li key={sub}><Link href={`/materials/${m.translit}/size/${cost.size}`} title={`${m.material} Толщина листа: ${cost.size}`}>{m.material}</Link>. Лист: {cost.size} мм. Цена за пог.м. — {cost.cost} руб.<p><Link href={'/materials'} title={"Весь прайс-лист"}>Полный прайс-лист.</Link></p></li>
                                );
                              })
                        )
                      })
                        
                    }
               
                </ul>
            </section>

            <div className={`${classes.maincontext} ${classes.allPriceLine}`}>
                <div className={`${classes.itemAllPrice} ${classes.imgAllPrice}`}>
                    <Link href={'/materials'}><Image src={'/nextRed.gif'} width={'23'} height={'23'} alt={''}></Image></Link>
                </div>
                <div className={`${classes.itemAllPrice} ${classes.linkAllPrice}`}><Link href={'/materials'} title={'Весь прайс-лист на раскрой гидроабразивом'}>Весь прайс-лист на раскрой гидроабразивом</Link></div>
            </div>
            <div>
                <Link href={'/equipment'}><Image className={classes.responseImg} src={'/logoindexmulticam.jpg'} width={'619'} height={'108'} alt={''}></Image></Link>
            </div>
            
            <div className = {`${classes.containerNews}`}>
                {news.map((n,i)=>(
                     <figure key={i} className={`${classes.news_all}`}>
                     <Link href={`/news/${n.id}`}><Image className={classes.responseImg} src={`/news/${n.img_1}.jpg`} width={'303'} height={'227'} alt={n.title}></Image></Link>
                     <figcaption className={classes.newsfigcaption}>
                         <h2><Link href={`/news/${n.id}`}>{n.title}</Link></h2>
                     </figcaption>
                     <div className={classes.dtNews}>{format(new Date(n.dt),"dd MM yyyy")}</div>
                     <p className={classes.leadNews}><Link href={`/news/${n.id}`}>{n.titlelong}</Link></p>
                    </figure>
                ))}
               
            </div> <ul className={`${classes.itemline}`}>
                        {/* {item.map((item,i)=>(
                            <li key={i}>{item.title}<Link href={`/news/${item.id}`}> Весь текст</Link></li>
                        ))} */}
                    </ul>
            <div className={classes.containerNewsBotton}>
                <div className={classes.newsImg}>
                    <Link href={'/news'}><Image src={'/morearrow.png'} width={'33'} height={'33'} alt={''}></Image></Link>
                </div>
                <div className={classes.newsLink}><Link href={'/news'} title={'Все новости'}>Все новости</Link></div>
            </div>
            
            <div className={classes.containerItem}>
                <div className={classes.itemImg}>
                    <Image src={'/item.gif'} width={'60'} height={'60'} alt={''}></Image>
                </div>
                <div className={classes.itemText}>
                    <h2><Link href={"/news/item"} title={'Статьи'}>Статьи</Link></h2>
                    <p><Link href={"/news/item"} title={'Тематические статьи'}>Тематические статьи</Link></p>
                </div>
            </div> 
            <section>
                    {/* <ul className={`${classes.itemline}`}>
                        {item.map((item,i)=>(
                            <li key={i}>{item.title}<Link href={`/news/${item.id}`}> Весь текст</Link></li>
                        ))}
                    </ul> */}
            </section>
            <div className={`${classes.maincontext} ${classes.allItemLine}`}>
                <div className={`${classes.imgAllItem} ${classes.itemAllItem}`}>
                    <Link href={'/materials'}><Image src={'/nextRed.gif'} width={'23'} height={'23'} alt={''}></Image></Link>
                </div>
                <div className={`${classes.linkAllItem} ${classes.itemAllItem}`}><Link href={'/news/item'} title={'Все статьи'}>Все статьи</Link></div>
            </div>

            <div className={classes.containerVideo}>
                <div className={classes.videoImg}>
                    <Image src={'/video.gif'} width={'60'} height={'60'} alt={''}></Image>
                </div>
                <div className={classes.videoText}>
                    <h2><Link href={"/news/video"}>Видео</Link></h2>
                    <p><Link href={"/news/video"}>Видеоматериалы на тему раскроя гидроабразивом</Link></p>
                </div>
            </div>
            <section>
                    <ul className={`${classes.videoline}`}>
                        {/* {video.map((video, i)=>(
                            <li key={i}><Link href={`/news/${video.id}`}>{video.title}</Link> Раскрой гранита толщиной 80 мм. Гидроабарзив.</li>
                        ))} */}
                    </ul>
            </section>
            <div className={`${classes.maincontext} ${classes.allVideoLine}`}>
                <div className={`${classes.imgAllVideo} ${classes.itemAllVideo}`}>
                    <Link href={'/news/video'}><Image src={'/nextRed.gif'} width={'23'} height={'23'} alt={''}></Image></Link>
                </div>
                <div className={`${classes.linkAllVideo} ${classes.itemAllVideo}`}><Link href={'/news/video'}>Все видеоматериалы</Link></div>
            </div>
        </div>

        <div className={`${classes.item} ${classes.asideright}`}>
            <div>
                <Image src={'/home_intro.gif'} width={"303"} height={"1961"} alt={""}></Image>
            </div>
           
        </div>
        
        <div className={classes.componentfooter}>
            {mobile ? <MobileFooterIndex /> : <Footer />}
        </div>
    
    </div>

    <div className={classes.endpage}></div>
</Layout>
       
   );
}

export async function getServerSideProps({req}) {
    if(!req){
        return {works:null, materials:null, costsize:null, news:null, item:null, video:null}
    }
    const resworks = await fetch('http://23.105.246.179:7000/works/main')
    const works = await resworks.json();

    const resmat = await fetch('http://23.105.246.179:7000/materials/all')
    const materials = await resmat.json();

    const rescost = await fetch('http://23.105.246.179:7000/costsize/all')
    const costsize = await rescost.json();

    const resnews = await fetch('http://23.105.246.179:7000/news/main')
    const news = await resnews.json();

    const resitem = await fetch('http://23.105.246.179:7000/news/main/item')
    const item = await resitem.json();

    const resvideo = await fetch('http://23.105.246.179:7000/news/main/video')
    const video = await resvideo.json();

    return { props: { works, materials, costsize, news, item, video } }
}
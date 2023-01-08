import { useRouter } from 'next/router';
import classes from '../../../styles/article.module.scss';
import BlockSubNavNews from '../../ui/navigation/mobile/sub/blockSubNavNews';
import Link from "next/link";
import Image from "next/image";
import { format } from 'date-fns'


const BlockNewsMobile = (props) => {

    const { asPath, pathname } = useRouter();
    const item = asPath.split('/');
    const itemNews = "/" + item[1] + "/" + item[2];

    const menuItemMobile = [
        {title: 'все новости', uri: '/news'},
        {title: 'рынок', uri: '/news/marketnews'},
        {title: 'компания', uri: '/news/cnews'},
        {title: 'выставки', uri: '/news/show'},
        {title: 'статьи', uri: '/news/item'},
        {title: 'видео', uri: '/news/video'}
        ];

    return (
        <>
            <BlockSubNavNews uri = {asPath} item = {itemNews} />

            <div className={classes.hr}></div>

            {props.articles.map((article) => (
                <div key={article.id} className={classes.blockNewsMain}>
                <div className={classes.newsListMain}>
                <p>{format(new Date(article.dt), 'dd MM yyyy')}</p>
                <span>Раздел: <Link href={menuItemMobile[article.title_id].uri} title={menuItemMobile[article.title_id].title}>{menuItemMobile[article.title_id].title}</Link></span>
                <h2>
                    <Link href={`/news/[id]`} as={`/news/${article.id}`} title={article.title}>{article.title}</Link>
                </h2>
                <p className={classes.ctxNews}>{article.titlelong}</p>
                    {article.img_1 ? <Link href={`/news/[id]`} as={`/news/${article.id}`} title={article.title}><Image className={classes.responseImg} src={`/news/${article.img_1}.jpg`} width={"460"} height={"345"} alt={article.title} /></Link> : ""}
                    {article.video ? 
                <video className={classes.responseVideo} controls autoplay loop muted poster={`/video/poster/${article.video}_1.png`}>
                     <source src={`/video/${article.video}_1.mp4`} type="video/mp4"/>
                     <source src={`/video/${article.video}_2.webm`} type="video/webm" />
                </video> : ""}
                </div>
                </div>
            ))}
        </>
    )
}
export default BlockNewsMobile;
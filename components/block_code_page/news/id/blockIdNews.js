import classes from '../../../../styles/article_id.module.scss';
import Link from "next/link";
import Image from "next/image";
import { format } from 'date-fns'

const BlockIdNews = (props) => {

    const menuItem = [
        {title: 'все новости', uri: '/news'},
        {title: 'рынок', uri: '/news/marketnews'},
        {title: 'компания', uri: '/news/cnews'},
        {title: 'выставки', uri: '/news/show'},
        {title: 'статьи', uri: '/news/item'},
        {title: 'видео', uri: '/news/video'}
        ];

    return (
        <>
            <div className={classes.blockNewsMain}>
                <div className={classes.dtMainList}>
                    <p>{format(new Date(props.article.dt), 'dd.MM.yyyy')}</p>
                    <span>Раздел: <Link href={menuItem[props.article.title_id].uri} title={menuItem[props.article.title_id].title}>{menuItem[props.article.title_id].title}</Link></span>
                </div>
                    <div className={props.article.img_1 ? classes.newsListMainNotHr : classes.newsListMain}>
                    <h2>{props.article.title}</h2>
                    {props.article.img_1 ? <Image src={`/news/${props.article.img_1}.jpg`} width={"460"} height={"345"} alt={props.article.title} /> : ""}
                    {props.article.iframe ? <div dangerouslySetInnerHTML={{__html: props.article.iframe}} /> : ""}
                    <div dangerouslySetInnerHTML={{__html: props.article.body}} />
                </div>
            </div>  
        </>
    )
}
export default BlockIdNews;
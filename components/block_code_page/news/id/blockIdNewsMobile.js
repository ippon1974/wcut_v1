import classes from '../../../../styles/article_id.module.scss';
import BlockSubNavNews from '../../../ui/navigation/mobile/sub/blockSubNavNews';
import Link from "next/link";
import Image from "next/image";
import { useRouter } from 'next/router';
import { format } from 'date-fns'

const BlockIdNewsMobile = (props) => {

        const { asPath, pathname } = useRouter();
        const item = asPath.split('/');
        const itemNews = "/" + item[1] + "/" + item[2];

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
            <BlockSubNavNews uri = {asPath} item = {itemNews} />
            
            <div className={classes.blockNewsMain}>
                <div className={classes.newsListMain}>
                    <p>{format(new Date(props.article.dt), 'dd.MM.yyyy')}</p>
                    <span>Раздел: <Link href={menuItem[props.article.title_id].uri} title={menuItem[props.article.title_id].title}>{menuItem[props.article.title_id].title}</Link></span>
                    <h2>{props.article.title}</h2>
                    <div dangerouslySetInnerHTML={{__html: props.article.body}} />
                    {props.article.img_1 ? <Image className={classes.responseImg} src={`/news/${props.article.img_1}.jpg`} width={"460"} height={"345"} alt={props.article.title} /> : ""}
                    {props.article.iframe ? "" : ""}
                    {props.article.video ? "" : ""}
                </div>
            </div>
        </>
    )
}
export default BlockIdNewsMobile;
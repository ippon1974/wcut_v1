import classes from '../../../../styles/articleVideo.module.scss';
import Link from "next/link";
import Image from "next/image";
import { format } from 'date-fns'

const BlockVideoNews = (props) => {

    const item = [
        {title: 'все новости', uri: '/news'},
        {title: 'рынок', uri: '/news/marketnews'},
        {title: 'компания', uri: '/news/cnews'},
        {title: 'выставки', uri: '/news/show'},
        {title: 'статьи', uri: '/news/item'},
        {title: 'видео', uri: '/news/video'}
        ];

    return (
        <>
         {props.articles.map((article) => (
            <div  key={article.id} className={classes.blockNewsMain}>
                <div className={classes.dtMainList}>
                    <p>{format(new Date(article.dt),"dd MM yyyy")}</p>
                    <span>Раздел:  <Link href={item[article.title_id].uri} title={item[article.title_id].title}>{item[article.title_id].title}</Link></span>
                </div>
                <div className={classes.newsListMain}>
                    <h2>
                        <Link href={`/news/[id]`} as={`/news/${article.id}`} title={article.title}>
                            {article.title}
                        </Link>
                    </h2>                    
                    <p>{article.titlelong}</p>
                    <div className={classes.mainlinefooter}>
                        <span><Link href={`/news/[id]`} as={`/news/${article.id}`} title='Весь текст'>
                        <Image src="/blogarrow.png" width={"15"} height={"15"} alt="img" />
                        Весь текст</Link>
                        </span>
                    </div>
                </div>
            </div>
             ))}
        </>
    )
}
export default BlockVideoNews;
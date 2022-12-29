import classes from '../../styles/article.module.scss';
import Link from "next/link";
import Image from "next/image";
import { useRouter } from 'next/router';


const BlockNewsMobile = () => {

    const subMenuNews = [
        {id: '1', title: 'Рынок', uri: '/news/marketnews'},
        {id: '2', title: 'Компания', uri: '/news/cnews'},
        {id: '3', title: 'Выставки', uri: '/news/show'},
        {id: '4', title: 'Статьи', uri: '/news/item'},
        {id: '5', title: 'Видео', uri: '/news/video'}
    ];

    const { asPath, pathname } = useRouter();

    return (
        <>
            {asPath == '/news' ? <h2>Новости</h2> : <h2><Link href={'/news'}>Новости</Link></h2>}
            <ul>
                {subMenuNews.map(subMenuNews => 
                {return(
                        <li key={subMenuNews.id}><Link href={subMenuNews.uri} title={subMenuNews.title}>{subMenuNews.title}</Link></li>
                    )})}
            </ul>
            {/* <ul>
                <li><Link href={'/news/marketnews'} title={'Новости рынка'}>Рынок</Link></li>
                <li><Link href={'/news/cnews'} title={'Новости компании'}>Компания</Link></li>
                <li><Link href={'/news/show'} title={'Выставки'}>Выставки</Link></li>
                <li><Link href={'/news/item'} title={'Статьи'}>Статьи</Link></li>
                <li><Link href={'/news/video'} title={'Видео'}>Видео</Link></li>
            </ul> */}
            <div className={classes.hr}></div>
            <div className={classes.blockNewsMain}>
                <div className={classes.newsListMain}>
                    <p>05 March 2020</p>
                    <span>Раздел: <Link href={'#'}>статьи</Link></span>
                    <h2><Link href="#">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi quam quia ad nemo doloribus.</Link></h2>
                    <p className={classes.ctxNews}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis quaerat recusandae fugiat, odio deleniti autem pariatur excepturi commodi, numquam necessitatibus quos dicta doloremque ratione a.</p>
                </div>
            </div>

            <div className={classes.blockNewsMain}>
                <div className={classes.newsListMain}>
                    <p>05 March 2020</p>
                    <span>Раздел: <Link href={'#'}>статьи</Link></span>
                    <h2><Link href="#">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, nesciunt at?</Link></h2>
                    <p className={classes.ctxNews}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia temporibus corrupti voluptate, impedit quo harum?</p>
                </div>
            </div>

            <div className={classes.blockNewsMain}>
                <div className={classes.newsListMain}>
                    <p>05 March 2020</p>
                    <span>Раздел: <Link href={'#'}>статьи</Link></span>
                    <h2><Link href="#">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus, fuga eligendi?</Link></h2>
                    <p className={classes.ctxNews}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam possimus fugit perferendis labore eaque, veniam illum amet maiores?</p>
                </div>
            </div>

            <div className={classes.blockNewsMain}>
                <div className={classes.newsListMain}>
                    <p>05 March 2020</p>
                    <span>Раздел: <Link href={'#'}>статьи</Link></span>
                    <h2><Link href="#">Первая новость из базы данных приходит сюда. История CAM систем</Link></h2>
                    <p className={classes.ctxNews}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum adipisci similique quae rerum, voluptates totam modi id praesentium, sint omnis perspiciatis, veniam magnam soluta quaerat?</p>
                </div>
            </div>

        </>
    )
}
export default BlockNewsMobile;
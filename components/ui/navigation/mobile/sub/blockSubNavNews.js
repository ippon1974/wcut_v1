import Link from "next/link";

const blockSubNavNews = (props) => {

    const subMenuNews = [
        {id: '1', title: 'Рынок', uri: '/news/marketnews'},
        {id: '2', title: 'Компания', uri: '/news/cnews'},
        {id: '3', title: 'Выставки', uri: '/news/show'},
        {id: '4', title: 'Статьи', uri: '/news/item'},
        {id: '5', title: 'Видео', uri: '/news/video'}
    ];

    return (
        <>
           {props.uri === '/news' ? <h2>Новости</h2> : <h2><Link href={'/news'} title={'Все новости'}>Новости</Link></h2>}
           <ul>
                {subMenuNews.map(subMenuNews => {
                        if (props.item === subMenuNews.uri || props.uri === subMenuNews.item)
                        {
                            return (
                                <li key={subMenuNews.id}>
                                    {subMenuNews.title}
                                </li>
                                )
                            }else {
                                return (
                                        <li key={subMenuNews.id}>
                                            <Link title={subMenuNews.title} href={`${subMenuNews.uri}`}>{subMenuNews.title}</Link>
                                        </li>
                                    )
                                   }
                })}
           </ul>
        </>
    );

}
export default blockSubNavNews;
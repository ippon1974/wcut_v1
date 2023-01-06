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

                    {/* <h2>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi quam quia ad nemo doloribus.</h2>
                    <Image src={'/news/1033.jpg'} width={'300'} height={'150'} title={''} alt={''} />
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis quaerat recusandae fugiat, odio deleniti autem pariatur excepturi commodi, numquam necessitatibus quos dicta doloremque ratione a.</p>
                    <h3>Lorem ipsum dolor sit amet</h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta quibusdam aliquid eaque in esse adipisci labore! Voluptatem, distinctio dignissimos minus ut obcaecati, alias id maiores doloribus eius fugit soluta labore fugiat exercitationem dolorem aliquam necessitatibus atque eaque. Aliquam molestias consequuntur, provident illum id et. Dolor nihil et in cum eligendi modi enim sequi voluptates animi.</p> */}
                
                </div>
            </div>
        </>
    )
}
export default BlockIdNewsMobile;
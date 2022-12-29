import classes from '../../../styles/articleCompany.module.scss';
import BlockSubNavNews from '../../news/blockSubNavNews';
import Link from "next/link";
import Image from "next/image";
import { useRouter } from 'next/router';

const BlockCNewsMobile = () => {

    const { asPath, pathname } = useRouter();
    const item = asPath.split('/');
    const itemNews = "/" + item[1] + "/" + item[2];

    return (
        <>
            <BlockSubNavNews uri = {asPath} item = {itemNews} />
            
            <div className={classes.blockNewsMain}>
                <div className={classes.newsListMain}>
                    <p>05 March 2020</p>
                    <span>Раздел: <Link href={'#'}>компания</Link></span>
                    <h2><Link href="#">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi quam quia ad nemo doloribus.</Link></h2>
                    <p className={classes.ctxNews}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis quaerat recusandae fugiat, odio deleniti autem pariatur excepturi commodi, numquam necessitatibus quos dicta doloremque ratione a.</p>
                </div>
            </div>

            <div className={classes.blockNewsMain}>
                <div className={classes.newsListMain}>
                    <p>05 March 2020</p>
                    <span>Раздел: <Link href={'#'}>компания</Link></span>
                    <h2><Link href="#">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, nesciunt at?</Link></h2>
                    <p className={classes.ctxNews}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia temporibus corrupti voluptate, impedit quo harum?</p>
                </div>
            </div>

            <div className={classes.blockNewsMain}>
                <div className={classes.newsListMain}>
                    <p>05 March 2020</p>
                    <span>Раздел: <Link href={'#'}>компания</Link></span>
                    <h2><Link href="#">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus, fuga eligendi?</Link></h2>
                    <p className={classes.ctxNews}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam possimus fugit perferendis labore eaque, veniam illum amet maiores?</p>
                </div>
            </div>

            <div className={classes.blockNewsMain}>
                <div className={classes.newsListMain}>
                    <p>05 March 2020</p>
                    <span>Раздел: <Link href={'#'}>компания</Link></span>
                    <h2><Link href="#">Первая новость из базы данных приходит сюда. История CAM систем</Link></h2>
                    <p className={classes.ctxNews}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum adipisci similique quae rerum, voluptates totam modi id praesentium, sint omnis perspiciatis, veniam magnam soluta quaerat?</p>
                </div>
            </div>

        </>
    )
}
export default BlockCNewsMobile;
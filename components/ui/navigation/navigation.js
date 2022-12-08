import Link from "next/link";
import classes from '../../../components/ui/navigation/navigation.module.scss';
import { useRouter } from 'next/router';

const Navigation = () => {

    const { asPath, pathname } = useRouter();

    const menu = [
        {id: '1', title: 'Главная', uri: '/'},
        {id: '2', title: 'Услуги', uri: '/services'},
        {id: '3', title: 'Работы', uri: '/works'},
        {id: '4', title: 'Станки', uri: '/equipment'},
        {id: '5', title: 'Цены', uri: '/materials'},
        {id: '6', title: 'Технология', uri: '/technology'},
        {id: '7', title: 'Новости', uri: '/news', item: "news"},
        {id: '8', title: 'О компании', uri: '/about'},
        {id: '9', title: 'Контакты', uri: '/contact'}
        ];

    const item = asPath.split('/');
    const pathItem = item[1];

    return (
        <>

                <ul className={classes.menuContainer}>
                    <li className={`${classes.itemMenu}`}><Link href={'/'}>Главная</Link></li>
                    <li className={`${classes.itemMenu}`}><Link href={'/services'}>Услуги</Link></li>
                    <li className={`${classes.itemMenu}`}><Link href={'/works'}>Работы</Link></li>
                    <li className={`${classes.itemMenu}`}><Link href={'/equipment'}>Станки</Link></li>
                    <li className={`${classes.itemMenu}`}><Link href={'/materials'}>Цены</Link></li>
                    <li className={`${classes.itemMenu}`}><Link href={'/technology'}>Технология</Link></li>
                    <li className={`${classes.itemMenu}`}><Link href={'/news'}>Новости</Link></li>
                    <li className={`${classes.itemMenu} ${classes.activenew}`}><Link href={'/about'}>О компании</Link></li>
                    <li className={`${classes.itemMenu}`}><Link href={'/contact'}>Контакты</Link></li>
                </ul>
                {/* <ul className={`${classes.menunav}`}>
                {menu.map(menu => {
                    if (asPath === menu.uri || pathItem === menu.item)
                    {
                        return (
                        <li className={classes.active} key={menu.id}>
                            <Link title={menu.title} href={`${menu.uri}`}>{menu.title}</Link>
                        </li>)
                    }else {
                        return (
                            <li key={menu.id}>
                                <Link title={menu.title} href={`${menu.uri}`}>{menu.title}</Link>
                            </li>)
                    }

                })}
                </ul> */}
        </>
    )
}

export default Navigation;
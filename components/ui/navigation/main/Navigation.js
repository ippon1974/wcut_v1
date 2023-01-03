import Link from "next/link";
import classes from '../../../../components/ui/navigation/main/navigation.module.scss';
import { useRouter } from 'next/router';

const Navigation = () => {

    const { asPath, pathname } = useRouter();

    const menu = [
        {id: '1', title: 'Главная', uri: '/', item: ""},
        {id: '2', title: 'Услуги', uri: '/services', item: "services"},
        {id: '3', title: 'Работы', uri: '/works', item: "works"},
        {id: '4', title: 'Станки', uri: '/equipment', item: "equipment"},
        {id: '5', title: 'Цены', uri: '/materials', item: "materials"},
        {id: '6', title: 'Технология', uri: '/technology', item: "technology"},
        {id: '7', title: 'Новости', uri: '/news', item: "news", item: "news"},
        {id: '8', title: 'О компании', uri: '/about', item: "about"},
        {id: '9', title: 'Контакты', uri: '/contact', item: "contact"}
        ];

    const item = asPath.split('/');
    const pathItem = item[1];

    return (
        <>
                <ul className={classes.menuContainer}>
                {menu.map(menu => {
                    if (asPath === menu.uri || pathItem === menu.item)
                    {
                        return (
                            <li className={`${classes.itemMenu} ${classes.activenew}`} key={menu.id}>
                                <Link title={menu.title} href={`${menu.uri}`}>{menu.title}</Link>
                            </li>)
                        }else {
                            return (
                                <li className={`${classes.itemMenu}`} key={menu.id}>
                                    <Link title={menu.title} href={`${menu.uri}`}>{menu.title}</Link>
                                </li>)
                        }

                    })}
                </ul>
        </>
    )
}

export default Navigation;
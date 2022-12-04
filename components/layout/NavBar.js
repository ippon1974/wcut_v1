import Link from "next/link";
import { useRouter } from 'next/router';

const NavBar = () => {

    const { asPath, pathname } = useRouter();

    const menu = [
        {id: '1', title: 'Главная', uri: '/'},
        {id: '2', title: 'Услуги', uri: '/services'},
        {id: '3', title: 'Работы', uri: '/works'},
        {id: '4', title: 'Станки', uri: '/equipment'},
        {id: '5', title: 'Цены', uri: '/materials'},
        {id: '6', title: 'Технология', uri: '/technology'},
        {id: '7', title: 'Новости', uri: '/news'},
        {id: '8', title: 'О компании', uri: '/about'},
        {id: '9', title: 'Контакты', uri: '/contact'}
    ];

    return(
        <>
            <div className="NavBar">
                <ul>
                    {menu.map(menu => {
                        if (asPath === menu.uri)
                        {
                            return (
                                <li className={'text_p'} key={menu.id}>
                                    <Link title={menu.title} href={`${menu.uri}`}>{menu.title}</Link>
                                </li>)
                        }else {
                            return (
                                <li key={menu.id}>
                                    <Link title={menu.title} href={`${menu.uri}`}>{menu.title}</Link>
                                </li>)
                        }

                    })}
                </ul>
            </div>
        </>
    )
};

export default NavBar;
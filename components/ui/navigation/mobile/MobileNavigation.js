import Link from "next/link";
import classes from '../../../../components/ui/navigation/mobile/navigationMobile.module.scss'

const MobileNavigation = (props) => {

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

    return (
        <>
          <div className={classes.hamburger-menu}>
                <input id={classes.menu__toggle} type="checkbox" />
                <label className={classes.menu__btn} for={classes.menu__toggle}>
                    <span></span>
                </label>

            <ul className={classes.menu__box}>
                <li><Link className={classes.menu__item} href={'/'} title="Главная">Главная</Link></li>
                <li><Link className={classes.menu__item} href={'/services'}  title="Услуги">Услуги</Link></li>
                <li><Link className={classes.menu__item} href={'/works'}  title="Работы">Работы</Link></li>
                <li><Link className={classes.menu__item} href={'/equipment'} title="Станки">Станки</Link></li>
                <li><Link className={classes.menu__item} href={'/materials'}  title="Цены">Цены</Link></li>
                <li><Link className={classes.menu__item} href={'/technology'}  title="Технология">Технология</Link></li>
                <li><Link className={classes.menu__item} href={'/news'}  title="Новости">Новости</Link></li>
                <li><Link className={classes.menu__item} href={'/about'}  title="О компании">О компании</Link></li>
                <li><Link className={classes.menu__item} href={'/contact'}  title="Контакты">Контакты</Link></li>
            </ul>
          </div>
        </>
    )
}
export default MobileNavigation;
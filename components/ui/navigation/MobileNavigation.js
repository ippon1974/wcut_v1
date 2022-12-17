const MobileNavigation = () => {

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
         <p>Mobil Nav</p>
        </>
    )
}
export default MobileNavigation;
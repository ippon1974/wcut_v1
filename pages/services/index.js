import {MainLayout} from "../../components/MainLayout";

export default function Services() {
    return(

        <MainLayout title={'Услуги'}>

            <div id="page-wrapper">
                <div id="header">
                    <div className={"section clearfix"}>
                        <a href="/" title="Сивек Water Jet" id="logo"><img src="/App_Themes/ThemeDef/sites/default/files/logo.jpg" alt="Сивек Water Jet" /></a>
                        <div className={"region region-header"}>
                            <div id="block-block-2" className={"block block-block first last odd"}>
                                <div className={"content"}>
                                    <div>
                                        <h2>Гидроабразивная резка в Москве</h2>
                                        <h3>Металл, стекло, камень, агломерат, полимеры, пластик, керамика.</h3>
                                    </div>
                                    <p>140080 ул. Карла Маркса д. 117'Б', офис № 503 Люберецкий р-н, пос. Красково, МО.
                                        Территория института &laquo;ВНИИСТРОМ&raquo;</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div id="navigation">
                    <div className={"section clearfix"}>
                        <h2 className={"element-invisible"}>Главное меню</h2>
                    </div>
                </div>


                </div>

        </MainLayout>
    );
}
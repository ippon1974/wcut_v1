import Header from "./Header";
import NavBar from "./NavBar";
import Footer from "./Footer";

const Layout = props => (
    <div className="Layout">
        <Header />
        <div className="Content">
            {props.children}
        </div>
        <NavBar />
        <Footer />
    </div>
);

export default Layout;
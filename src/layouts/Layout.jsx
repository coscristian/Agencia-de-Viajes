const { default: NavBar } = require("components/NavBar")


const Layout = ({children}) => {
    return (
        <div>
            <NavBar />
            <main>{children}</main>
        </div>
    );
}

export default Layout;
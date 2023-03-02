import Sidebar from "components/Sidebar";
import { Outlet } from "react-router-dom";

const { default: NavBar } = require("components/NavBar")

const Layout = () => {
    return (
        <div>
            <NavBar />
            <main><Outlet /></main>
        </div>
    );
}

export default Layout;
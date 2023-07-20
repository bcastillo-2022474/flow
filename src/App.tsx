// import "./App.scss";
// import Footer from "./components/footer/footer.component.tsx";
// import { Outlet } from "react-router-dom";

import HeaderComponent from "./components/header/header.component.tsx";
import { Outlet } from "react-router-dom";
import SidebarComponent from "./components/sidebar/sidebar.component.tsx";

function App() {
    return (
        <div className="h-screen flex primary-background font-regular text-[--white] overflow-hidden">
            <SidebarComponent></SidebarComponent>
            <div className="flex flex-col grow">
                <HeaderComponent></HeaderComponent>
                <div className="h-[calc(100%-(100%/12))]">
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
}

export default App;

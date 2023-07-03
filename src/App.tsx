import "./App.scss";
import Footer from "./components/footer/footer.component.tsx";
import {Outlet} from "react-router-dom";


function App() {
    return (
        <div className="grid-container">
            <header className="header sticky top-0 flex items-center px-2">
                <span className="text-4xl primary-color-bold font-bold">Projects</span>
            </header>
            <main className="main overflow-y-scroll">
                <Outlet></Outlet>
            </main>
            <footer className="footer sticky bottom-0">
                <Footer></Footer>
            </footer>
        </div>
    );
}

export default App;

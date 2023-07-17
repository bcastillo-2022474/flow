import "./App.scss";
import Footer from "./components/footer/footer.component.tsx";
import { Outlet } from "react-router-dom";

function App() {
    return (
        <div className="grid-container">
            <header className="sticky top-0 z-10 flex items-center px-2 header">
                <span className="text-4xl font-bold primary-color-bold">
                    Projects
                </span>
            </header>
            {/*overflow-y-scroll*/}
            <main className="overflow-y-scroll main">
                <Outlet></Outlet>
            </main>
            <footer className="sticky bottom-0 footer">
                <Footer></Footer>
            </footer>
            {/*// THIS HELPS TO AVOID THE STICKY FOOTER MOVING FROM HIS POSITION*/}
            {/*// https://www.stevefenton.co.uk/blog/2022/12/mobile-position-sticky-issue/*/}
            <div className="fixed"></div>
        </div>
    );
}

export default App;

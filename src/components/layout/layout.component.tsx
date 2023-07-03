import Footer from "../footer/footer.component.tsx";


const LayoutComponent = () => {
    return (
        <div className="grid-container">
            <header className="header sticky top-0 flex items-center px-2">
                <span className="text-4xl primary-color-bold font-bold">Projects</span>
            </header>
            <main className="main overflow-y-scroll">
                {/* this should be the only element that shoudl change*/}
                {/*<DashBoard></DashBoard>*/}
            </main>
            <footer className="footer sticky bottom-0">
                <Footer></Footer>
            </footer>
        </div>
    )
}

export default LayoutComponent
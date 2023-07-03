import "./App.scss";
import Footer from "./components/footer/footer.component.tsx";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import DashBoard from "./components/dashboard/dahsboard.component.tsx";

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: Infinity,
            cacheTime: Infinity,
        },
    },
});

function App() {
    return (
        <>
            <QueryClientProvider client={queryClient}>
                <div className="grid-container">
                    <header className="header sticky top-0 flex items-center px-2">
                        <span className="text-4xl primary-color-bold font-bold">Projects</span>
                    </header>
                    <main className="main overflow-y-scroll">
                        <DashBoard></DashBoard>
                    </main>
                    <footer className="footer sticky bottom-0">
                        <Footer></Footer>
                    </footer>
                </div>
            </QueryClientProvider>
        </>
    );
}

export default App;

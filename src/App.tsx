import "./App.scss";
import Footer from "./components/footer/footer.component.tsx";
import {Outlet} from "react-router-dom";
import {DragDropContext} from "@hello-pangea/dnd";
import {useState} from "react";
import ProjectContext from "./contexts/ProjectContext.ts";
import {ColumnTasks} from "./contexts/ProjectContext.ts";

function App() {
    const [columnsTasks, setColumnsTasks] = useState<ColumnTasks[]>([]); // [{columnId: string},{},{}]

    return (
        <div className="grid-container">
            <header className="header sticky top-0 flex items-center px-2">
                <span className="text-4xl primary-color-bold font-bold">Projects</span>
            </header>
            <main className="main overflow-y-scroll">
                <ProjectContext.Provider value={{columnsTasks, setColumnsTasks}}>

                    <DragDropContext onDragEnd={(result) => {
                        if (!result.destination) return;
                        const column = columnsTasks?.find((column) => column?.columnId === result.source.droppableId);
                        if (!column) return;

                        const {tasks} = column;
                        const [reorderedItem] = tasks.splice(result.source.index, 1);
                        tasks.splice(result.destination.index, 0, reorderedItem);

                        setColumnsTasks([...columnsTasks, {columnId: column?.columnId, tasks}])
                    }}>
                        <Outlet></Outlet>
                    </DragDropContext>
                </ProjectContext.Provider>

            </main>
            <footer className="footer sticky bottom-0">
                <Footer></Footer>
            </footer>
        </div>
    );
}

export default App;

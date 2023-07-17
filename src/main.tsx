import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import App from "./App.tsx";
import "./index.css";
import "./variables.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DashBoard from "./components/dashboard/dashboard.component.tsx";
import ProjectViewComponent from "./components/project-view/project-view.component.tsx";
import TaskProvider from "./contexts/TaskProvider.tsx";
import NewTaskStatusProvider from "./contexts/newTaskStatusProvider.tsx";
import store from "./redux/store.ts";
// import TaskViewComponent from "./components/task-view/task-view.component.tsx";

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: Infinity,
            cacheTime: Infinity,
        },
    },
});

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "",
                element: <DashBoard />,
            },
            {
                path: "project/:id",
                element: (
                    <TaskProvider>
                        <NewTaskStatusProvider>
                            <ProjectViewComponent />
                        </NewTaskStatusProvider>
                    </TaskProvider>
                ),
                children: [
                    {
                        path: "task/:idTask",
                        element: (
                            <TaskProvider>
                                <NewTaskStatusProvider>
                                    <ProjectViewComponent />
                                </NewTaskStatusProvider>
                            </TaskProvider>
                        ),
                    },
                ],
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <Provider store={store}>
            <QueryClientProvider client={queryClient}>
                <RouterProvider router={router}></RouterProvider>
            </QueryClientProvider>
        </Provider>
    </React.StrictMode>
);

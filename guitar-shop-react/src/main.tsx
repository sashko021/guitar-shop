import React from 'react'
import './index.css'
import { createRoot } from "react-dom/client";

import {
    createBrowserRouter,
    RouterProvider,
    Route,
    Link,
} from "react-router-dom";
import Home from "./components/Home.tsx";
import Login from "./components/Login.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <Home/>
        ),
    },
    {
        path: "/login",
        element: (
            <Login/>
        ),
    },
]);


createRoot(document.getElementById('root')!).render(
    <RouterProvider router={router} />
);
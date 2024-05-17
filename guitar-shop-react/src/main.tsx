import React from 'react'
import './index.css'
import { createRoot } from "react-dom/client";

import {
    createBrowserRouter,
    RouterProvider,
    Route,
    Link, Routes,
} from "react-router-dom";
import Home from "./components/Home.tsx";
import Login from "./components/Login.tsx";
import ProductDetail from "./components/ProductDetail.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <Home/>
        ),
    },
    {
        path: "/products/:productId",
        element: (
            <ProductDetail/>
        ),
    },
    {
        path: "/login",
        element: (
            <Login/>
        ),
    },
]);

<Routes>
    <Route  path="/">
        <Home />
    </Route>

    <Route  path="products">
        <Route path=":productId" element={<ProductDetail/>}/>
    </Route>
</Routes>

createRoot(document.getElementById('root')!).render(
    <RouterProvider router={router} />
);
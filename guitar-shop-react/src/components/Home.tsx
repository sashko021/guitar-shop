import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Header from './Header'
import Content from "./Content.tsx"
import ProductDetail from "./ProductDetail.tsx"

function Home() {


    return (
        <>
        <div>
            <Header/>
        </div>
        <div>
            <Content/>
        </div>

            {/*<Routes>*/}
            {/*    <Route  path="/">*/}
            {/*        <Home />*/}
            {/*    </Route>*/}

            {/*    <Route  path="products">*/}
            {/*        <Route path=":productId" element={<ProductDetail/>}/>*/}
            {/*    </Route>*/}
            {/*</Routes>*/}
        </>
    )
}

export default Home;

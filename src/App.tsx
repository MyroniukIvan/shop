import React from 'react';
import './App.css';
import {Route, Routes} from "react-router-dom";
import {Navigation} from "./components/Navigation";
import ProductPage from "./pages/ProductPage";
import AboutProduct from "./pages/AboutProduct";



function App() {
    return (
        <>
            <Navigation />
            <Routes>
                <Route path="/" element={ <ProductPage /> } />
                <Route path="/about" element={ <AboutProduct /> } />
            </Routes>
        </>
    )
}

export default App;

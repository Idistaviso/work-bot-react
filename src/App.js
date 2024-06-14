import React from "react";
import './styles/Apps.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import About from "./pages/About";
import Posts from "./pages/Post";

function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="posts" element={<Posts/>}/>
                <Route path="about" element={<About/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App;

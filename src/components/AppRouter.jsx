import React from 'react';
import {Route, Routes} from "react-router-dom";
import Posts from "../pages/Post";
import About from "../pages/About";
import Error from "../pages/Error";

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/posts" element={<Posts/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/*" element={<Error/>}/>
        </Routes>
    );
};

export default AppRouter;
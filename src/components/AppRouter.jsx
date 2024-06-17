import React from 'react';
import {Route, Routes} from "react-router-dom";
import Posts from "../pages/Post";
import About from "../pages/About";
import Error from "../pages/Error";
import PostIdPage from "../pages/PostIdPage";

const AppRouter = () => {
    return (
        <Routes>
            <Route path="posts" element={<Posts/>}/>
            <Route path="posts/:id" element={<PostIdPage/>}/>
            <Route path="about" element={<About/>}/>
            <Route path="*" element={<Error/>}/>
        </Routes>
    );
};

export default AppRouter;
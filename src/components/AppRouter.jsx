import React from 'react';
import {Route, Routes} from "react-router-dom";
import {privateRoutes, publicRoutes} from "../router";

const AppRouter = () => {
    return (
        <Routes>
            {privateRoutes.map(route =>
                <Route
                element={route.element}
                path={route.path}
                exact={route.exact}
                />
            )}
            {publicRoutes.map(route =>
                <Route
                    element={route.element}
                    path={route.path}
                    exact={route.exact}
                />
            )}
        </Routes>
    );
};

export default AppRouter;
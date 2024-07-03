import React from 'react';
import {Routes, Route} from "react-router-dom";
import Dashboard from '../components/Dashboard';
import UpdateOne from '../components/UpdateOne';

const Main = (props) => {
    return(
        <Routes>
            <Route path={"/"} element={<Dashboard/>} />
            <Route path={"/update/:id"} element={<UpdateOne/>} />
        </Routes>
    );
}

export default Main;
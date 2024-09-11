import React from 'react';
import { Route, Routes } from 'react-router-dom';

// importing all compoment  modules
import Home from './Home.js';

const Main = () => {
    return(
        <Routes>
            <Route path="/" Component={<Home/>}/>
        </Routes>
    );
}

export default Main;
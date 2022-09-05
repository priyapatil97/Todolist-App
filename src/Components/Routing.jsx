import React from "react";
import Category from "./Category";
import Schedule from "./Schedule";
import {Routes, Route} from "react-router-dom";



const Routing = () => {
    return(
        <>
            <Routes>
                <Route exact path="/" element={<Category />}/>
                <Route exact path="/category" element={<Category />}/>
                <Route exact path="/schedule" element={<Schedule />}/>

                
            </Routes>
        </>
    );
}

export default Routing;
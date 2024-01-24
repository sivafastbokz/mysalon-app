import React from 'react';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Home from '../container/Home';
import Service from '../container/Service';

function Routers(){
    return(
        <>
         <Router>
            <Routes>
                <Route path='/mysalon' element={<Home/>}></Route>
                <Route path='/mysalon/service' element={<Service/>}></Route>
            </Routes>
         </Router>

        </>
    )
}

export default Routers;






import React from 'react';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import SignUp from '../container/SignUp';
import SignIn from '../container/SignIn';
import Home from '../container/Home';
import Service from '../container/Service';
import About from '../container/About';
import Booking from '../container/Booking';
import Dashboard from '../container/Dashboard';

function Routers(){
    return(
        <>
         <Router>
            <Routes>
                <Route path='/mysalon/signup' element={<SignUp/>}></Route>
                <Route path='/mysalon/signin' element={<SignIn/>}></Route>
                <Route path='/mysalon' element={<Home/>}></Route>
                <Route path='/mysalon/service' element={<Service/>}></Route>
                <Route path='/mysalon/about' element={<About/>}></Route>
                <Route path='/mysalon/bookings' element={<Booking/>}></Route>
                <Route path='/mysalon/dashboard' element={<Dashboard/>}></Route>
            </Routes>
         </Router>
        </>
    )
}

export default Routers;
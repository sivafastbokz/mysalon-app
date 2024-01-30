import React from 'react';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import SignUp from '../container/SignUp';
import SignIn from '../container/SignIn';
import Home from '../container/Home';
import Service from '../container/Service';
import Team from '../container/Team';
import About from '../container/About';

function Routers(){
    return(
        <>
         <Router>
            <Routes>
                <Route path='/mysalon/signup' element={<SignUp/>}></Route>
                <Route path='/mysalon/signin' element={<SignIn/>}></Route>
                <Route path='/mysalon' element={<Home/>}></Route>
                <Route path='/mysalon/service' element={<Service/>}></Route>
                <Route path='/mysalon/team' element={<Team/>}></Route>
                <Route path='/mysalon/about' element={<About/>}></Route>
            </Routes>
         </Router>

        </>
    )
}

export default Routers;






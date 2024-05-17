import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Banner from './componentes/banner';
import Navbar from './componentes/navbar';
import Welcomesection from './componentes/welcomesection';
import Chef from './componentes/chef';
import Testimonials from './componentes/testimonials';
import Menus from './componentes/menus';
import Contac from './componentes/Contac';
import Schedules from './componentes/schedules';
import Footers from './componentes/footers';
import Login from './componentes/login';

function App() {
    return (
        <Router>
            <div>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                </Routes>
            </div>
        </Router>
    );
}

function Home() {
    return (
        <>
            <Banner />
            <Welcomesection />
            <Chef />
            <Testimonials />
            <Menus />
            <Contac />
            <Schedules />
            <Footers />
        </>
    );
}

export default App;

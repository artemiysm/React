import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';  // Используем Routes вместо Switch
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Contacts from './page/Contacts'; 
import Employment from './page/Employment'
import Sign from './page/Sign';
import './styles/App.css';
import Course from './page/Course';
import icon1 from './img/mark.png'; 
import icon2 from './img/mark.png'; 
import icon3 from './img/mark.png'; 
import icon4 from './img/mark.png'; 
import icon5 from './img/mark.png'; 
import icon6 from './img/mark.png'; 
import Home from './page/Home';

const App = () => {
    return (
        <Router>
                {/* Один раз рендерим Header, Sidebar и Footer */}
                <Header />
                
            {/* Роутинг */}
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path="/course" element={<Course />} />
                <Route path="/contacts" element={<Contacts />} />
                <Route path='/employment' element={<Employment/>} />
                <Route path="/sign" element={<Sign />} />
            </Routes>
        </Router>
    );
};

export default App;
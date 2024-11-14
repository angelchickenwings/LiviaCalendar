import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import HeaderContainer from './containers/HeaderContainer';
import HomeContainer from './containers/HomeContainer';
import CalendarContainer from './containers/CalendarContainer';
import Error from './views/Error';

import './App.css';

function App() {
    return (
        <div className="App">
            <HeaderContainer />
            <Routes>
                <Route path="/" element={<Navigate to="/home" replace />} />
                <Route path="/home" element={<HomeContainer />} />
                <Route path="/calendar" element={<CalendarContainer />} />
                <Route path="*" element={<Error />} />
            </Routes>
        </div>
    );
}

export default App;

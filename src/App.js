import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { ToastContext } from './contexts/toast-context';
import { WeatherContext } from './contexts/weather-context';

import Sidebar from './components/sidebar/sidebar';
import Toast from './components/toast/toast';
import Clients from './components/clients/clients';
import Team from './components/team/team';
import Contacts from './components/contacts/contacts';
import Weather from './components/weather/weather';

import './App.scss';

function NotFound() {
    return (
        <p style={{
            fontSize: '4em',
            textAlign: 'center',
            margin: 'auto',
        }}>Are you lost?</p>
    )
}

function App() {
    const [toasts, setToasts] = useState([]);
    const [weather, setWeather] = useState({});

    return (
        <ToastContext.Provider value={{toasts, setToasts}}>
            <WeatherContext.Provider value={{weather, setWeather}}>
                <Router>
                    <Toast />
                    <main className="main">
                        <Sidebar />
                        <div className="content">
                            <Routes>
                                <Route exact path="/" element={<p>Home</p>} />
                                <Route path="/clients" element={<Clients />} />
                                <Route path="/team" element={<Team />} />
                                <Route path="/contacts" element={<Contacts />} />
                                <Route path="/weather" element={<Weather />} />
                                <Route path="*" element={<NotFound />} />
                            </Routes>
                        </div>
                    </main>
                </Router>
            </WeatherContext.Provider>
        </ToastContext.Provider>
    );
}

export default App;

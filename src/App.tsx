// React libraries.
import React from 'react';

import {
    BrowserRouter as Router,
    Routes,
    Route
} from 'react-router-dom';

import '../public/assets/scss/index.scss';
import 'bootstrap';

import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/Home';
import Servers from './pages/Servers';
import OurTeam from './pages/OurTeam';

import Error404 from './pages/404';

class App extends React.Component {
    render = (): React.ReactNode => (
        <div id="app" className="text-light d-flex flex-column h-100">
            <Header />
            <Router>
                <Routes>
                    {/* Landing Page */}
                    <Route path="/" element={<Home />} />

                    {/* Other Pages */}
                    <Route path="/servers" element={<Servers />} />
                    <Route path="/our-team" element={<OurTeam />} />

                    {/* 404 Handler */}
                    <Route path="/*" element={<Error404 />} />
                </Routes>
            </Router>
            <Footer />
        </div>
    );
}

export default App;

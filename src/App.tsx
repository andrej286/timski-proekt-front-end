import React from 'react';
import {Route, Routes, BrowserRouter} from 'react-router-dom';
import {LogIn} from "./pages/auth/log-in";
import {SignUp} from "./pages/auth/sign-up";
import {Home} from "./pages/home/home";
import {LandingPage} from "./pages/landing-page/landing-page";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LandingPage/>}/>
                <Route path="/home" element={<Home/>}/>
                <Route path="/sign-up" element={<SignUp/>}/>
                <Route path="/log-in" element={<LogIn/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;

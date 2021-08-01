import React from 'react';
import {BrowserRouter as AppRouter, Route, Link} from "react-router-dom";
import About from './About';
import Contact from './Contact';
import Home from './Home';
import Services from './Services';

const Router = () => {
    return (
        <AppRouter className="App">
            <nav className="nav">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/services">Services</Link>
            </nav>

            <hr />

        <Route exact path= "/" component={Home}></Route>
        <Route path = "/about" component={About}></Route>
        <Route path = "/contact" component={Contact}></Route>
        <Route path = "/services" component={Services}></Route>
        </AppRouter>
    );
}

export default Router;

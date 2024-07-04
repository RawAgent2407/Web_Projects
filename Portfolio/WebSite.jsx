import React from "react"
import {BrowserRouter as Router, Link, Routes, Route} from "react-router-dom"
import {HashLink} from "react-router-hash-link"


import "./style.scss"
import Home from "./Home";
import Footer from "./Footer";
import Contact from "./Contact";
import Services from "./Services";


const WebSite = () =>{
    return(
        <Router>
            <nav>
                <h1>Hello World</h1>
                <main>
                    <HashLink to={"/#home"}>Home</HashLink>
                    <Link to={"/contact"}>Contact</Link>
                    <HashLink to={"/#about"}>About</HashLink>
                    <HashLink to={"/#brands"}>Brands♾</HashLink>
                    <Link to={"/services"}>Services</Link>
                </main>
            </nav>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/contact" element={<Contact/>}/>
                <Route path="/services" element={<Services/>}/>
            </Routes>
            <Footer />
        </Router>
    )
}

export default WebSite
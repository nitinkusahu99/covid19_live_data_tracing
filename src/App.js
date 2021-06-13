import React, { Suspense, lazy, useEffect, useState } from 'react';
import { Navbar, Nav } from "react-bootstrap"
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import cimg from "../src/images/coronaimg.png"
const Home = lazy(() => import('./components/Home'));
const Vaccination = lazy(() => import('./components/Vaccination'));
const IndiaCases = lazy(() => import('./components/IndiaCases'));

function App() {
    const [loading, setloading] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setloading(false);
        }, 3000)
    }, [])
    return (
        <>

            {
                loading ? <div id="preloader"></div> : <Router>
                    <div className="container" id="covid19-meter">
                        <Navbar bg="light" expand="lg">
                            <Link to="/" style={{ textDecoration: "none" }}>
                                <Navbar.Brand className="bg_img" href="#">
                                    <img src={cimg} alt="error" /> Covid-19 Meter
                                </Navbar.Brand>
                            </Link>
                            <Navbar.Toggle aria-controls="my-navbar" className="navbar_toggle" />
                            <Navbar.Collapse className="justify-content-end navbar_collapse" id="my-navbar">
                                <Nav className="mr-auto">
                                    <Nav.Link href="#" className="active"><Link className="nav_style" to="/">home</Link></Nav.Link>
                                    <Nav.Link href="#"><Link className="nav_style" to="/vaccination">Vaccination</Link></Nav.Link>
                                    <Nav.Link href="#"><Link className="nav_style" to="/india">india meter</Link></Nav.Link>
                                </Nav>
                            </Navbar.Collapse>
                        </Navbar>
                        <Switch>
                            <Route path="/india"><Suspense fallback={<div className="text-center" style={{ color: "green" }}>loading....</div>}><IndiaCases /></Suspense></Route>
                            <Route path="/vaccination"><Suspense fallback={<div className="text-center" style={{ color: "green" }}>loading....</div>}><Vaccination /></Suspense></Route>
                            <Route exact path="/"><Suspense fallback={<div></div>}><Home /></Suspense></Route>
                        </Switch>
                    </div>

                </Router>
            }

        </>
    );
}

export default App;
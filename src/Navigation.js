import React, { Component } from 'react';
import { FaUsers } from 'react-icons/fa';
import { Link } from '@reach/router';
import Sidebar from "react-sidebar";
import { FaBars } from 'react-icons/fa';
import { FaInfoCircle } from 'react-icons/fa';
import { FaEnvelopeOpenText } from 'react-icons/fa';
import { FaHome } from 'react-icons/fa';
import { FaBlind } from 'react-icons/fa';
import IconButton from "@material-ui/core/IconButton/IconButton";
import { FaFistRaised } from 'react-icons/fa';


class Navigation extends Component {

    constructor(props) {
        super(props);
        this.state = {
            sidebarOpen: true
        };
        this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
    }
    componentDidUpdate(prevProps) {
        // Typical usage (don't forget to compare props):
        if (this.state.sidebarOpen) {
            document.getElementById("sideNav").style.width = "300px";
            document.getElementById("sideNav").style.zIndex= "10000";
        } else {
            document.getElementById("sideNav").style.width = "0px";
        }
    }
    onSetSidebarOpen(open) {
        this.setState({ sidebarOpen: open });
        document.getElementById("sideNav").style.width = "300px";
    }

    onSetSideOpenbarClose = () => {
        this.setState({ sidebarOpen: false });
    }

    render() {
        const { user, logOutUser } = this.props;

        return (
            <div>
{/*Side nav-bar                */}

<div id="sideNav" className="sticky-top" style={{
    height: "100vh",
    position: "fixed"
}}>
                <Sidebar
                    sidebar={
                        <div className="h-100 bg-light">
                            <div>

                                <h2 className="text-dark m-2 text-center" ><FaBlind className="text-dark"></FaBlind>Menu</h2>
                                <div style={{
                                    margin: "0px 0px",
                                    height: "2px",
                                    backgroundColor: "rgb(43,48,48)"
                                }}></div>
                            </div>
{/*Side nav categories*/}   <div className="btn btn-light">
                                <Link to="/" className="navbar-brand d-block" onClick={this.onSetSideOpenbarClose}>
                                    <FaHome className="mr-1 color text-secondary" /> Inicio
                                </Link>
                                {/*<Link to="/" className="navbar-brand m-1 d-block" onClick={this.onSetSideOpenbarClose}>*/}
                                    {/*<FaEnvelopeOpenText className="mr-1 color text-secondary " /> Informacion*/}
                                {/*</Link>*/}
                                <Link to="/contacto" className="navbar-brand m-1 d-block" onClick={this.onSetSideOpenbarClose}>
                                    <FaInfoCircle className="mr-1 color text-secondary " /> Contacto
                                </Link>
                                <Link to="/instalaciones" className="navbar-brand m-1 d-block" onClick={this.onSetSideOpenbarClose}>
                                    <FaHome className="mr-1 color text-secondary " /> Instalaciones
                                </Link>
                            </div>
                            <div className="fixed-bottom align-bottom">
                                {!user && (
                                    <Link className="nav-item nav-link btn btn-danger font-weight-bold" to="/login">
                                        Ingresar
                                    </Link>
                                )}
                                {user && (
                                    <Link
                                        className="nav-item nav-link btn btn-warning font-weight-bold"
                                        to="/login"
                                        onClick={e => logOutUser(e)}>
                                        Salir
                                    </Link>
                                )}
                            </div>
                        </div>
                    } //endsidebar
                    open={this.state.sidebarOpen}
                    onSetOpen={this.onSetSidebarOpen}
                    styles={{ sidebar: { background: "white",float: "left", overflow: "hidden"}

                    }}>
                </Sidebar>
</div>

{/*Main nav-bar*/}
                <div style={{overflow: "hidden",clear:"both",padding:"28px"}} >
                    <nav className="navbar fixed-top text-dark bg-light site-nav family-sans navbar-expand bg-danger navbar-dark">
                        <div className="container">
                            {/*<Buttn onClick={() => this.onSetSidebarOpen(true)}>*/}
                            {/*<FaBars/>Open sidebar*/}
                            {/*</Buttn>*/}
                            <IconButton color="primary" className="mr-2" component="span" onClick={() => this.onSetSidebarOpen(true)}>
                                <FaBars />
                            </IconButton>
                            <Link to="/" className="navbar-brand font-weight-bold text-dark">
                                <FaFistRaised className="mr-1" /> Round One Box & Fitness
                            </Link>
                            <div className="navbar-nav">
                                {user && (
                                    <Link className="nav-item nav-link text-dark" to="/meetings">
                                        meetings
                                    </Link>
                                )}
                                {!user && (
                                    <Link className="nav-item nav-link font-weight-bold btn btn-dark mr-2" to="/login">
                                        Ingresar
                                    </Link>
                                )}
                                {!user && (
                                    <Link className="nav-item nav-link font-weight-bold text-dark btn btn-outline-dark" to="/register">
                                        Registrar
                                    </Link>
                                )}
                                {user && (
                                    <Link
                                        className="nav-item nav-link font-weight-bold btn btn-danger"
                                        to="/login"
                                        onClick={e => logOutUser(e)}>
                                        Salir
                                    </Link>
                                )}

                            </div>
                        </div>
                    </nav>
                </div>

            </div>

        );
    }
}
export default Navigation;

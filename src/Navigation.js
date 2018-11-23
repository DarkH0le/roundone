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

    onSetSidebarOpen(open) {
        this.setState({ sidebarOpen: open });
    }

    onSetSideOpenbarClose = () => {
        this.setState({ sidebarOpen: false });
    }


    render() {
        const { user, logOutUser } = this.props;

        return (
            <div>
{/*Side nav-bar                */}
                <Sidebar
                    sidebar={
                        <div className="h-100 bg-light">
                            <div className="mx-auto">

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
                                <Link to="/" className="navbar-brand m-1 d-block" onClick={this.onSetSideOpenbarClose}>
                                    <FaEnvelopeOpenText className="mr-1 color text-secondary " /> Informacion
                                </Link>
                                <Link to="/" className="navbar-brand m-1 d-block" onClick={this.onSetSideOpenbarClose}>
                                    <FaInfoCircle className="mr-1 color text-secondary " /> Contacto
                                </Link>
                                <Link to="/" className="navbar-brand m-1 d-block" onClick={this.onSetSideOpenbarClose}>
                                    <FaHome className="mr-1 color text-secondary " /> Instructores
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
                    styles={{ sidebar: { background: "white"}
                    }}
                children={<div>hola</div>}>
                </Sidebar>

{/*Main nav-bar*/}
                <nav className="site-nav family-sans navbar navbar-expand bg-primary navbar-dark higher">
                    <div className="container-fluid">
                        {/*<Buttn onClick={() => this.onSetSidebarOpen(true)}>*/}
                            {/*<FaBars/>Open sidebar*/}
                        {/*</Buttn>*/}
                        <IconButton color="primary" className="mr-2" component="span" onClick={() => this.onSetSidebarOpen(true)}>
                            <FaBars />
                        </IconButton>
                        <Link to="/" className="navbar-brand font-weight-bold">
                            <FaFistRaised className="mr-1" /> Round One Box & Fitness
                        </Link>
                        <div className="navbar-nav ml-auto">
                            {user && (
                                <Link className="nav-item nav-link" to="/meetings">
                                    meetings
                                </Link>
                            )}
                            {!user && (
                                <Link className="nav-item nav-link" to="/login">
                                    log in
                                </Link>
                            )}
                            {!user && (
                                <Link className="nav-item nav-link" to="/register">
                                    register
                                </Link>
                            )}
                            {user && (
                                <Link
                                    className="nav-item nav-link"
                                    to="/login"
                                    onClick={e => logOutUser(e)}>
                                    log out
                                </Link>
                            )}

                        </div>
                    </div>
                </nav>
            </div>

        );
    }
}
export default Navigation;

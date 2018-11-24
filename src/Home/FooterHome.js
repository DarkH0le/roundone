import React, { Component } from 'react';
import { Link } from '@reach/router';
import { FaInstagram } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';


class FooterHome extends Component {
    render() {
        const { userName, logOutUser } = this.props;

        return (
            <footer className="page-footer font-small blue-grey lighten-5">

                <div style={{backgroundColor: "#21d192"}}>
                    <div className="container">

                        <div className="row py-4 d-flex align-items-center">

                            <div className="col-md-6 col-lg-5 text-center text-md-left mb-4 mb-md-0">
                                <h6 className="mb-0 display-5">Encuentranos en:</h6>
                            </div>
                            <div className="col-md-6 col-lg-7 text-center text-md-right">

                                <a className="fb-ic secondary-text mr-5">
                                    <a href="https://www.instagram.com/roundonebox" target="_blank"><FaInstagram size="2em" className="fas fa-stroopwafel fa-2x "/> Instagram</a>
                                </a>
                                <a className="tw-ic mr-3">
                                    <a href="https://www.facebook.com/roundonebox/" target="_blank"><FaFacebook size="2em" className="fas fa-stroopwafel fa-2x"/> Instagram</a>
                                </a>
                            </div>

                        </div>

                    </div>
                </div>

                <div className="container text-center text-md-left mt-5">

                    <div className="row mt-3 dark-grey-text">

                        <div className="col-md-3 col-lg-4 col-xl-3 mb-4">

                            <h6 className="text-uppercase font-weight-bold">Round-One</h6>
                            <hr className="teal accent-3 mb-4 mt-0 d-inline-block mx-auto" style={{width: "60px"}}/>
                                <p>Round One no es su gimnasio ordinario. Proporcionamos una de las mejores y más gratificantes formas de ejercicio, especializandonos en el deporte del boxeo y el acondicionamiento fisico, obteniendo resultados de una manera rápida, divertida y efectiva.</p>

                        </div>

                        {/*<div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">*/}

                            {/*<h6 className="text-uppercase font-weight-bold">Products</h6>*/}
                            {/*<hr className="teal accent-3 mb-4 mt-0 d-inline-block mx-auto" style={{width: "60px"}}/>*/}
                                {/*<p>*/}
                                    {/*<a className="dark-grey-text" href="#!">MDBootstrap</a>*/}
                                {/*</p>*/}
                                {/*<p>*/}
                                    {/*<a className="dark-grey-text" href="#!">MDWordPress</a>*/}
                                {/*</p>*/}
                                {/*<p>*/}
                                    {/*<a className="dark-grey-text" href="#!">BrandFlow</a>*/}
                                {/*</p>*/}
                                {/*<p>*/}
                                    {/*<a className="dark-grey-text" href="#!">Bootstrap Angular</a>*/}
                                {/*</p>*/}

                        {/*</div>*/}

                        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">

                            <h6 className="text-uppercase font-weight-bold">Info</h6>
                            <hr className="teal accent-3 mb-4 mt-0 d-inline-block mx-auto" style={{width: "60px"}}/>
                                <p>
                                    <a className="dark-grey-text" target="_blank" href="https://www.soloboxeo.com/historia/" target="_blank">Que es el Boxeo? </a>
                                </p>
                                <p>
                                    <a className="dark-grey-text" target="_blank" href="https://deporteysalud.hola.com/complementosdeportivos/20140601/elegir-guantes-boxeo/">Escoger guantes</a>
                                </p>
                                <p>
                                    <a className="dark-grey-text"  target="_blank" href="https://www.amazon.com.mx/s/ref=nb_sb_noss_1?__mk_es_MX=%C3%85M%C3%85%C5%BD%C3%95%C3%91&url=search-alias%3Daps&field-keywords=guantes+boxeo">Guantes en Amazon</a>
                                </p>

                        </div>

                        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">

                            <h6 className="text-uppercase font-weight-bold">Contacto</h6>
                            <hr className="teal accent-3 mb-4 mt-0 d-inline-block mx-auto" style={{width: "60px"}}/>
                                <p>
                                    <i className="fa fa-home mr-3"></i>Av Camino real a colima #546
                                    Tlajomulco, Jalisco, Mexico</p>
                                <p>
                                    <i className="fa fa-envelope mr-3"></i>roundonebox@hotmail.com</p>
                                <p>
                                    <i className="fa fa-phone mr-3"></i> 33 1918 3986</p>
                                <p>
                                    <i className="fa fa-print mr-3"></i> Horario L-V: 6:00 - 13:00 : 17:00 - 22:00
                                </p>

                        </div>
                    </div>
                </div>
                <div className="footer-copyright text-center text-black-50 py-3">© 2018 RoundOne:
                    <a className="dark-grey-text" href="https://mdbootstrap.com/education/bootstrap/"> https://roundone.herokuapp.com/</a>
                </div>

            </footer>
        );
    }
}

export default FooterHome;

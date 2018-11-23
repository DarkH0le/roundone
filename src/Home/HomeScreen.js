import React, { Component } from 'react';
import MenuBanner from "./MenuBanner";
import GoogleMaps from "./GoogleMaps";
import HomeGallery from "./HomeGallery";
import Carrucel from "../Carrucel";
import { FaPhone } from 'react-icons/fa';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { FaEnvelopeOpen } from 'react-icons/fa';
import FooterHome from "./FooterHome";


class HomeScreen extends Component {

    constructor(props) {
        super(props);

    }

    render() {
        const { user } = this.props;

        const biggerLead = {
            fontSize: 1.4 + 'em',
            fontWeight: 200
        };

        return (
            <div>
                <Carrucel ></Carrucel>
                <div style={{
                    margin: "8px 64px",
                    height: "2px",
                    backgroundColor: "rgb(43,48,48)"
                }}></div>
                <h2 id="visit" className="display-4 text-info text-center">Visitanos</h2>
                {/*<div className="container-fluid">*/}
                    {/*<span style={{display:"inline", width: '30%'}}>*/}
                        {/*<div className="row text-center">*/}
                            {/*<div>*/}
                                {/*<a className="btn-floating blue accent-1"><i className="fa fa-map-marker"></i></a>*/}
                                {/*<p>San Francisco, CA 94126</p>*/}
                                {/*<p>United States</p>*/}
                            {/*</div>*/}

                            {/*<div className="col-md-4">*/}
                                {/*<a className="btn-floating blue accent-1"><i className="fa fa-phone"></i></a>*/}
                                {/*<p>+ 01 234 567 89</p>*/}
                                {/*<p>Mon - Fri, 8:00-22:00</p>*/}
                            {/*</div>*/}

                            {/*<div className="col-md-4">*/}
                                {/*<a className="btn-floating blue accent-1"><i className="fa fa-envelope"></i></a>*/}
                                {/*<p>info@gmail.com</p>*/}
                                {/*<p>sale@gmail.com</p>*/}
                            {/*</div>*/}
                        {/*</div>*/}
                    {/*</span>*/}
                    {/*<div style={{ height: '500px', width: '60%'}}><GoogleMaps/></div>*/}
                {/*</div>*/}
                <section className="section">
                    <div style={{ height: '500px', width: '100%'}}><GoogleMaps/></div>
                    <div className="row text-center mt-1">

                                    <div className="col-sm-4">
                                        <a className="btn-floating blue accent-1"><FaMapMarkerAlt/></a>
                                        <p>Av.Camino Real a Colima #546</p>
                                        <p>Jalisco</p>
                                    </div>

                                    <div className="col-sm-4">
                                        <a className="btn-floating blue accent-1"><FaPhone/></a>
                                        <p>+ 52 33 1918 3986</p>
                                        <p>Lun - Vir, 6:00-22:00</p>
                                    </div>

                                    <div className="col-sm-4">
                                        <a className="btn-floating blue accent-1"><FaEnvelopeOpen/></a>
                                        <p>roundonebox@hotmail.com</p>

                                    </div>
                    </div>
                </section>
                {/*<div><MainGallery/></div>*/}
                {/*<HomeGallery style={{ height: '500px', width: '100%' , padding: "4px"}}/>*/}
                <FooterHome/>
            </div>
        );
    }
}

export default HomeScreen;
import React, { Component } from 'react';
import MenuBanner from "./MenuBanner";
import GoogleMaps from "./GoogleMaps";
import HomeGallery from "./HomeGallery";
import Carrucel from "../Carrucel";

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
                <Carrucel className="m-2"></Carrucel>
                <div style={{ height: '100vh', width: '100%' , padding: "4px"}}><GoogleMaps/></div>
                {/*<div><MainGallery/></div>*/}
                <HomeGallery style={{ height: '100vh', width: '100%' , padding: "4px"}}/>

            </div>
        );
    }
}

export default HomeScreen;
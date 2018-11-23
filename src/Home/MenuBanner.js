import React, { Component } from 'react';
import {Boxin} from 'react-icons/fa';
import BannerImage from '../images/cover-round.jpg'
import "./MenuBanner.css"

class ManuBanner extends Component {
    render() {

        return (
            <div className="w-auto">
                <img src={BannerImage} className="img-thumbnail"/>
            </div>

        );
    }
}
export default ManuBanner;
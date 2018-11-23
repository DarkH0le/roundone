import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import {FaAngleDoubleDown} from 'react-icons/fa';
import {FaMapMarkerAlt} from 'react-icons/fa';

class GoogleMaps extends Component {
    static defaultProps = {
        center: {
            lat: 20.563038,
            lng: -103.449931
        },
        zoom: 17
    };

    render() {
        return (
            // Important! Always set the container height explicitly
                <GoogleMapReact
                    bootstrapURLKeys={{ key: "AIzaSyB6BwD995mrimjMZ6Q8Hd_hfPEN5O6I3-8" }}
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}
                >
                    <FaMapMarkerAlt
                        title={'The marker`s title will appear as a tooltip.'}
                        name={'SOMA'}
                        position={{lat: 20.563038, lng: -103.449931}} style={{fontSize: "48px",
                    color: "red"}}/>
                </GoogleMapReact>
        );
    }
}

export default GoogleMaps;


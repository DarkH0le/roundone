import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';

export class Maps extends Component {
    render() {
        return (
            <Map google={this.props.google} zoom={14}>

                <Marker onClick={this.onMarkerClick}
                        name={'Current location'} />
            </Map>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: ("AIzaSyB6BwD995mrimjMZ6Q8Hd_hfPEN5O6I3-8")
})(Maps)
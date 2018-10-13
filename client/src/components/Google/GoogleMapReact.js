import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
 
const AnyReactComponent = ({ text }) => <div>{text}</div>;
 
class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  };
 
  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key:"AIzaSyCTjzuCXpM2enRuMFcqrPWW-Nl8MIp5LIk" }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={59.955413}
            lng={30.337844}
            text={'Kreyser Avrora'}
          />
        </GoogleMapReact>
      </div>
    );
  }
}
 
export default SimpleMap;



// import React, {Component} from "react";
// import GoogleMapReact from "google-map-react";



// const MyMapComponent = (props) =>
// <GoogleMap
// defaultZoom= {8}
// defaultCenter= {{ lat: -34.397, lng: 150.644}}

// {props.isMarkerShown && <Marker position={{lat: -34.397, lng: 150.644 }}/>}
// </GoogleMap>

// <MyMapComponent isMarkerShown />// Map with a Marker
// <MyMapComponent isMarkerShown={false} />// Just only Map

// AIzaSyCTjzuCXpM2enRuMFcqrPWW-Nl8MIp5LIk
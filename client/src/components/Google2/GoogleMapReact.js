import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import Geocode from "react-geocode";
 import API from "./../../utils/API";
 Geocode.setApiKey("AIzaSyCNN1MQcj2eitSI51Tve4SBZlchmiaadoo");
 
const AnyReactComponent = ({ text }) => (
  <div style={{
    color: 'white', 
    background: 'grey',
    padding: '15px 10px',
    display: 'inline-flex',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '100%',
    transform: 'translate(-50%, -50%)'
  }}>
    {text}
  </div>
);


class SimpleMap extends Component {
state={
    results:[],
    maplocations:[],
    currentUserId:""
}

componentDidMount() {
  this.userdata();
}
userdata = () => {
  API.currentUser().then((res) => {
      if(res.data.id){
          this.setState({currentUserId:res.data.id})
          this.listings()
      }
  }).catch(err => console.log(err))
}
listings = () => {
  API.findAllByUser(this.state.currentUserId).then(res => {
        this.setState({results:res.data})
        let locationArr=[];
        let coordinates=[];
        for (var i = 0; i < res.data.length; i++){
          const {address, city , state, zipcode} = res.data[i];
          let location = address + " " + city + " "+ state + " "+ zipcode;
          locationArr.push(location);
        }
        locationArr.map( x => {
          Geocode.fromAddress(x).then(
            response => {
              const { lat, lng } = response.results[0].geometry.location;
              coordinates.push([lat,lng]);
              console.log(coordinates)
              this.setState({maplocations:coordinates})
            },
            error => {
              console.error(error);
            }
          );
        })
  
    }).catch(err => console.log(err))
}
  static defaultProps = {
    center: {
      lat: 38.0194,
      lng: -122.1341
    },
    zoom: 11
  };
 
  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '75vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key:"AIzaSyCTjzuCXpM2enRuMFcqrPWW-Nl8MIp5LIk" }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          {this.state.maplocations.map( item => {
            console.log(item)
            return(
              <AnyReactComponent 
              lat={item[0]}
              lng={item[1]}
              text={'Here'}/>
            )
          })}
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
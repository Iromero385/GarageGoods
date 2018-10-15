import Geocode from "react-geocode";
import API from "./API";


const GarageLocations = {
    locations:[],
    listings: () => {
        API.findAll().then(res => {
            this.setState({results:res.data})
            const {address, city , state, zipcode} = res.data[0]
            let location = address + " " + city + " "+ state + " "+ zipcode + " "
            Geocode.fromAddress(location).then(
              response => {
                const { lat, lng } = response.results[0].geometry.location;
                console.log(lat, lng);
                this.locations.push([lat,lng])
              },
              error => {
                console.error(error);
              }
            );
        }).catch(err => console.log(err))
    }

}
export default GarageLocations
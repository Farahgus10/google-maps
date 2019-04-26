import React from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';
import './App.css';

class App extends React.Component{
  state = {
    showingInfoWindow: false, // Hides or shows the infoWindow  
    activeMarker: {},         // Shows the active marker upon click
    selectedPlace: {},        // Shows the infoWindow to the selected place upon a marker
    places: [
      {
        "name": "The White House",
        "lat": "38.8977",
        "long": "-77.0365"
        },
      {
        "name": "Apple Georgetown",
        "lat": "38.9059",
        "long": "-77.0624"
      },
      {
        "name": "Botanical Gardens",
        "lat": "38.8881",
        "long": "-77.0129"
    },
      {
        "name": "The Phillips Collection",
        "lat": "38.9118",
        "long": "-77.0469"
      }
    ]
  }

  onMarkerClick = (props, marker, e) =>  // onMarkerClick shows the infoWindow, which is a component in the google-maps-library that shows a window w/ more details of the place
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });

    onClose = props => {    // onClose closes the infoWindow once a user clicks on the close button 
      if (this.state.showingInfoWindow) {
        this.setState({
          showingInfoWindow: false,
          activeMarker: null
        });
      }
  };

  render() {
    // let name, lat, lng
    // const places = this.state.places.map((place, i) => {
    //     name = place.name;
    //     lat = parseInt(place.lat);
    //     lng = parseInt(place.long);   
    // })
    
    return (
      <Map
        google={this.props.google}
        zoom={14}
        style={this.style}
        initialCenter={{ lat: 38.89511, lng: -77.03637 }}
        >
        {this.state.places.map(place => {
          return (
            <Marker
              onClick={this.onMarkerClick}
              name={place.name}
              position={{ lat: place.lat, lng: place.long}}
             />
          )
        })}
        {/* <Marker 
          onClick={this.onMarkerClick}
          name={'The Phillips Collection'}
          position={{ lat: 38.9118, lng: -77.0469 }} />
        <Marker 
          onClick={this.onMarkerClick}
          name={'Botanical Gardens'}
          position={{ lat: 38.8881, lng: -77.0469 }} /> */}
        <InfoWindow 
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          onClose={this.onClose} 
        >
          <div>
            <h4>{this.state.selectedPlace.name}</h4>
          </div>
          </InfoWindow>
      </Map>      
  )}
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyAcQwpW_MUOD-EdN_685HUDQ7lK4QgqX5s'
})(App);

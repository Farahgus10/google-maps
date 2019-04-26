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
      },
      {
        "name": "Georgetown University",
        "lat": "38.9076",
        "long": "-77.0723"
      },
      {
        "name": "Chaia Tacos",
        "lat": "38.9041",
        "long": "-77.0632"
      },
    ]
  }

  onMarkerClick = (props, marker) =>  // onMarkerClick shows the infoWindow, which is a component in the google-maps-library that shows a window w/ more details of the place
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });

    onClose = () => {    // onClose closes the infoWindow once a user clicks on the close button 
      if (this.state.showingInfoWindow) {
        this.setState({
          showingInfoWindow: false,
          activeMarker: null
        });
      }
  };

  render() {
    return (
      <Map
        google={this.props.google}
        zoom={14}
        style={this.style}
        initialCenter={{ lat: 38.9072, lng: -77.0369 }}
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

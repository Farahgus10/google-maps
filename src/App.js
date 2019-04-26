import React from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';
import './App.css';

class App extends React.Component{
  render () {
  return (
    <div className="App">
      <Map
        google={this.props.google}
        zoom={14}
        initialCenter={{
         lat: 38.9072,
         lng: -77.0369
        }}
        />
    </div>
  );
}
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyAcQwpW_MUOD-EdN_685HUDQ7lK4QgqX5s'
})(App);

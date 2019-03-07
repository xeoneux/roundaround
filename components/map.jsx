import React from "react";
import ReactMapGL from "react-map-gl";
import { geolocated } from "react-geolocated";

import "mapbox-gl/dist/mapbox-gl.css";

class Map extends React.Component {
  state = {
    viewport: {
      zoom: 8,
      latitude: 20.5937,
      longitude: 78.9629
    }
  };

  render() {
    const { coords } = this.props;
    const { viewport } = this.state;

    const { zoom } = viewport;
    const latitude = (coords && coords.latitude) || viewport.latitude;
    const longitude = (coords && coords.longitude) || viewport.longitude;
    return (
      <ReactMapGL
        zoom={zoom}
        width="100vw"
        height="100vh"
        latitude={latitude}
        longitude={longitude}
        mapboxApiAccessToken={process.env.MAPBOX}
        onViewportChange={vp => this.setState({ viewport: vp })}
      />
    );
  }
}

export default geolocated({
  userDecisionTimeout: 5000,
  positionOptions: { enableHighAccuracy: false }
})(Map);

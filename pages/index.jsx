import React from "react";

import ReactMapGL from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";

export default class Map extends React.Component {
  state = {
    viewport: {
      width: "100vw",
      height: "100vh",
      latitude: 37.7577,
      longitude: -122.4376,
      zoom: 8
    }
  };

  render() {
    return (
      <ReactMapGL
        {...this.state.viewport}
        mapboxApiAccessToken={process.env.MAPBOX}
        onViewportChange={viewport => this.setState({ viewport })}
      />
    );
  }
}

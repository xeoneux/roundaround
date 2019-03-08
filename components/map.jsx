import React from "react";
import ReactMapGL, { FlyToInterpolator } from "react-map-gl";

import emitter from "../helpers/events";

import "mapbox-gl/dist/mapbox-gl.css";

export default class Map extends React.Component {
  state = {
    viewport: {
      zoom: 8,
      latitude: 40.7128,
      longitude: -74.006
    }
  };

  componentDidMount() {
    emitter.addListener("UPDATE_LOCATION", location => {
      const { viewport } = this.state;
      const { latitude, longitude } = location;
      const newViewport = {
        zoom: 15,
        latitude,
        longitude,
        transitionDuration: 2000,
        transitionInterpolator: new FlyToInterpolator()
      };

      this.setState({ viewport: { ...viewport, ...newViewport } }, () =>
        emitter.emit("FETCH_NEARBY", { latitude, longitude })
      );
    });
  }

  componentWillUnmount() {
    emitter.removeAllListeners("UPDATE_LOCATION");
  }

  render() {
    const { viewport } = this.state;
    return (
      <ReactMapGL
        {...viewport}
        width="100vw"
        height="100vh"
        mapboxApiAccessToken={process.env.MAPBOX}
        onViewportChange={vp => this.setState({ viewport: vp })}
      />
    );
  }
}

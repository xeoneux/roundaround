/* eslint-disable react/no-array-index-key */

import React from "react";
import ReactMapGL, { Popup, Marker, FlyToInterpolator } from "react-map-gl";

import Info from "./info";
import emitter from "../helpers/events";
import PinIcon from "../assets/icons/pin";

import "mapbox-gl/dist/mapbox-gl.css";

export default class Map extends React.Component {
  state = {
    markers: [],
    popupInfo: null,
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
        zoom: 16,
        latitude,
        longitude,
        transitionDuration: 2000,
        transitionInterpolator: new FlyToInterpolator()
      };

      this.setState({ viewport: { ...viewport, ...newViewport } }, () =>
        emitter.emit("FETCH_NEARBY", { latitude, longitude })
      );
    });

    emitter.addListener("PRINT_NEARBY", markers => this.setState({ markers }));
  }

  componentWillUnmount() {
    emitter.removeAllListeners("UPDATE_LOCATION");
  }

  renderPopup() {
    const { popupInfo } = this.state;

    return (
      popupInfo && (
        <Popup
          anchor="top"
          closeOnClick={false}
          latitude={popupInfo.latitude}
          longitude={popupInfo.longitude}
          onClose={() => this.setState({ popupInfo: null })}
        >
          <Info {...popupInfo} />
        </Popup>
      )
    );
  }

  render() {
    const { markers, viewport } = this.state;
    return (
      <ReactMapGL
        {...viewport}
        width="100vw"
        height="100vh"
        mapboxApiAccessToken={process.env.MAPBOX}
        onViewportChange={vp => {
          emitter.emit("UPDATE_COORDINATES", {
            latitude: vp.latitude,
            longitude: vp.longitude
          });
          this.setState({ viewport: vp });
        }}
      >
        {markers.map((marker, index) => (
          <Marker key={index} {...marker}>
            <PinIcon
              {...marker}
              onClick={() => this.setState({ popupInfo: marker })}
            />
          </Marker>
        ))}
        {this.renderPopup()}
      </ReactMapGL>
    );
  }
}

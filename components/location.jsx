import React from "react";
import styled from "@emotion/styled";
import { geolocated, geoPropTypes } from "react-geolocated";

import emitter from "../helpers/events";
import LocationIcon from "../assets/icons/location";

const LocationWrapper = styled.footer`
  left: 2em;
  right: 2em;
  bottom: 1em;
  z-index: 99;
  display: flex;
  position: absolute;
  align-items: center;
  justify-content: center;
`;

const LocationIconWrapper = styled.button`
  border: none;
  background: transparent;
`;

const LocationValueWrapper = styled.p`
  border: none;
  margin: 0 0.25em;
  background: transparent;
`;

class Location extends React.Component {
  static propTypes = { ...geoPropTypes };

  componentDidUpdate(prevProps) {
    if (this.props !== prevProps) this.updateLocation();
  }

  updateLocation = () => {
    const { coords } = this.props;
    if (coords) emitter.emit("UPDATE_LOCATION", coords);
  };

  render() {
    const { coords } = this.props;
    const lat =
      (coords && coords.latitude && coords.latitude.toFixed(4)) || "__";
    const long =
      (coords && coords.longitude && coords.longitude.toFixed(4)) || "__";

    return (
      <LocationWrapper>
        <LocationIconWrapper
          type="button"
          disabled={!coords}
          onClick={this.updateLocation}
        >
          <LocationIcon />
        </LocationIconWrapper>
        <LocationValueWrapper>{lat}</LocationValueWrapper>
        <LocationValueWrapper>{long}</LocationValueWrapper>
      </LocationWrapper>
    );
  }
}

export default geolocated({
  userDecisionTimeout: 5000,
  positionOptions: { enableHighAccuracy: false }
})(Location);

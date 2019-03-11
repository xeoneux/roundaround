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
  static propTypes = geoPropTypes;

  state = { latitude: null, longitude: null };

  componentDidMount() {
    emitter.addListener("UPDATE_COORDINATES", coords => {
      this.setState({ ...coords });
    });
  }

  componentDidUpdate(prevProps) {
    if (this.props !== prevProps) this.updateLocation();
  }

  componentWillUnmount() {
    emitter.removeAllListeners("UPDATE_COORDINATES");
  }

  updateLocation = () => {
    const { coords } = this.props;
    if (coords) emitter.emit("UPDATE_LOCATION", coords);
  };

  render() {
    const { latitude, longitude } = this.state;
    const lat = (latitude && latitude.toFixed(4)) || "__";
    const long = (longitude && longitude.toFixed(4)) || "__";

    return (
      <LocationWrapper>
        <LocationIconWrapper
          type="button"
          disabled={!(lat || long)}
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

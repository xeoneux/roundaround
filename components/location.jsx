import React from "react";
import styled from "@emotion/styled";
import { geolocated, geoPropTypes } from "react-geolocated";

import emitter from "../helpers/events";

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

class Location extends React.Component {
  static propTypes = { ...geoPropTypes };

  componentDidUpdate(prevProps) {
    if (this.props !== prevProps) {
      const { coords } = this.props;
      if (coords) emitter.emit("UPDATE_LOCATION", coords);
    }
  }

  render() {
    const { coords } = this.props;
    const lat = (coords && coords.latitude) || "__";
    const long = (coords && coords.longitude) || "__";
    return (
      <LocationWrapper>
        {lat}

        {long}
      </LocationWrapper>
    );
  }
}

export default geolocated({
  userDecisionTimeout: 5000,
  positionOptions: { enableHighAccuracy: false }
})(Location);

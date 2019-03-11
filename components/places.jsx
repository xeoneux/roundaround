/* eslint-disable no-nested-ternary */

import React from "react";
import chroma from "chroma-js";
import Select from "react-select";
import styled from "@emotion/styled";

import emitter from "../helpers/events";
import getNearbyPlaces from "../helpers/places";

const customStyles = {
  option: (styles, { data, isFocused, isSelected }) => {
    const color = chroma(data.color);
    return {
      ...styles,
      backgroundColor: isSelected
        ? data.color
        : isFocused
        ? color.alpha(0.1).css()
        : null,
      color: isSelected
        ? chroma.contrast(color, "white") > 2
          ? "white"
          : "black"
        : data.color
    };
  },
  control: provided => ({
    ...provided,
    border: "none",
    backgroundColor: "rgba(255, 255, 255, 0.5)"
  }),
  multiValue: (styles, { data }) => {
    const color = chroma(data.color);
    return {
      ...styles,
      backgroundColor: color.alpha(0.1).css()
    };
  },
  multiValueLabel: (styles, { data }) => ({
    ...styles,
    color: data.color
  }),
  multiValueRemove: (styles, { data }) => ({
    ...styles,
    color: data.color,
    ":hover": {
      backgroundColor: data.color,
      color: "white"
    }
  })
};

const placeTypes = [
  { value: "airport", label: "Airports", color: "#00B8D9" },
  { value: "atm", label: "ATMs", color: "#0052CC" },
  { value: "bank", label: "Banks", color: "#5243AA" },
  { value: "bar", label: "Bars", color: "#FF5630" },
  { value: "bus_station", label: "Bus Stations", color: "#FF8B00" },
  { value: "cafe", label: "Cafes", color: "#FFC400" },
  { value: "hospital", label: "Hospitals", color: "#36B37E" },
  { value: "pharmacy", label: "Pharmacies", color: "#00875A" },
  { value: "school", label: "Schools", color: "#253858" },
  { value: "train_station", label: "Train Stations", color: "#666666" }
];

const defaultValues = placeTypes.filter(type =>
  ["atm", "bar", "pharmacy"].includes(type.value)
);

const PlacesWrapper = styled.div`
  width: 75vw;
`;

export default class Places extends React.Component {
  state = { selectedValues: defaultValues };

  componentDidMount() {
    emitter.addListener("FETCH_NEARBY", async location => {
      const nearbyPlacesFlat = [];
      const { selectedValues } = this.state;
      const nearbyPlaces = await getNearbyPlaces(
        location.latitude,
        location.longitude,
        selectedValues
      );

      nearbyPlaces.forEach(nearbyPlace => {
        nearbyPlace.results.forEach(result => {
          nearbyPlacesFlat.push({
            color: nearbyPlace.type.color,
            photo:
              result.photos &&
              result.photos.length &&
              result.photos[0].getUrl(),
            latitude: result.geometry.location.lat(),
            longitude: result.geometry.location.lng()
          });
        });
      });

      emitter.emit("PRINT_NEARBY", nearbyPlacesFlat);
    });
  }

  render() {
    return (
      <PlacesWrapper>
        <Select
          isMulti
          options={placeTypes}
          styles={customStyles}
          closeMenuOnSelect={false}
          defaultValue={defaultValues}
        />
      </PlacesWrapper>
    );
  }
}

import React from "react";
import Select from "react-select";
import styled from "@emotion/styled";

import emitter from "../helpers/events";
import { getNearbyPlaces } from "../helpers/places";

const placeTypes = [
  { value: "airport", label: "Airports" },
  { value: "atm", label: "ATMs" },
  { value: "bank", label: "Banks" },
  { value: "bar", label: "Bars" },
  { value: "bus_station", label: "Bus Stations" },
  { value: "cafe", label: "Cafes" },
  { value: "car_repair", label: "Car Repair" },
  { value: "church", label: "Churches" },
  { value: "dentist", label: "Dentist" },
  { value: "doctor", label: "Doctor" },
  { value: "fire_station", label: "Fire Stations" },
  { value: "gym", label: "Gym" },
  { value: "hospital", label: "Hospitals" },
  { value: "library", label: "Library" },
  { value: "movie_theater", label: "Movie Theaters" },
  { value: "pharmacy", label: "Pharmacies" },
  { value: "police", label: "Police Stations" },
  { value: "restaurant", label: "Restaurants" },
  { value: "school", label: "Schools" },
  { value: "train_station", label: "Train Stations" },
  { value: "zoo", label: "Zoo" }
];

const defaultValues = placeTypes.filter(type =>
  [
    "atm",
    "bank",
    "bus_station",
    "hospital",
    "pharmacy",
    "train_station"
  ].includes(type.value)
);

const PlacesWrapper = styled.div`
  width: 75vw;
`;

export default class Places extends React.Component {
  state = { selectedValues: defaultValues };

  componentDidMount() {
    emitter.addListener("FETCH_NEARBY", location => {
      const { selectedValues } = this.state;
      getNearbyPlaces(location.latitude, location.longitude, selectedValues);
    });
  }

  render() {
    return (
      <PlacesWrapper>
        <Select isMulti options={placeTypes} defaultValue={defaultValues} />
      </PlacesWrapper>
    );
  }
}

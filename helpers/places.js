/* global google */

import emitter from "./events";

export async function getNearbyPlaces(latitude, longitude, type) {
  const element = document.createElement("div");
  const location = new google.maps.LatLng(latitude, longitude);
  const service = new google.maps.places.PlacesService(element);

  service.nearbySearch(
    {
      type,
      location,
      radius: "500"
    },
    (results, status) => {
      if (status === google.maps.places.PlacesServiceStatus.OK)
        emitter.emit("PRINT_LOCATIONS", results);
    }
  );
}

export function asdf() {}

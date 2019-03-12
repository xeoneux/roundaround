/* global google */

export default function getNearbyPlaces(latitude, longitude, types) {
  const element = document.createElement("div");
  const location = new google.maps.LatLng(latitude, longitude);
  const service = new google.maps.places.PlacesService(element);

  return Promise.all(
    types.map(
      type =>
        new Promise((resolve, reject) =>
          service.nearbySearch(
            { location, radius: "500", type: [type.value] },
            (results, status) => {
              if (status === google.maps.places.PlacesServiceStatus.OK)
                resolve({ type, results });
              else reject(status);
            }
          )
        )
    )
  );
}

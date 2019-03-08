/* global google */

export default function getNearbyPlaces(latitude, longitude, type) {
  return new Promise((resolve, reject) => {
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
          resolve(results);
        else reject(status);
      }
    );
  });
}

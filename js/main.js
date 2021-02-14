function initMap() {
  const loc = { lat: 21.006209, lng: 75.549481 }
  const map = new google.maps.Map(document.querySelector(".map"), {
    center: { lat: 21.006209, lng: 75.549481 },
    zoom: 14,
  })
  const marker = new google.maps.Marker({ position: loc, map })
}

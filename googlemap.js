window.initMap = function () {
  const map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 35.695547, lng: 139.7005691},
    zoom: 15
  });

  const malls = [
  //일본관광장소
    { label: "A", name:"후쿠오카 타워, <img src='a.jpg'>", lat: 33.5932846, lng: 130.35151},
    { label: "D", name: "도쿄 타워, <img src='도쿄타워.jpg'>", lat: 35.6585805, lng: 139.7454329},
    { label: "C", name: "아라시야마 대나무숲, <img src='아리시야마.jpg'>", lat: 35.0180137, lng: 135.6741353},
    { label: "E", name: "아카시대교, <img src='아카시대교.jpg'>", lat: 34.6174683, lng: 135.0216751},
];
    const bounds = new google.maps.LatLngBounds();
    const infoWindow = new google.maps.InfoWindow();

    malls.forEach(({ label, name, lat, lng }) => {
    const marker = new google.maps.Marker({
      position: { lat, lng },
      label,
      map
    });
    bounds.extend(marker.position);

    marker.addListener("click", () => {
      map.panTo(marker.position);
      infoWindow.setContent(name);
      infoWindow.open({
        anchor: marker,
        map
      });
    });
  });

  map.fitBounds(bounds);
};

//index.js
// This example requires the Places library. Include the libraries=places
// parameter when you first load the API. For example:
// <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places">
let map;
let service;
let infowindow;

function initMap() {
const sydney = new google.maps.LatLng(-33.867, 151.195);

infowindow = new google.maps.InfoWindow();
map = new google.maps.Map(document.getElementById("map"), {
  center: sydney,
  zoom: 15,
});

const request = {
  query: "Museum of Contemporary Art Australia",
  fields: ["name", "geometry"],
};

service = new google.maps.places.PlacesService(map);
service.findPlaceFromQuery(request, (results, status) => {
  if (status === google.maps.places.PlacesServiceStatus.OK && results) {
    for (let i = 0; i < results.length; i++) {
      createMarker(results[i]);
    }

    map.setCenter(results[0].geometry.location);
  }
});
}

function createMarker(place) {
if (!place.geometry || !place.geometry.location) return;

const marker = new google.maps.Marker({
  map,
  position: place.geometry.location,
});

google.maps.event.addListener(marker, "click", () => {
  infowindow.setContent(place.name || "");
  infowindow.open(map);
});
}

window.initMap = initMap;


//구글 맵 초기화
function initMap() {
const map = new google.maps.Map(document.getElementById('map'), {
  center: {lat: 37.5665, lng: 126.9780}, //초기 위치(서울 시청)
  zoom: 12 //초기 줌 레벨
});

//장소 검색 입력란
const input = document.getElementById('search-input');
const searchBox = new google.maps.places.SearchBox(input);
map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

// 지도의 바운드를 검색 결과에 맞게 조정
map.addListener('bounds_changed', () => {
  searchBox.SetBounds(map.getBounds());
});

//검색 결과를 지도에 표시
searchBox.addListener('places_changed', () => {
  const places = searchBox.getPlaces();

  if (places.length == 0) {
    return;
  }

  // 기존 마커 제거
  const markers = [];
  markers.forEach(marker => {
    marker.setMap(null);
  });
  marker.length = 0;

  //검색 결과에 따라 마커 생성
  const bounds = new google.maps.LatLngBounds();
  places.forEach(places =>  {
    if (!place.geometry || !place.geometry,location)  {
      console.log("장소 데이터가 없습니다.");
      return;
    }

    const marker = new google.maps.Marker({
      map: map,
      title: place.name,
      position: place.geometry.location
    });

    marker.push(marker);
    bounds.extend(place.geometry.location);
  });

  map.fitBounds(bounds);
  });
}

  
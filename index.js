window.initMap = function () {
    const map = new google.maps.Map(document.getElementById("map"), {
      center: { lat: 33.5932846, lng: 130.3489382},
      zoom: 15
    });
  
    const malls = [
    //일본관광장소
    //후쿠오카
      { label: "A", name:"후쿠오카 타워, <img src='a.jpg'>", lat: 33.5932846, lng: 130.3489382},
      { label: "B", name: "오호리 공원, <img src='b.jpg'>", lat: 33.5862109, lng:130.373895},
      { label: "C", name: "구시다 신사, <img src='c.jpg'>", lat: 33.592959, lng:130.407884},
      { label: "D", name: "I후쿠오카 돔, <img src='d.jpg'>", lat: 33.5953986, lng: 130.3595483},
      { label: "E", name: "텐진 지하상가, <img src='e.jpg'>", lat: 33.5899904, lng: 130.3969207},
      
      //도쿄
      { label: "A", name: "센소지 카미나리몬 나카미세, <img src='센소지.jpg'>", lat: 35.7111709, lng: 139.7927913},
      { label: "B", name: "이마도 신사, <img src='이마도신사.jpg'>", lat: 35.7193262, lng: 139.800952},
      { label: "C", name: "아키하바라 전자 상가, <img src='아키하바라상가.jpg'>", lat: 35.7000352, lng: 139.7699964},
      { label: "D", name: "도쿄 타워, <img src='도쿄타워.jpg'>", lat: 35.6585848, lng: 139.742858},
      { label: "E", name: "시부야역 주변, <img src='시부야역.jpg'>", lat: 35.6580339, lng: 139.663527},

     //교토
      { label: "A", name: "기요미즈데라 청수사, <img src='기요미즈데라.jpg'>", lat: 34.9948406, lng: 135.7824252},
      { label: "B", name: "에이칸도 니시미치, <img src='에이칸도.jpg'>", lat: 35.0150356, lng: 135.787305},
      { label: "C", name: "아라시야마 대나무숲, <img src='아리시야마.jpg'>", lat: 35.0180181, lng: 135.6715604},
      { label: "D", name: "니조성, <img src='니조성.jpg'>", lat: 35.0138301, lng: 135.7460464},
      { label: "E", name: "금각사, <img src='금각사.jpg'>", lat: 35.0393744, lng: 135.7266682},

      //고베
      { label: "A", name: "고베 동물왕국, <img src='동물왕국.jpg'>", lat: 34.654646, lng: 135.2199719},
      { label: "B", name: "고베 포트 타워, <img src='포트타워.jpg'>", lat: 34.6826344, lng:135.1841246},
      { label: "C", name: "아리마온천 타이코노유 , <img src='타이코노유.jpg'>", lat: 34.7973523, lng: 135.248258},
      { label: "D", name: "롯코산, <img src='롯코산.jpg'>", lat: 34.7780393, lng: 135.2534241},
      //아카시대교(세계에서 가장 긴 현수교)
      { label: "E", name: "아카시대교, <img src='아카시대교.jpg'>", lat: 34.6174727, lng: 135.0191002},

      //미야기
      { label: "A", name: "센다이 미디어테크, <img src='센다이미디어테크.jpg'>", lat: 38.265374, lng: 140.8631067},
      { label: "B", name: "죠젠지 거리, <img src='죠젠지거리.jpg'>", lat: 38.2654023, lng: 140.8651535},
      { label: "C", name: "Sunmall Ichibancho, <img src='sunmall.jpg'>", lat: 38.2587541, lng: 140.8726063},
      //알본 3대 명승중 하나
      { label: "D", name: "마쓰시마, <img src='마쓰시마.jpg'>", lat:38.3663325, lng: 141.0463122},
      //일본 3대 대학중 하나
      { label: "E", name: "도호쿠대학, <img src='도호쿠대학.jpg'>", lat: 38.2538382, lng: 140.8714991},


      //일본 위험지역(위험장소)
      { label: "ICHI", name: "신이 마미야역 일대, <img src='신이마미야역.jpg'>", lat: 34.6499929, lng: 135.4985681},
      { label: "NI", name: "후쿠시마 현, <img src='후쿠시마-현.jpg'>", lat: 37.3821025, lng: 139.4447776},
      { label: "SAN", name: "치바현 이치카와시 야와타노 야부시라즈, <img src='야와타노야부시라즈.jpg'>", lat: 35.7215917, lng: 139.9251661},
      { label: "YEON", name: "도쿄 신주쿠 가부키쵸, <img src='신주쿠가부키쵸.jpg'>", lat: 35.6955427, lng: 139.7005745},
      { label: "GO", name: "도쿄 신오쿠보 지역, <img src='신오쿠보.jpg'>", lat: 35.6995779, lng: 139.692964},
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
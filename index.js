window.initMap = function () {
    const map = new google.maps.Map(document.getElementById("map"), {
      center: { lat: 35.695547, lng: 139.7005691},
      zoom: 15
    });
  
    const malls = [
    //일본관광장소
    //후쿠오카
      { label: "A", name:"후쿠오카 타워, <img src='a.jpg'>", lat: 33.5932846, lng: 130.35151},
      { label: "B", name: "오호리 공원, <img src='b.jpg'>", lat: 33.5862065, lng:130.3764646},
      { label: "C", name: "구시다 신사, <img src='c.jpg'>", lat: 33.5929546, lng:130.4104589},
      { label: "D", name: "후쿠오카paypay 돔, <img src='d.jpg'>", lat: 33.5953942, lng: 130.3621232},
      { label: "E", name: "텐진 지하상가, <img src='e.jpg'>", lat: 33.589986, lng: 130.399501},
      
      //도쿄
      { label: "A", name: "센소지 카미나리몬 나카미세, <img src='센소지.jpg'>", lat: 35.7111163, lng: 139.7963656},
      { label: "B", name: "이마도 신사, <img src='이마도신사.jpg'>", lat: 35.7193219, lng: 139.8035323},
      { label: "C", name: "아키하바라 전자 거리, <img src='아키하바라상가.jpg'>", lat: 35.6997221, lng:139.7713799},
      { label: "D", name: "도쿄 타워, <img src='도쿄타워.jpg'>", lat: 35.6585805, lng: 139.7454329},
      { label: "E", name: "시부야역 주변, <img src='시부야역.jpg'>", lat: 35.6580339, lng: 139.663527},

     //교토
      { label: "A", name: "기요미즈데라(청수사), <img src='기요미즈데라.jpg'>", lat: 34.9948561, lng: 135.7850463},
      { label: "B", name: "에이칸도 니시미치, <img src='에이칸도.jpg'>", lat: 35.0150313, lng: 135.792176},
      { label: "C", name: "아라시야마 대나무숲, <img src='아리시야마.jpg'>", lat: 35.0180137, lng: 135.6741353},
      { label: "D", name: "니조성, <img src='니조성.jpg'>", lat: 35.0142342, lng:135.748218},
      { label: "E", name: "금각사, <img src='금각사.jpg'>", lat: 35.03937, lng: 135.7292431},

      //고베
      { label: "A", name: "고베 동물왕국, <img src='동물왕국.jpg'>", lat: 34.6546416, lng: 135.2225468},
      { label: "B", name: "고베 포트 타워, <img src='포트타워.jpg'>", lat: 34.68263, lng:135.1866995},
      { label: "C", name: "아리마온천 타이코노유 , <img src='타이코노유.jpg'>", lat: 34.7979027, lng:135.2512053},
      { label: "D", name: "롯코산, <img src='롯코산.jpg'>", lat: 34.7780221, lng: 135.2637238},
      //아카시대교(세계에서 가장 긴 현수교)
      { label: "E", name: "아카시대교, <img src='아카시대교.jpg'>", lat: 34.6174683, lng: 135.0216751},

      //미야기
      { label: "A", name: "센다이 미디어테크, <img src='센다이미디어테크.jpg'>", lat: 38.2653698, lng: 140.8656816},
      { label: "B", name: "죠젠지 거리, <img src='죠젠지거리.jpg'>", lat: 38.2653981, lng: 140.8677284},
      { label: "C", name: "Sunmall Ichibancho, <img src='sunmall.jpg'>", lat: 38.2587499, lng: 140.8726063},
      //알본 3대 명승중 하나
      { label: "D", name: "마쓰시마 마치, <img src='마쓰시마.jpg'>", lat:38.3999582, lng: 141.0722457},
      //일본 3대 대학중 하나
      { label: "E", name: "도호쿠대학, <img src='도호쿠대학.jpg'>", lat:38.253834, lng: 140.874074},


      //일본 위험지역(위험장소)
      { label: "ICHI", name: "신이 마미야역 일대, <img src='신이마미야역.jpg'>", lat: 34.6497931, lng: 135.5015478},
      { label: "NI", name: "후쿠시마 제1원자력발전소, <img src='후쿠시마-현.jpg'>", lat: 37.4211225, lng: 141.0302299},
      { label: "SAN", name: "치바현 이치카와시 야와타노 야부시라즈, <img src='야와타노야부시라즈.jpg'>", lat: 35.7215961, lng: 139.930037},
      { label: "YEON", name: "도쿄 신주쿠 가부키쵸, <img src='신주쿠가부키쵸.jpg'>", lat: 35.695547, lng: 139.7005691},
      { label: "GO", name: "도쿄 신오쿠보 지역, <img src='신오쿠보.jpg'>", lat: 35.7012502, lng: 139.7002258},
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




 
 
  
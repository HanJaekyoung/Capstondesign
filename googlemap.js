window.initMap = function () {
    const map = new google.maps.Map(document.getElementById("map"), {
      center: { lat: 35.695547, lng: 139.7005691},
      zoom: 15
    });
  
    const malls = [
    //일본관광장소
    //후쿠오카
      { label: "A1", name: "후쿠오카 공항, <img src='coucho.jpg'>", lat: 33.5849402, lng: 130.4444735},
      { label: "B1", name:"후쿠오카 타워, <img src='a.jpg'>", lat: 33.5932846, lng: 130.35151},
      { label: "C1", name: "오호리 공원, <img src='b.jpg'>", lat: 33.5862065, lng:130.3764646},
      { label: "D1", name: "구시다 신사, <img src='c.jpg'>", lat: 33.5929546, lng:130.4104589},
      { label: "E1", name: "후쿠오카paypay 돔, <img src='d.jpg'>", lat: 33.5953942, lng: 130.3621232},
      { label: "F1", name: "텐진 지하상가, <img src='e.jpg'>", lat: 33.589986, lng: 130.399501},
      { label: "G1", name: "코코 호텔, <img src='코코호텔.jpg'>", lat: 33.5868786, lng: 130.3994742 },
     
      
      //도쿄
      { label: "A2", name: "나리타 국제 공항, <img src='나리타공항.jpg'>", lat: 35.7721823, lng: 140.3928548},
      { label: "B2", name: "센소지 가미나리몬, <img src='센소지.jpg'>", lat: 35.7111163, lng: 139.7963656},
      { label: "C2", name: "이마도 신사, <img src='이마도신사.jpg'>", lat: 35.7193219, lng: 139.8035323},
      { label: "D2", name: "아키하바라 전자 거리, <img src='아키하바라상가.jpg'>", lat: 35.6997221, lng:139.7713799},
      { label: "E2", name: "도쿄 타워, <img src='도쿄타워.jpg'>", lat: 35.6585805, lng: 139.7454329},
      { label: "F2", name: "시부야역 , <img src='시부야역.jpg'>", lat: 35.6580339, lng: 139.7016358},
      { label: "G2", name: "시부야 호텔 엔, <img src='시부야호텔엔.jpg'>", lat: 35.6598332, lng: 139.6954358},

     //교토
      { label: "A3", name: "간사이 국제 공항, <img src='간사이국제공항.jpg'>", lat: 34.4320068, lng: 135.2303939},
      { label: "B3", name: "기요미즈데라(청수사), <img src='기요미즈데라.jpg'>", lat: 34.9948561, lng: 135.7850463},
      { label: "C3", name: "에이칸도 니시미치, <img src='에이칸도.jpg'>", lat: 35.0150313, lng: 135.792176},
      { label: "D3", name: "아라시야마 대나무숲, <img src='아리시야마.jpg'>", lat: 35.0180137, lng: 135.6741353},
      { label: "E3", name: "니조성, <img src='니조성.jpg'>", lat: 35.0142342, lng:135.748218},
      { label: "F3", name: "금각사, <img src='금각사.jpg'>", lat: 35.03937, lng: 135.7292431},
      { label: "G3", name: "호텔 그랑비아 오사카, <img src='그랑비아 오사카.jpg'>", lat: 34.701726, lng: 135.4963754},

      //고베
      { label: "A4", name: "고베 공항, <img src='고베공항.jpg'>", lat: 34.6353604, lng: 135.2249203},
      { label: "B4", name: "고베 동물왕국, <img src='동물왕국.jpg'>", lat: 34.6546416, lng: 135.2225468},
      { label: "C4", name: "고베 포트 타워, <img src='포트타워.jpg'>", lat: 34.68263, lng:135.1866995},
      { label: "D4", name: "아리마온천 타이코노유 , <img src='타이코노유.jpg'>", lat: 34.7979027, lng:135.2512053},
      { label: "E4", name: "롯코산, <img src='롯코산.jpg'>", lat: 34.7780221, lng: 135.26372381},
      //아카시대교(세계에서 가장 긴 현수교)
      { label: "F4", name: "아카시대교, <img src='아카시대교.jpg'>", lat: 34.6174683, lng: 135.0216751},
      { label: "G4", name: "Hotel Fine, <img src='Hotel Fine.jpg'>", lat: 34.7774066, lng: 135.2086567},

      //미야기
      { label: "A5", name: "센다이 국제공항, <img src='센다이국제공항.jpg'>", lat: 38.1381768, lng: 140.9292371},
      { label: "B5", name: "센다이 미디어테크, <img src='센다이미디어테크.jpg'>", lat: 38.2653698, lng: 140.8656816},
      { label: "C5", name: "죠젠지 거리, <img src='죠젠지거리.jpg'>", lat: 38.2653981, lng: 140.8677284},
      { label: "D5", name: "Sunmall Ichibancho, <img src='sunmall.jpg'>", lat: 38.2587499, lng: 140.8726063},
      //알본 3대 명승중 하나
      { label: "E5", name: "마쓰시마 마치, <img src='마쓰시마.jpg'>", lat:38.3999582, lng: 141.0722457},
      //일본 3대 대학중 하나
      { label: "F5", name: "도호쿠대학, <img src='도호쿠대학.jpg'>", lat:38.253834, lng: 140.874074},
      { label: "G5", name: "센다이 선플라자, <img src='센다이 선플라자.jpg'>", lat:38.2583545, lng: 140.8945523},

      
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




 
 
  
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

      //올랜도
      { label: "1", name: "올랜도 국제공항, <img src='올랜도국제공항.jpg'>", lat: 28.4311443, lng: -81.3079041},
      { label: "2", name: "SeaWorld 올랜도, <img src='SeaWorld.jpg'>", lat: 28.409718, lng: -81.4597107},
      { label: "3", name: "매직 킹덤 파크, <img src='매직킹덤파크.jpg'>", lat: 28.418579, lng: -81.5812062},
      { label: "4", name: "위저딩 월드 오브, <img src='위저딩월드오브.jpg'>", lat: 28.4727457, lng: -81.4726258},
      { label: "5", name: "The Mall at Millenia, <img src='The Mall.jpg'>", lat:28.4854888, lng: -81.4315253},
      { label: "6", name: "iFLY Indoor Skydiving, <img src='Sky diving.jpg'>", lat:28.434383, lng: -81.471724},
      { label: "7", name: "디스커버리 코브, <img src='Discovery Cobe.jpg'>", lat:28.4054404, lng: -81.461451},
      { label: "8", name: "유니버셜 올랜도 리조트, <img src='universal-orlando-resort.jpg'>", lat:28.4743207, lng: -81.4678193},
      
      //워싱턴
      { label: "1-2", name: "워싱턴 덜레스 국제공항, <img src='워싱턴덜레스국제공항.jpg'>", lat: 38.9522765, lng: -77.457881},
      { label: "2-2", name: "백악관, <img src='백악관.jpg'>", lat: 38.8976763, lng: -77.0365298},
      { label: "3-2", name: "국립항공우주박물관, <img src='국립항공우주박물관.jpg'>", lat: 38.8881601, lng: -77.0198679},
      { label: "4-2", name: "링컨기념관, <img src='링컨기념관.jpg'>", lat:38.8892686, lng: -77.050176},
      { label: "5-2", name: "워싱턴 기념탑, <img src='워싱턴 기념탑.jpg'>", lat:38.8894541, lng: -77.0351714},
      { label: "6-2", name: "조지타운, <img src='조지타운.jpg'>", lat:38.9091892, lng: -77.0647379},
      { label: "7-2", name: "타이들 베이슨, <img src='타이틀베이슨.jpg'>", lat:38.8836295, lng: -77.0384191},
      { label: "8-2", name: "국제스파이박물관, <img src='국제스파이박물관.jpg'>", lat:38.8841419, lng: -77.0255748},
      { label: "9-2", name: "데이즈 인 워싱턴 DC, <img src='데이즈인.jpg'>", lat:38.9469316, lng: -77.0654825},

      //필라델피아
      { label: "1-3", name: "필라델피아 국제공항, <img src='필라델피아.jpg'>", lat: 39.8730895, lng: -75.243698},
      { label: "2-3", name: "인데펜던스 내셔널 히스토리컬 파크, <img src='인데펜던스.jpg'>", lat: 39.9495312, lng: -75.1497319},
      { label: "3-3", name: "허샤이파크, <img src='허샤이파크.jpg'>", lat: 40.2887809, lng: -76.6547469},
      { label: "4-3", name: "Gettysburg National Military Park, <img src='Military Park.jpg'>", lat: 39.8052117, lng: -77.2421427},
      { label: "5-3", name: "Best Western Plus Clearfield, <img src='Best Western.jpg'>", lat: 41.034931, lng: -78.40066},
      
     //로스앤젤레스
     { label: "1-4", name: "로스앤젤리스 국제공항, <img src='로스공항.jpg'>", lat: 33.94379029, lng: -118.4091036},
     { label: "2-4", name: "할리우드 명예의 거리, <img src='할리우드.jpg'>", lat: 34.0985259, lng: -118.3255647},
     { label: "3-4", name: "산타모니카 스테이트 비치, <img src='산타모니카.jpg'>", lat: 34.0106958, lng: -118.5001871},
     { label: "4-4", name: "더 게티, <img src='더 게티.jpg'>", lat: 34.0780358, lng: -118.4740954},
     { label: "5-4", name: "리틀 도쿄, <img src='리틀 도쿄.jpg'>", lat:34.0540616, lng: -118.2412741},
     { label: "6-4", name: "돌비 극장, <img src='돌비 극장.jpg'>", lat:34.1025665, lng: -118.3415075},
     { label: "7-4", name: "크라운 플라자, <img src='크라운플라자.jpg'>", lat:33.9464969, lng: -118.3891988},
     
     //시카고
     { label: "1-5", name: "시카고 오헤어 국제공항, <img src='오헤어.jpg'>", lat:41.9794426, lng: -87.9051998},
     { label: "2-5", name: "윌리스 타워, <img src='윌리스타워.jpg'>", lat:41.8788764, lng: -87.6359149},
     { label: "3-5", name: "밀레니엄 공원, <img src='밀레니엄.jpg'>", lat:41.8825524, lng: -87.6225514},
     { label: "4-5", name: "네이비 피어, <img src='네이비.jpg'>", lat:41.8918633, lng: -87.6050944},
     { label: "5-5", name: "존 핸콕 센터, <img src='존핸콕.jpg'>", lat:41.8987699, lng: -87.6229168},
     { label: "6-5", name: "Historic Route 66 Begin Sign, <img src='66Begin.jpg'>", lat:41.8796182, lng: -87.6246095},
     { label: "7-5", name: "하얏트 플레이스 시카고/다운타운 - 더 루프, <img src='하얏트.jpg'>", lat:41.882755, lng: -87.6356806},

     //베를린
     { label: "이치", name: "베를린 브란덴부르크 공항, <img src='브란덴.jpg'>", lat:52.3649675, lng: 13.4984722},
     { label: "니", name: "국가의회 의사당, <img src='의사당.jpg'>", lat:52.5186202, lng: 13.3761872},
     { label: "산", name: "브란덴부르크 문, <img src='부르크문.jpg'>", lat:52.5162746, lng: 13.3777041},
     { label: "욘", name: "베를린 돔, <img src='베를린 돔.jpg'>", lat:52.5190608, lng: 13.401078},
     { label: "고", name: "Berlin Wall Memorial, <img src='Berlin Wall.jpg'>", lat:52.5350521, lng: 13.3901898},
     { label: "로꾸", name: "학살된 유럽 유대인을 위한 기념물, <img src='유대인 추모비.jpg'>", lat:52.5139474, lng: 13.3787127},
     { label: "나나", name: "베를린 텔레비전탑, <img src='텔레비전 탑.jpg'>", lat:52.520815, lng: 13.4094191},
     { label: "하치", name: "체크포인트 찰리, <img src='체크포인트 찰리.jpg'>", lat:52.5075882, lng: 13.3903755},
     { label: "큐우", name: "페르가몬 박물관, <img src='페르가몬.jpg'>", lat:52.521183, lng: 13.3969},
     { label: "주우", name: "샤를로덴부르크 성, <img src='샤를로.jpg'>", lat:52.5209319, lng: 13.2956165},
     { label: "주우이치", name: "베를린 훔볼트대학, <img src='홈볼트.jpg'>", lat:52.517883, lng: 13.3936551},
     { label: "주우니", name: "Gendarmenmarkt, <img src='Gender.jpg'>", lat:52.5137224, lng: 13.3926698},
     { label: "주우산", name: "힐튼 베를린, <img src='힐튼.jpg'>", lat:52.5121271, lng: 13.3925505},
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




 
 
  
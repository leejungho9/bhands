var mapcontainer = document.getElementById("map");
var mapoptions = {
  center: new kakao.maps.LatLng(37.365264512305174, 127.10676860117488),
  level: 3,
};
var map = new kakao.maps.Map(mapcontainer, mapoptions);
var geocoder = new kakao.maps.services.Geocoder();

// 주소로 좌표를 검색합니다.
geocoder.addressSearch("경기도 파주시 광인사길 9-7", function (result, status) {
  // 정상적으로 검색이 완료됐으면 실행
  if (status === kakao.maps.services.Status.OK) {
    var coords = new kakao.maps.LatLng(result[0].y, result[0].x);

    // 결과값으로 받은 위치를 마커로 표시합니다.

    var marker = new kakao.maps.Marker({
      map: map,
      position: coords,
    });

    console.log(coords);
    // 커스텀 오버레이에 표시할 컨텐츠 입니다
    // 커스텀 오버레이는 아래와 같이 사용자가 자유롭게 컨텐츠를 구성하고 이벤트를 제어할 수 있기 때문에
    // 별도의 이벤트 메소드를 제공하지 않습니다

    var content = document.createElement("div");
    content.className = "wrap";

    var info1 = document.createElement("div");
    info1.className = "map_info";
    content.appendChild(info1);

    var title = document.createElement("div");
    title.className = "map_title";
    title.innerHTML = "비핸즈";
    info1.appendChild(title);

    var closeBtn = document.createElement("div");
    closeBtn.className = "map_close";
    info1.appendChild(closeBtn);
    closeBtn.onclick = function () {
      overlay.setMap(null);
    };
    var body = document.createElement("div");
    body.className = "map_body";
    info1.appendChild(body);

    var imgDiv = document.createElement("div");
    imgDiv.className = "map_img";
    body.appendChild(imgDiv);

    var img = document.createElement("img");

    img.src = "../images/logo.png";
    img.width = 60;
    img.height = 10;
    imgDiv.appendChild(img);

    var desc = document.createElement("div");
    desc.className = "desc";
    body.appendChild(desc);

    var ellipsis = document.createElement("div");
    ellipsis.className = "ellipsis";
    ellipsis.innerHTML = "경기도 파주시 광인사길 9-7";
    desc.appendChild(ellipsis);

    var jibun_ellipsis = document.createElement("div");
    jibun_ellipsis.className = "jibun";
    desc.appendChild(jibun_ellipsis);
    jibun_ellipsis.innerHTML = "(우) 10881 (지번) 문발동 525-3";

    var link = document.createElement("a");
    link.className = "link";
    body.appendChild(link);

    // 마커 위에 커스텀오버레이를 표시합니다
    // 마커를 중심으로 커스텀 오버레이를 표시하기위해 CSS를 이용해 위치를 설정했습니다
    map.setCenter(coords, marker);

    var overlay = new kakao.maps.CustomOverlay({
      content: content,
      map: map,
      position: marker.getPosition(),
    });
    overlay.setMap(null);
    kakao.maps.event.addListener(marker, "click", function () {
      overlay.setMap(map);
    });

    // 커스텀 오버레이를 닫기 위해 호출되는 함수입니다
  }
  map.setCenter(coords, marker);
});

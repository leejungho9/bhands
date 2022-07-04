var mapcontainer = document.getElementById("map");
var mapoptions = {
  center: new kakao.maps.LatLng(37.365264512305174, 127.10676860117488),
  level: 3,
};
var map = new kakao.maps.Map(mapcontainer, mapoptions);
var geocoder = new kakao.maps.services.Geocoder();

geocoder.addressSearch("경기도 파주시 광인사길 9-7", function (result, status) {
  if (status === kakao.maps.services.Status.OK) {
    var coords = new kakao.maps.LatLng(result[0].y, result[0].x);

    var marker = new kakao.maps.Marker({
      map: map,
      position: coords,
    });

    console.log(coords);

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
  }
  map.setCenter(coords, marker);
});

var map;
var markers = [];

function initMap() {
    var options = {
        zoom: 17,
        center: { lat: 21.03375213377537, lng: 105.84872060696712 },
        panControl: true,
        scaleControl: true,
        mapTypeId: "satellite",
        zoomControl: true
    };
    map = new google.maps.Map(document.getElementById('map'), options);
    var btn_satellite = document.getElementById('satellite');
    btn_satellite.addEventListener('click', function() {
        map.setMapTypeId('satellite');
    }, false);
    var btn_ggMAP = document.getElementById('ggMAP');
    btn_ggMAP.addEventListener('click', function() {
        map.setMapTypeId('terrain');
    }, false);
    var btn_GPS = document.getElementById('GPS');
    btn_GPS.addEventListener('click', function() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition);
        } else {
            alert("Ko Lấy Được Vị Trí Hiện Tại Của Bạn !!!");
        }
    }, false);

    function setAllMap(map) {
        for (var i = 0; i < markers.length; i++) {
            markers[i].setMap(map);
        }
    }
    var btn_HideMap = document.getElementById('hide_map');
    btn_HideMap.addEventListener('click', function() {
        setAllMap(null);
    }, false);
    var btn_ShowMap = document.getElementById('show_map');
    btn_ShowMap.addEventListener('click', function() {
        setAllMap(map);
    }, false);
    var btn_reload = document.getElementById('re_load');
    btn_reload.addEventListener('click', function() {
        location.reload();
    }, false);

    function showPosition(position) {
        var show_lat = position.coords.latitude;
        var show_lng = position.coords.longitude;
        var marker_GPS = {
            coords: { lat: show_lat, lng: show_lng }
        }
        addMarker(marker_GPS);
        creat_bankinh(show_lat, show_lng, 500);
    }
    var cityCircle;

    function creat_bankinh(user_lat_get, user_lng_get, radius) {
        if (user_lng_get && user_lat_get) {
            cityCircle = new google.maps.Circle({
                strokeColor: '#888',
                strokeOpacity: 0.5,
                strokeWeight: 2,
                fillColor: '#03A9F4',
                fillOpacity: 0.1,
                map: map,
                zoom: 15,
                center: { lat: user_lat_get, lng: user_lng_get },
                radius: radius
            });
        }
    }
    var locations = [{
            coords: { lat: 21.032322244918202, lng: 105.84852904576427 },
            content: '<h6> <0> Công An Phường Hàng Gai </h6>'
        },
        {
            coords: { lat: 21.032642694517463, lng: 105.84685534733897 },
            content: '<h6> <1> Ngã 4 Hàng Nón - Hàng Điếu </h6>'
        },
        {
            coords: { lat: 21.03128077896124, lng: 105.84917277592784 },
            content: '<h6> <2> Ngã tư Hàng Bông - Hàng Hòm </h6>'
        },
        {
            coords: { lat: 21.033033241534817, lng: 105.85028857487804 },
            content: '<h6> <3> Cafe Nuôi 34 - Lương Văn Can </h6>'
        },
        {
            coords: { lat: 21.033744234758828, lng: 105.84792823094493 },
            content: '<h6> <4> SaomBank PGD Hàng Bồ </h6>'
        },
        {
            coords: { lat: 21.033897135116252, lng: 105.84992669930021 },
            content: '<h6> <5> Văn Phòng phẩm Phương Nội </h6>'
        },
        {
            coords: { lat: 21.032274865590832, lng: 105.85072063316862 },
            content: '<h6> <6> KingRoti- Hàng Gai </h6>'
        },
        {
            coords: { lat: 21.030395624235418, lng: 105.84751271118681 },
            content: '<h6> <7> Ngã Tư Chùa Kim Cổ </h6>'
        },
        {
            coords: { lat: 21.0317375196827, lng: 105.84678315033476 },
            content: '<h6> <8> Ngã 3 Đường Thành - Yên Thái </h6>'
        },
        {
            coords: { lat: 21.03202553563101, lng: 105.84816455841064 },
            content: '<h6> <9> Golden Moon Hotel & Travel </h6>'
        },
        {
            coords: { lat: 21.03102651688361, lng: 105.84863923897306 },
            content: '<h6> <10> Ngã Tư Hàng Bông - Hàng Mành </h6>'
        },
        {
            coords: { lat: 21.035247476939134, lng: 105.84941307535203 },
            content: '<h6> <11> Phố Chả Cá - Hàng Cân </h6>'
        },
        {
            coords: { lat: 21.03248542871612, lng: 105.84765059536129 },
            content: '<h6> <12> Ủy Ban Phường Hàng Gai , quận Hoàn Kiếm </h6>'
        },
        {
            coords: { lat: 21.033678543930336, lng: 105.84697086569952 },
            content: '<h6> <13> Xôi Rán Hàng Điếu </h6>'
        },
        {
            coords: { lat: 21.032697171678393, lng: 105.84636468646215 },
            content: '<h6> <14>  Ngân Hàng Đầu Tư & Phát Triển Việt Nam (Bidv) - PGD Đường Thành </h6>'
        },
        {
            coords: { lat: 21.033608446126706, lng: 105.84589798209356 },
            content: '<h6> <15> Bia Hơi Ngọc Linh </h6>'
        },
        {
            coords: { lat: 21.03538809574874, lng: 105.84824258448693 },
            content: '<h6> <16> phố Hàng Vải - Thuốc bắc </h6>'
        },
        {
            coords: { lat: 21.03433163033303, lng: 105.84700340392205 },
            content: '<h6> <17> Hạ Long Bay CastaWay Tour </h6>'
        },
        {
            coords: { lat: 21.03427154676672, lng: 105.84802800776573 },
            content: '<h6> <18> Ngã 3 Hàng Phèn </h6>'
        },
        {
            coords: { lat: 21.035272936375268, lng: 105.85005039336296 },
            content: '<h6> <19> Công ty cổ phần sữa Hà Nội </h6>'
        },
        {
            coords: { lat: 21.034026387701427, lng: 105.85066456133751 },
            content: '<h6> <20> Marker & Food Phố Cổ </h6>'
        }
    ];
    var arr1 = new Array(locations.length);
    for (var index = 0; index < locations.length; index++) {
        arr1[index] = [locations[index].coords.lat, locations[index].coords.lng];
    }
    console.log(arr1);

    function addMarker(props) {
        var marker = new google.maps.Marker({
            position: props.coords,
            map: map,
            animation: google.maps.Animation.DROP
        });
        if (props.content) {
            var infoWindow = new google.maps.InfoWindow({ content: props.content });
            marker.addListener('click', function() {
                infoWindow.open(map, marker);
                if (marker.getAnimation() != null) {
                    marker.setAnimation(null);
                } else {
                    marker.setAnimation(google.maps.Animation.BOUNCE);
                }
            });
        }
        markers.push(marker);
    }
    for (let index = 0; index < locations.length; index++) {
        addMarker(locations[index]);
    }
    var distance = [
        0, 0, 20, 30, 0, 0, 0, 0, 0, 0, 0, 0, 14, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 15, 0, 0, 0, 13, 17, 8, 0, 0, 0, 0, 0, 0,
        20, 0, 0, 0, 0, 0, 30, 0, 0, 0, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        30, 0, 0, 0, 0, 16, 15, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 32, 0, 0, 0, 0, 0, 0, 21, 15, 0, 0, 0, 0, 9, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 24, 0, 0, 0, 0, 0, 0, 0, 0, 12,
        0, 0, 30, 15, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 25, 0, 21, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 15, 0, 0, 0, 0, 0, 25, 0, 22, 0, 0, 0, 0, 18, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 22, 0, 18, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 10, 0, 0, 0, 0, 21, 0, 18, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 18, 0, 0, 10, 0,
        14, 13, 0, 0, 21, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 17, 0, 0, 15, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 17, 0, 12, 0, 0, 0,
        0, 8, 0, 0, 0, 0, 0, 0, 18, 0, 0, 0, 0, 0, 0, 16, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 17, 16, 0, 0, 21, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 18, 0, 0, 0, 0, 0, 0, 19, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 21, 0, 0, 16, 0, 0,
        0, 0, 0, 0, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 19, 16, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 0, 0, 0, 0, 0, 0, 0, 0, 22, 
        0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 22, 0
    ];
    const Width = locations.length;
    const Height = locations.length;
    const arr = [];
    var dem = 0;
    for (let i = 0; i < Height; i++) {
        arr.push([]);
    }
    for (let i = 0; i < Height; i++) {
        for (let j = 0; j < Width; j++) {
            arr[i][j] = distance[dem];
            dem++;
        }
    }
    var show_FindRoad = document.querySelectorAll('.smenu .FindRoad');
    var show_FindInfor = document.querySelectorAll('.smenu .show_infor');
    console.log(show_FindInfor.length);
    console.log(show_FindInfor[19 - 1].innerText);

    function dijktra(arr, n, startnode, stopnode, arr1) {
        const MAX = 999;
        const INFINITY = 9999;
        var distance = [MAX],
            pred = [MAX],
            visited = [MAX],
            cost = [],
            count, mindistance, nextnode;
        for (var index = 0; index < Height; index++) {
            cost.push([]);
            for (var index1 = 0; index1 < Width; index1++) {
                if (arr[index][index1] == 0) {
                    cost[index][index1] = INFINITY;
                } else {
                    cost[index][index1] = arr[index][index1];
                }
            }
        }
        for (var index = 0; index < n; index++) {
            distance[index] = cost[startnode][index];
            pred[index] = startnode;
            visited[index] = 0;
        }
        distance[startnode] = 0;
        visited[startnode] = 1;
        count = 1;
        while (count < n - 1) {
            mindistance = INFINITY;
            for (var index = 0; index < Height; index++) {
                if (distance[index] < mindistance && !visited[index]) {
                    mindistance = distance[index];
                    nextnode = index;
                }
            }
            visited[nextnode] = 1;
            for (var index = 0; index < Height; index++) {
                if (!visited[index]) {
                    if (mindistance + cost[nextnode][index] < distance[index]) {
                        distance[index] = mindistance + arr[nextnode][index];
                        pred[index] = nextnode;
                    }
                }
            }
            count++;
        }

        var arr_infor = [];
        for (var index = 0; index < n; index++) {
            if (index == stopnode) {
                var arr4 = [];
                if (index != startnode) {
                    console.log("Khoag cach toi nut " + index + "=" + distance[index]);
                    //show_FindRoad[0].innerHTML = "Khoảng Cách Đường Đi là   " + distance[index];
                    console.log("Duong di la " + index);
                    arr4.push(new google.maps.LatLng(arr1[index][0], arr1[index][1]));

                    arr_infor.push(show_FindInfor[index].innerText);

                    j = index;
                    do {
                        j = pred[j];
                        console.log("<---", j);
                        arr_infor.push(show_FindInfor[j].innerText);
                        arr4.push(new google.maps.LatLng(arr1[j][0], arr1[j][1]));
                    } while (j != startnode);
                }
                var flightPath = new google.maps.Polyline({
                    path: arr4,
                    geodesic: true,
                    strokeColor: '#FFFFFF',
                    strokeOpacity: 1.5,
                    strokeWeight: 2
                });
                flightPath.setMap(map);

                for (var index = 0; index < show_FindRoad.length; index++) {
                    show_FindRoad[index].innerHTML = arr_infor[index].toString();
                }
            }
        }
    }
	/*
	const str_location1 = { lat: 21.032322244918202, lng: 105.84852904576427};
          const str_location2 = {lat :21.0317375196827,lng :105.84678315033476};
          var mk1 = new google.maps.Marker({ position: str_location1, map: map });
          var mk2 = new google.maps.Marker({ position: str_location2, map: map });
			function haversine_distance(mk1, mk2)
            {
                var R = 3958.8;
                var rLat1 = mk1.position.lat * (Math.PI / 180);
                var rLat2 = mk2.position.lat * (Math.PI / 180);
                var difflat = rLat2 - rLat1;
                var difflon = (mk2.position.lng - mk1.position.lng) * (Math.PI / 180);
                var d = 2 * R * Math.asin(Math.sqrt(Math.sin(difflat / 2) * Math.sin(difflat / 2) + Math.cos(rLat1) * Math.cos(rLat2) * Math.sin(difflon / 2) * Math.sin(difflon / 2)));
                return d;
            }
			var sum = haversine_distance(mk1,mk2);
			console.log(sum.toFixed(2));
	*/
    function onchangefun() {
        var startnode = calculateAndDisplayStart();
        var stopnode = calculateAndDisplayStop();
        dijktra(arr, 21, startnode, stopnode, arr1);
    }
    document.getElementById('start').addEventListener('change', onchangefun);
    document.getElementById('stop').addEventListener('change', onchangefun);
    return onchangefun();
    window.load;
}
var calculateAndDisplayStart = function() {
    return document.getElementById('start').value;
}
var calculateAndDisplayStop = function() {
    return document.getElementById('stop').value;
}

function calculateAndDisplay() {
    initMap();
}
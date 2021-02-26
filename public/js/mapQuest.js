function initMap() {
	// add your code here
	L.mapquest.key = "yPL89UCC36QX3BPZ3y8oBGyOM2EGRAFh";

	var map = L.mapquest.map('map', {
		center: [32.88, -117.236],
		layers: L.mapquest.tileLayer('map'),
		zoom: 12,
		zoomControl: false
	});

	L.marker([32.88, -117.236]).addTo(map);
}
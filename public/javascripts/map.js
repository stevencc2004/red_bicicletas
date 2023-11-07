var map = L.map('map').setView([-34.6012424, -58.3861497], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

L.marker([-34.6012424, -58.3861497]).addTo(map);
L.marker([-34.596932, -58.3808267]).addTo(map);
L.marker([-34.599564, -58.3778777]).addTo(map);
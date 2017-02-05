"use strict";
var utils = require("utils/utils");
var ClusterManager = (function () {
    function ClusterManager(mapView) {
        this.mapView = mapView;
        var context = utils.ad.getApplicationContext();
        this.android = new com.google.maps.android.clustering.ClusterManager(context, mapView.gMap);
        mapView.gMap.setOnCameraIdleListener(this.android);
    }
    ClusterManager.prototype.addMarkers = function (markers) {
        if (!markers)
            return;
        for (var _i = 0, markers_1 = markers; _i < markers_1.length; _i++) {
            var marker = markers_1[_i];
            this.addMarker(marker);
        }
        return this;
    };
    ClusterManager.prototype.addMarker = function (marker) {
        this.android.addItem(new com.google.maps.android.clustering.ClusterItem({
            rotation: marker.rotation,
            getPosition: function () {
                return marker.position.android;
            }
        }));
        return this;
    };
    ClusterManager.prototype.removeMarker = function (marker) {
        this.android.removeItem(marker.android);
        return this;
    };
    ClusterManager.prototype.clearMarkers = function () {
        this.android.clearItems();
        return this;
    };
    ClusterManager.prototype.refresh = function () {
        this.android.cluster();
        return this;
    };
    return ClusterManager;
}());
exports.ClusterManager = ClusterManager;

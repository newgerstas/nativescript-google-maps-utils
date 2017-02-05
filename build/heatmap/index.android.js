"use strict";
var HeatmapManager = (function () {
    function HeatmapManager(mapView) {
        this.mapView = mapView;
        this.android = new com.google.maps.android.heatmaps.HeatmapTileProvider.Builder().build();
        mapView.gMap.addTileOverlay(new com.google.android.gms.maps.model.TileOverlayOptions().tileProvider(this.android));
    }
    HeatmapManager.prototype.setSource = function (positions) {
        var list = new java.util.ArrayList();
        positions.forEach(function (position) {
            list.add(position.android);
        });
        this.android.setData(list);
    };
    return HeatmapManager;
}());
exports.HeatmapManager = HeatmapManager;

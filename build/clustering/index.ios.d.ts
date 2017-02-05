import { MapView, Marker } from "nativescript-google-maps-sdk";
export declare class ClusterManager {
    private mapView;
    private android;
    constructor(mapView: MapView);
    addMarkers(markers: Array<Marker>): ClusterManager;
    addMarker(marker: Marker): ClusterManager;
    removeMarker(marker: Marker): ClusterManager;
    clearMarkers(): ClusterManager;
    refresh(): ClusterManager;
}

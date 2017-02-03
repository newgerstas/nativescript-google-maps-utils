import { MapView, Marker } from "nativescript-google-maps-sdk";

export declare class ClusterManager {
    constructor(mapView: MapView);
    public addMarkers(markers: Array<Marker>): ClusterManager;
    public addMarker(marker: Marker): ClusterManager;
    public removeMarker(marker: Marker): ClusterManager;
    public clearMarkers(): ClusterManager;
    public refresh(): ClusterManager;
}
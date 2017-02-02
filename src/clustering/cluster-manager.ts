import { MapView, Marker } from "nativescript-google-maps-sdk";

export abstract class ClusterManager {
    
    constructor(private mapView: MapView) {

    }

    public abstract addMarkers(markers: Array<Marker>): void;
    public abstract addMarker(marker: Marker): void;
    public abstract removeMarker(marker: Marker): void;
    public abstract reload(): void;
}
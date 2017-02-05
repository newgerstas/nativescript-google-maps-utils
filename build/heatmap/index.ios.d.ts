import { MapView, Position } from "nativescript-google-maps-sdk";
export declare class HeatmapManager {
    private mapView;
    private android;
    constructor(mapView: MapView);
    setSource(positions: Array<Position>): void;
}

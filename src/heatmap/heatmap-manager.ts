import { MapView, Position } from "nativescript-google-maps-sdk";

export interface IHeatmapOptions {
    provider: any;
    overlay: any;
}

export abstract class HeatmapManager {
    
    constructor(private mapView: MapView, config?: IHeatmapOptions) {

    }

    public abstract addPositions(markers: Array<Position>): void;
    public abstract addPosition(marker: Position): void;
    public abstract removePosition(marker: Position): void;
    public abstract reload(): void;
}

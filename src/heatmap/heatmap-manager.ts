import { MapView, Position } from "nativescript-google-maps-sdk";

export interface HeatmapOptions {
    provider: any;
    overlay: any;
}

export abstract class HeatmapManager {
    public abstract setSource(positions: Array<Position>): void;
}

import * as utils from "utils/utils";
import { MapView, Position } from "nativescript-google-maps-sdk"

export class HeatmapManager {

    private android: any;

    constructor(private mapView: MapView) {
        throw "IOS Cluster Manager is not implemented yet";
    }

    public setSource(positions: Array<Position>): void {
    }
}

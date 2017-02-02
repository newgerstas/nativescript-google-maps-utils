import * as utils from "utils/utils";
import { MapView, Position } from "nativescript-google-maps-sdk"
import { HeatmapManager as HeatmapManagerBase, HeatmapOptions } from "./heatmap-manager";

export class HeatmapManager extends HeatmapManagerBase {

    private android: any;

    constructor(private mapView: MapView) {
        super();
        throw "IOS Cluster Manager is not implemented yet";
    }

    public setSource(positions: Array<Position>): void {
    }
}

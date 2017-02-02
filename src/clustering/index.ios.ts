import * as utils from "utils/utils";
import { MapView, Marker, Position } from "nativescript-google-maps-sdk"
import { ClusterManager as ClusterManagerBase } from "./cluster-manager";

export class ClusterManager extends ClusterManagerBase {

  private android: any;

  constructor(private mapView: MapView) {
    super();
    throw "IOS Cluster Manager is not implemented yet";
  }

  public addMarkers(markers: Array<Marker>): void {

  }

  public addMarker(marker: Marker): void {

  }

  public removeMarker(marker: Marker): void {

  }

  public clearMarkers(): void {

  }

  public refresh(): void {

  }

}

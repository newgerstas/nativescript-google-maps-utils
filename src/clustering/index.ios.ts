import * as utils from "utils/utils";
import { MapView, Marker, Position } from "nativescript-google-maps-sdk"

export class ClusterManager {

  private android: any;

  constructor(private mapView: MapView) {
    throw "IOS Cluster Manager is not implemented yet";
  }

  public addMarkers(markers: Array<Marker>): ClusterManager {
    throw "IOS Cluster Manager is not implemented yet";
  }

  public addMarker(marker: Marker): ClusterManager {
    throw "IOS Cluster Manager is not implemented yet";
  }

  public removeMarker(marker: Marker): ClusterManager {
    throw "IOS Cluster Manager is not implemented yet";
  }

  public clearMarkers(): ClusterManager {
    throw "IOS Cluster Manager is not implemented yet";
  }

  public refresh(): ClusterManager {
    throw "IOS Cluster Manager is not implemented yet";
  }

}

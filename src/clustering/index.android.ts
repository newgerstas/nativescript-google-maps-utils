declare var java, com;

import * as utils from "utils/utils";
import { MapView, Marker, Position } from "nativescript-google-maps-sdk"
import { ClusterManager as ClusterManagerBase } from "./cluster-manager";

export class ClusterManager extends ClusterManagerBase {

  private android: any;

  constructor(private mapView: MapView) {
    super();

    const context = utils.ad.getApplicationContext();
    this.android = new com.google.maps.android.clustering.ClusterManager(context, mapView.gMap);
    mapView.gMap.setOnCameraIdleListener(this.android);
  }

  public addMarkers(markers: Array<Marker>): void {
    if (!markers) return;
    markers.forEach(this.addMarker);
  }

  public addMarker(marker: Marker): void {
    this.android.addItem(new com.google.maps.android.clustering.ClusterItem({
      rotation: marker.rotation,
      getPosition: function () {
        return marker.position.android;
      }
    }));
  }

  public removeMarker(marker: Marker): void {
    this.android.removeItem(marker.android);
  }

  public clearMarkers(): void {
    this.android.clearMarkers();
  }

  public refresh(): void {
    this.android.cluster();
  }

}

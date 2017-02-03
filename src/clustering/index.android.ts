declare var java, com;

import * as utils from "utils/utils";
import { MapView, Marker, Position } from "nativescript-google-maps-sdk"

export class ClusterManager {

  private android: any;

  constructor(private mapView: MapView) {
    const context = utils.ad.getApplicationContext();
    this.android = new com.google.maps.android.clustering.ClusterManager(context, mapView.gMap);
    mapView.gMap.setOnCameraIdleListener(this.android);
  }

  public addMarkers(markers: Array<Marker>): ClusterManager {
    if (!markers)
      return;

    for (let marker of markers) {
      this.addMarker(marker);
    }
    return this;
  }

  public addMarker(marker: Marker): ClusterManager {
    this.android.addItem(new com.google.maps.android.clustering.ClusterItem({
      rotation: marker.rotation,
      getPosition: function () {
        return marker.position.android;
      }
    }));
    return this;
  }

  public removeMarker(marker: Marker): ClusterManager {
    this.android.removeItem(marker.android);
    return this;
  }

  public clearMarkers(): ClusterManager {
    this.android.clearItems();
    return this;
  }

  public refresh(): ClusterManager {
    this.android.cluster();
    return this;
  }

}

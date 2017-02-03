declare var java, com;

import * as utils from "utils/utils";
import { MapView, Position } from "nativescript-google-maps-sdk"

export class HeatmapManager {

  private android: any;

  constructor(private mapView: MapView) {
    this.android = new com.google.maps.android.heatmaps.HeatmapTileProvider.Builder().build();
    mapView.gMap.addTileOverlay(new com.google.android.gms.maps.model.TileOverlayOptions().tileProvider(this.android));
  }

  public setSource(positions: Array<Position>): void {
    var list = new java.util.ArrayList();
    positions.forEach(function (position) {
      list.add(position.android);
    });
    this.android.setData(list);
  }
}

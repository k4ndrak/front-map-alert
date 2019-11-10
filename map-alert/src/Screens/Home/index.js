import React from "react";

import MapProvider from "../../Components/MapContext";
import Map from "../../Components/Map";
import FabAdicionar from "../../Components/FabAdicionar";
import AddAlerta from "../../Components/AddAlerta";

export default class Home extends React.Component {
  render() {
    return (
      <MapProvider>
        <AddAlerta />
        <Map />
        <FabAdicionar />
      </MapProvider>
    );
  }
}

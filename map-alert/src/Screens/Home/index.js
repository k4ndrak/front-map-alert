import React from "react";

import MapProvider from "../../Components/MapContext";
import Map from "../../Components/Map";
import FabAdicionar from "../../Components/FabAdicionar";

export default class Home extends React.Component {
  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <MapProvider>
        <Map />
        <FabAdicionar
          buttonAddAlerta={() => this.props.navigation.push("AddAlerta")}
        />
      </MapProvider>
    );
  }
}

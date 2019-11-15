import React from "react";
import { TouchableOpacity, Text } from "react-native";

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
        <FabAdicionar />
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate("AddAlerta")}
        >
          <Text>Button</Text>
        </TouchableOpacity>
      </MapProvider>
    );
  }
}

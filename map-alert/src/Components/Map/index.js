import React from "react";
import styles from "./style";
import { View } from "react-native";
import * as Permissions from "expo-permissions";
import * as Location from "expo-location";
import MapView from "react-native-maps";

export default class Map extends React.Component {
  state = {
    region: null
  };

  _getCurrentLocation = async () => {
    const { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== "granted") {
      return console.log("Permissão negada!");
    }

    const {
      coords: { latitude, longitude }
    } = await Location.getCurrentPositionAsync({});
    this.setState({
      region: {
        latitude,
        longitude,
        latitudeDelta: 0.0922 / 50,
        longitudeDelta: 0.0421 / 50
      }
    });
  };

  componentDidMount() {
    this._getCurrentLocation();
  }

  render() {
    const { region } = this.state;
    if (!region) {
      return <View />;
    }

    return <MapView style={styles.map} region={region} showsUserLocation />;
  }
}

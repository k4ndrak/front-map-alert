import React from "react";

import * as Permissions from "expo-permissions";
import * as Location from "expo-location";
import Map from "../../Components/Map";
import FabAdicionar from "../../Components/FabAdicionar";

import api from "../../services/api";

export default class Home extends React.Component {
  static navigationOptions = {
    header: null
  };

  state = {
    region: null,
    alert: []
  };

  _getOpenAlerts = async () => {
    try {
      const response = await api.get(`/api/alert`);
      const dados = response.data;
      this.setState({ alerts: dados });
    } catch (err) {
      console.error("Erro fetching data --------", err);
    }
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
        latitudeDelta: 0.0922 / 30,
        longitudeDelta: 0.0421 / 30
      }
    });
  };

  componentDidMount() {
    this._getCurrentLocation();
    this._getOpenAlerts();
  }

  render() {
    return (
      <>
        <Map
          currentLocation={this.state.region}
          alertsOpened={this.state.alerts}
        />
        <FabAdicionar
          buttonAddAlerta={() =>
            this.props.navigation.push("AddAlerta", {
              region: this.state.region
            })
          }
        />
      </>
    );
  }
}

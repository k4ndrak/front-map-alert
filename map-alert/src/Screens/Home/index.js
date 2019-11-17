import React from "react";

import MapProvider from "../../Components/MapContext";
import Map from "../../Components/Map";
import FabAdicionar from "../../Components/FabAdicionar";

import api from "../../services/api";

export default class Home extends React.Component {
  static navigationOptions = {
    header: null
  };

  state = {
    alertas: []
  };

  _getOpenAlerts = async () => {
    try {
      const response = await api.get(`/api/alert`);
      const dados = response.data;
      this.setState({ alertas: dados });
      console.log(this.state.alertas);
    } catch (err) {
      console.error("Erro fetching data --------", err);
    }
  };

  componentDidMount() {
    this._getOpenAlerts();
  }

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

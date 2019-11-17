import React from "react";
import { TextInput } from "react-native";

import Header from "../../Components/Header";
import styles from "./styles";

import api from "../../services/api";

export default class AddAlerta extends React.Component {
  static navigationOptions = {
    header: null
  };

  state = {
    descricaoText: "",
    error: ""
  };

  _pressButtonAddAlert = async () => {
    try {
      const { latitude, longitude } = this.props.navigation.getParam("region");

      const response = await api.post(`/api/alert`, {
        latitude: 12.1241,
        longitude: 1231.312,
        descricao: "teste",
        local: 1,
        tipo: 1
      });

      console.log(response);

      this.props.navigation.navigate("Home");
    } catch (err) {
      console.error("Erro ao adicionar alerta------", err);
    }
  };

  render() {
    return (
      <>
        <Header
          titlePage=""
          buttonHeaderLeft={() => this.props.navigation.goBack()}
          buttonHeaderRight={this._pressButtonAddAlert}
        />

        <TextInput
          placeholder="Descreva o problema"
          editable
          multiline
          numberOfLines={10}
          onChangeText={text => this.setState({ descricaoText: text })}
          value={this.state.descricaoText}
          style={styles.inputText}
        />
      </>
    );
  }
}

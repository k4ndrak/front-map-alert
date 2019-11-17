import React from "react";
import { TextInput } from "react-native";
import { Snackbar } from "react-native-paper";

import Header from "../../Components/Header";
import styles from "./styles";

import api from "../../services/api";

export default class AddAlerta extends React.Component {
  static navigationOptions = {
    header: null
  };

  state = {
    descricaoText: "",
    errorMessage: "",
    errorAlert: false
  };

  _pressButtonAddAlert = async () => {
    if (this.state.descricaoText.length !== 0) {
      try {
        const { latitude, longitude } = this.props.navigation.getParam(
          "region"
        );

        const response = await api.post(`/api/alert/`, {
          latitude: latitude,
          longitude: longitude,
          descricao: this.state.descricaoText,
          local: 1,
          tipo: 1
        });

        this.props.navigation.navigate("Home");
      } catch (err) {
        console.error("Erro ao adicionar alerta------", err);
      }
    } else {
      this.setState({
        errorMessage: "Você precisa descrever o problema",
        errorAlert: true
      });
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

        <Snackbar
          visible={this.state.errorAlert}
          onDismiss={() => this.setState({ errorAlert: false })}
          duration={7000}
        >
          {this.state.errorMessage}
        </Snackbar>
      </>
    );
  }
}

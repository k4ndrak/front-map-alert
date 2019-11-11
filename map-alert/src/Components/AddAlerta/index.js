import React from "react";
import { View } from "react-native";
import { Modal, Portal, TextInput, Button, Title } from "react-native-paper";

import { MapContext } from "../MapContext";
import styles from "./style";

class AddAlerta extends React.Component {
  state = {
    localText: "",
    tipoText: "",
    descricaoText: ""
  };

  _enviarAlerta() {
    fetch("192.168.1.109:8000/api/alert", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        latitude: null,
        longitude: null,
        descricao: this.state.descricaoText,
        local: this.state.localText,
        tipo: this.state.tipoText
      })
    })
      .then(response => response.json())
      .then(responseJson => {
        console.log(responseJson);
      })
      .catch(error => {
        console.error(error);
      });
  }

  render() {
    return (
      <MapContext.Consumer>
        {mapContext => (
          <Portal>
            <Modal
              visible={mapContext.modalVisible}
              onDismiss={mapContext._hideModal}
            >
              <View style={styles.modal}>
                <Title style={styles.addAlertaTitle}>Adicionar Alerta</Title>

                <TextInput
                  label="Local"
                  value={this.state.localText}
                  onChangeText={text => this.setState({ localText: text })}
                  style={styles.inputText}
                />
                <TextInput
                  label="Tipo"
                  value={this.state.tipoText}
                  onChangeText={text => this.setState({ tipoText: text })}
                  style={styles.inputText}
                />
                <TextInput
                  label="Descreva o problema"
                  value={this.state.descricaoText}
                  onChangeText={text => this.setState({ descricaoText: text })}
                  multiline={true}
                  numberOfLines={5}
                />

                <Button
                  icon="plus"
                  mode="contained"
                  onPress={() => this._enviarAlerta()}
                  style={styles.addAlertaButton}
                >
                  Adicionar
                </Button>
              </View>
            </Modal>
          </Portal>
        )}
      </MapContext.Consumer>
    );
  }
}

export default AddAlerta;

import React from "react";
import { KeyboardAvoidingView } from "react-native";
import styles from "./styles";
import { TextInput, Button, Snackbar, HelperText } from "react-native-paper";

import Header from "../../Components/Header";

export default class Login extends React.Component {
  state = {
    username: "",
    senha: "",
    erroAlert: true
  };

  render() {
    return (
      <>
        <Header titlePage="Entrar" />

        <KeyboardAvoidingView
          behavior="padding"
          style={styles.container}
          anabled
        >
          <TextInput
            label="Username"
            value={this.state.username}
            onChangeText={username => this.setState({ username })}
            mode={"outlined"}
            ref={ref => {
              this._usernameInput = ref;
            }}
            returnKeyType="next"
            onSubmitEditing={() => this._senhaInput && this._senhaInput.focus()}
            style={styles.inputText}
            autoCapitalize="none"
          />

          <TextInput
            label="Senha"
            value={this.state.senha}
            onChangeText={senha => this.setState({ senha })}
            mode={"outlined"}
            secureTextEntry={true}
            ref={ref => {
              this._senhaInput = ref;
            }}
            returnKeyType="done"
            style={styles.inputText}
          />

          <Button
            onPress={() => console.log("Pressed")}
            mode="contained"
            style={styles.buttonEntrarNoApp}
          >
            Entrar
          </Button>

          <Snackbar
            style={styles.snackberErroAlert}
            visible={this.state.erroAlert}
            onDismiss={() => this.setState({ erroAlert: false })}
            duration={7000}
          >
            Mensagem de erro vfhisovnfisnviosbviosdb
          </Snackbar>
        </KeyboardAvoidingView>
      </>
    );
  }
}

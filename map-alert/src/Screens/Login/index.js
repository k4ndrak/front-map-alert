import React from "react";
import { KeyboardAvoidingView, Text } from "react-native";
import styles from "./styles";
import {
  TextInput,
  Button,
  Snackbar,
  Headline,
  HelperText
} from "react-native-paper";

export default class Login extends React.Component {
  state = {
    username: "",
    senha: "",
    erroAlert: true
  };

  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container} anabled>
        <Headline style={styles.titlePage}>Entrar</Headline>

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
        />

        <HelperText type="error" visible={this.state.username.includes(" ")}>
          Parece que algo nao está certo aqui.
        </HelperText>

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
        />

        <Button
          onPress={() => console.log("Pressed")}
          mode="contained"
          style={styles.buttonEntrarNoApp}
        >
          Entrar
        </Button>

        <Button onPress={() => console.log("Pressed")} mode="text">
          <Text style={styles.buttonTextCriarContaPage}>
            Não possui uma conta? Crie uma
          </Text>
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
    );
  }
}

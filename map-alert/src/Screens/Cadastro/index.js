import React from "react";
import { Text, KeyboardAvoidingView } from "react-native";
import styles from "./styles";
import {
  TextInput,
  Button,
  Snackbar,
  Headline,
  HelperText
} from "react-native-paper";

export default class Cadastro extends React.Component {
  state = {
    username: "",
    senha: "",
    confirmarSenha: "",
    nome: "",
    cpf: "",
    erroAlert: true
  };

  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
        <Headline style={styles.titlePage}>Criar conta</Headline>

        <TextInput
          label="Nome"
          value={this.state.nome}
          onChangeText={nome => this.setState({ nome })}
          mode={"outlined"}
          ref={ref => {
            this._nomeInput = ref;
          }}
          returnKeyType="next"
          onSubmitEditing={() =>
            this._usernameInput && this._usernameInput.focus()
          }
        />

        <TextInput
          label="Username"
          value={this.state.username}
          onChangeText={username => this.setState({ username })}
          mode={"outlined"}
          ref={ref => {
            this._usernameInput = ref;
          }}
          returnKeyType="next"
          onSubmitEditing={() => this._cpfInput && this._cpfInput.focus()}
        />

        <TextInput
          label="CPF"
          value={this.state.cpf}
          onChangeText={cpf => this.setState({ cpf })}
          mode={"outlined"}
          keyboardType="numeric"
          ref={ref => {
            this._cpfInput = ref;
          }}
          returnKeyType="next"
          onSubmitEditing={() => this._senhaInput && this._senhaInput.focus()}
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
          returnKeyType="next"
          onSubmitEditing={() =>
            this._confirmarSenhaInput && this._confirmarSenhaInput.focus()
          }
        />

        <TextInput
          label="Confirme sua senha"
          value={this.state.confirmarSenha}
          onChangeText={confirmarSenha => this.setState({ confirmarSenha })}
          mode={"outlined"}
          secureTextEntry={true}
          ref={ref => {
            this._confirmarSenhaInput = ref;
          }}
          returnKeyType="done"
        />

        <Button
          onPress={() => console.log("Pressed")}
          mode="contained"
          style={styles.buttonEntrarNoApp}
        >
          Criar
        </Button>

        <Button onPress={() => console.log("Pressed")} mode="text">
          <Text style={styles.buttonTextCriarContaPage}>
            Já possui uma conta? Faça Login
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

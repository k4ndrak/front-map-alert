import React from "react";
import { TextInput } from "react-native";

import Header from "../../Components/Header";
import styles from "./styles";

export default class AddAlerta extends React.Component {
  static navigationOptions = {
    header: null
  };

  state = {
    descricaoText: ""
  };

  render() {
    return (
      <>
        <Header
          titlePage=""
          buttonHeaderLeft={() => this.props.navigation.goBack()}
        />

        <TextInput
          placeholder="Descreva o problema"
          placeholderTextColor="grey"
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

import React from "react";
import { View, TouchableWithoutFeedback } from "react-native";
import { Caption, Title } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";
import styles from "./style";

export default class Header extends React.Component {
  renderHeader = () => {
    return (
      <View style={styles.header}>
        <View style={{ flex: 3 }}>
          <Caption>Localização atual</Caption>
          <Title style={{ fontSize: 15 }}>Bloco C</Title>
        </View>
        <View
          style={{ flex: 1, alignItems: "flex-end", justifyContent: "center" }}
        >
          {/* <TouchableWithoutFeedback>
            <Ionicons name="ios-menu" size={35} />
          </TouchableWithoutFeedback> */}
        </View>
      </View>
    );
  };

  render() {
    return <>{this.renderHeader()}</>;
  }
}

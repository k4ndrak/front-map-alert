import React from "react";
import { View, TouchableWithoutFeedback } from "react-native";
import { Title } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";
import styles from "./style";

const Header = props => {
  return (
    <View style={styles.header}>
      <View>
        <TouchableWithoutFeedback>
          <Ionicons name="ios-close" size={40} />
        </TouchableWithoutFeedback>
      </View>
      <View>
        <Title style={styles.titlePage}>{props.titlePage}</Title>
      </View>
      <View></View>
    </View>
  );
};

export default Header;

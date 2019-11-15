import React from "react";
import {
  View,
  TouchableWithoutFeedback,
  Text,
  TouchableOpacity
} from "react-native";
import { Title } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";
import styles from "./style";

const Header = props => {
  return (
    <View style={styles.header}>
      <View>
        <TouchableWithoutFeedback>
          <Ionicons name="ios-close" size={35} style={styles.closeIcon} />
        </TouchableWithoutFeedback>
      </View>
      <View>
        <Title style={styles.titlePage}>{props.titlePage}</Title>
      </View>
      <View>
        <TouchableOpacity
          onPress={() => console.log("vnkdl")}
          style={styles.headerButton}
        >
          <Text style={styles.headerButtonText}>Enviar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;

import React from "react";
import { StyleSheet, View } from "react-native";
import { Provider as AppProvider } from "react-native-paper";
import Constants from "expo-constants";

import Login from "./src/Screens/Login";
import Cadastro from "./src/Screens/Cadastro";
import Home from "./src/Screens/Home";

export default function App() {
  return (
    <AppProvider>
      <View style={styles.container}>
        <Home />
      </View>
    </AppProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
    // marginTop: Constants.statusBarHeight
  }
});

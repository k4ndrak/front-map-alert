import React from "react";
import { StyleSheet, View } from "react-native";
import { Provider as AppProvider } from "react-native-paper";

import Login from "./src/Screens/Login";
import Cadastro from "./src/Screens/Cadastro";
import Home from "./src/Screens/Home";
import AddAlerta from "./src/Screens/AddAlerta";

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
    flex: 1,
    backgroundColor: "#FAFBFD"
  }
});

import React from "react";
import { StyleSheet, View } from "react-native";
import { Provider as AppProvider } from "react-native-paper";
import AppNavigator from "./src/navigation/AppNavigator";

export default function App() {
  return (
    <AppProvider>
      <View style={styles.container}>
        <AppNavigator />
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

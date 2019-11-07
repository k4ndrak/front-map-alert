import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 15
  },
  logo: {
    width: 100,
    height: 100,
    alignSelf: "center",
    marginBottom: 50
  },
  buttonEntrarNoApp: {
    marginVertical: 20
  },
  buttonTextCriarContaPage: {
    fontSize: 12
  },
  snackberErroAlert: {
    alignItems: "flex-end",
    backgroundColor: "red"
  },
  titlePage: {
    textAlign: "center",
    marginBottom: 10
  }
});

export default styles;

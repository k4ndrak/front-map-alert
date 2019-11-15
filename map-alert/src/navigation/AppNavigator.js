import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

// import AuthLoadingScreen from "../screens/authLoading";
import LoginScreen from "../Screens/Login";
import CadastrarScreen from "../Screens/Cadastro";
import HomeScreen from "../Screens/Home";
import AddAlertaScreen from "../Screens/AddAlerta";

const AuthStack = createStackNavigator({
  Login: LoginScreen,
  Cadastrar: CadastrarScreen
});
const AppStack = createStackNavigator({
  Home: HomeScreen,
  AddAlerta: AddAlertaScreen
});

export default createAppContainer(
  createSwitchNavigator(
    {
      // AuthLoading: AuthLoadingScreen,
      App: AppStack,
      Auth: AuthStack
    },
    {
      initialRouteName: "App"
    }
  )
);

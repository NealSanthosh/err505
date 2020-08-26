import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import WelcomeScreen from "./screens/WelcomeScreen";
import AppTabNavigator from "./components/AppTabNavigator";

export default class App extends React.Component {
  render() {
    return (
      <View>
        <AppTabNavigator />
      </View>
    );
  }
}

const switchNavigtor = creatSwitchNavigator({
  WelcomeScreen: WelcomeScreen,
  AppTabNavigator: AppTabNavigator,
});

const appContainer = creatAppContainer(switchNavigtor);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

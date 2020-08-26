import React, { Component } from "react";
import {
  View,
  Text,
  TextInput,
  Modal,
  KeyboardAvoidingView,
  StyleSheet,
  TouchableOpacity,
  Alert,
  ScrollView,
  Image,
} from "react-native";
import BookDonateScreen from "../screens/DonateScreen";

export const AppTabNavigator = createBottomTabNavigator({
  DonateBooks: {
    screen: BookDonateScreen,
    navigationOptions: {
      tabBarIcon: <Image source={require("../assets/book.png")} />,
      tabBarLabel: "Donate Books",
    },
  },
  BookRequest: {
    screen: BookRequestScreen,
    navigationOptions: {
      tabBarIcon: <Image source={require("../assets/request.png")} />,
      tabBarLabel: " Book Request",
    },
  },
});

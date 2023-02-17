import React from "react";
import { View, Text } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import SignIn from "../Screens/AuthScreens/SignIn";
import NewAccount from "../Screens/AuthScreens/NewAccount";
import PasswordReset from "../Screens/AuthScreens/PasswordReset";
import ActivateAccount from "../Screens/AuthScreens/ActivateAccount";
import HomeScreen from "../Screens/HomeScreen";
import ResendCodeScreen from "../Screens/AuthScreens/ActivateAccount/ResendCodeScreen";
import Listener from "../Screens/Listener";
import DJ from "../Screens/DJ";
import Venue from "../Screens/Listener";

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer >
        <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName="SignIn">
          <Stack.Screen name="SignIn" component={SignIn} />
          <Stack.Screen name="NewAccount" component={NewAccount} />
          <Stack.Screen name="PasswordReset" component={PasswordReset} />
          <Stack.Screen name="ActivateAccount" component={ActivateAccount} />
          <Stack.Screen name="ResendCodeScreen" component={ResendCodeScreen} />
          <Stack.Screen name="Listener" component={Listener} />

          <Stack.Screen name="HomeScreen" component={HomeScreen} />
        </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;

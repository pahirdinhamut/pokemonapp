import React from "react";
import { View, Text } from "react-native";
import HomeScreen from "./screen/HomeScreen";
import Detail from "./screen/Detail";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
const Stack = createStackNavigator();

const Root = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerShown: false,
            headerStyle: { backgroundColor: "white" },
          }}
        />
        <Stack.Screen
          name="Pokemons"
          component={Detail}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
    // <HomeScreen />
  );
};

export default Root;

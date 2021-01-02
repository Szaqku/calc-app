import React from 'react';
import {createStackNavigator} from "@react-navigation/stack";
import {NavigationContainer} from "@react-navigation/native";
import MetricScreen from "./screens/MetricScreen";
import CalculatorScreen from "./screens/CalculatorScreen";
import NotFoundScreen from "./screens/NotFoundScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Metrics" component={MetricScreen} />
          <Stack.Screen name="Calculator" component={CalculatorScreen} />
          <Stack.Screen name="NotFoundScreen" component={NotFoundScreen} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}


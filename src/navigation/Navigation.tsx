import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Welcome from "../screens/welcome/Welcome";
import QuestionScreen from "../screens/questions/QuestionsScreen";
import ResultScreen from "../screens/results/ResultsScreen";

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Welcome"
          component={Welcome}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Questions"
          component={QuestionScreen}
          options={{ title: "Trivia" }}
        />
        <Stack.Screen
          name="Results"
          component={ResultScreen}
          options={{ title: "Resultados" }}
        ></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;

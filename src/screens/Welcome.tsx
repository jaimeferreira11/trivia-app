import React from "react";
import { View, Text, Button } from "react-native";
import { RootStackParamList } from "../types/types";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

interface IWelcomeProps {
  navigation: NativeStackNavigationProp<RootStackParamList, "Welcome">;
}

const Welcome = ({ navigation }: IWelcomeProps) => {
  return (
    <View>
      <Text>¡Bienvenido al desafío de Trivia!</Text>

      <Button
        title="Iniciar"
        onPress={() => navigation.navigate("Questions")}
      />
    </View>
  );
};

export default Welcome;

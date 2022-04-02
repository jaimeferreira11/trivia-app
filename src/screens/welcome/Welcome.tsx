import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Button } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../../interfaces/interfaces";

type WelcomeScreenProp = NativeStackNavigationProp<
  RootStackParamList,
  "Welcome"
>;

const Welcome = () => {
  const navigation = useNavigation<WelcomeScreenProp>();
  return (
    <View style={styles.content}>
      <Text style={[styles.row, styles.title]}>
        ¡Bienvenido al desafío de Trivia!
      </Text>

      <Text style={[styles.row, styles.text]}>
        Son 10 preguntas de opción multiple
      </Text>

      <Text style={[styles.row, styles.text]}>¿Podés lograr el 100%?</Text>
      <Button
        title="Iniciar"
        type="outline"
        titleStyle={{ fontSize: 24 }}
        buttonStyle={{ width: 200 }}
        onPress={() => navigation.navigate("Questions")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    alignItems: "center",
    flex: 4,
    marginHorizontal: 50,
    marginTop: 100,
    marginBottom: 50,
  },
  row: {
    flex: 1,
    justifyContent: "space-between",
  },
  title: {
    fontSize: 22,
    textAlign: "center",
    fontWeight: "bold",
  },
  text: {
    fontSize: 20,
    textAlign: "center",
  },
});

export default Welcome;

import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React, { useContext } from "react";
import { ScrollView, View, StyleSheet } from "react-native";
import { Text, Icon, Button, ListItem } from "react-native-elements";
import { Loading } from "../../components/Loading";
import { AppContext } from "../../context/AppContext";
import { RootStackParamList } from "../../interfaces/interfaces";

type ResultScreenProp = NativeStackNavigationProp<
  RootStackParamList,
  "Results"
>;

const ResultScreen = () => {
  const navigation = useNavigation<ResultScreenProp>();

  const { answerList } = useContext(AppContext).state;

  if (!answerList) {
    return <Loading loading={true} />;
  }

  return (
    <View style={styles.viewBody}>
      <View style={{ alignItems: "center" }}>
        <Text style={styles.title}> Lograste</Text>
        <Text
          h3
          style={{ fontWeight: "bold", marginBottom: 20, color: "green" }}
        >
          {answerList.filter((ans) => ans.isCorrect).length} /
          {answerList.length}
        </Text>
      </View>

      {
        <ScrollView style={{ flex: 1 }}>
          {answerList.map((answer, index) => {
            return (
              <ListItem key={index} bottomDivider>
                <ListItem.Content>
                  <ListItem.Title>
                    <Icon
                      name={answer.isCorrect ? "check-circle" : "cancel"}
                      color={answer.isCorrect ? "green" : "red"}
                      style={{ marginEnd: 5 }}
                    />
                    {answer.number}. {answer.text}
                  </ListItem.Title>
                  <ListItem.Subtitle>
                    <Text style={{ fontWeight: "bold", color: "gray" }}>
                      Respuesta:
                    </Text>
                    {answer.answer}
                  </ListItem.Subtitle>
                </ListItem.Content>
              </ListItem>
            );
          })}
        </ScrollView>
      }

      <Button
        style={{
          marginVertical: 30,
        }}
        containerStyle={styles.btnContainer}
        title="¿Jugar otra vez?"
        type="outline"
        onPress={() => navigation.replace("Welcome")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  viewBody: {
    marginHorizontal: 20,
    marginVertical: 10,
    flexDirection: "column",
    flex: 1,
  },

  title: {
    fontWeight: "bold",
    fontSize: 24,
    letterSpacing: 1.5,
    marginBottom: 10,
    textAlign: "center",
  },
  btnContainer: {
    width: "70%",
    alignSelf: "center",
  },
});

export default ResultScreen;

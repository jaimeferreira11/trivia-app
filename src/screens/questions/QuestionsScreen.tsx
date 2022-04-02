import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React, { useContext, useState } from "react";
import { View, StyleSheet } from "react-native";
import { Text } from "react-native-elements";
import { Loading } from "../../components/Loading";
import { AppContext } from "../../context/AppContext";
import { useFetchQuestions } from "../../hooks/useFetchQuestions";
import { AnswersComponent } from "./components/AnswersComponent";
import QuestionComponent from "./components/QuestionComponent";
import { useEffect } from "react";
import { Answer, RootStackParamList } from "../../interfaces/interfaces";

type QuestionsScreenProp = NativeStackNavigationProp<
  RootStackParamList,
  "Questions"
>;

const QuestionScreen = () => {
  const navigation = useNavigation<QuestionsScreenProp>();

  const { loading, data } = useFetchQuestions();
  const [answerList, setAnswerList] = useState<Answer[]>([]);
  const { dispatch } = useContext(AppContext);

  useEffect(() => {
    if (answerList.length > 0 && answerList.length === data.length) {
      const action = {
        type: "SET_ANSWER_LIST",
        payload: {
          answerList,
        },
      };
      dispatch(action);
      navigation.replace("Results");
    }
  }, [answerList]);

  return (
    <View style={[styles.container]}>
      <Loading loading={loading} message="Cargando pregunta..." />
      {!loading && data.length > 0 && data.length != answerList.length && (
        <View style={styles.container} key={data[answerList.length].text}>
          <QuestionComponent text={data[answerList.length].text} />
          <AnswersComponent
            setAnswerList={setAnswerList}
            question={data[answerList.length]}
          />
          <Text h4 style={{ textAlign: "center", marginBottom: 50 }}>
            {answerList.length + 1} de {data.length}
          </Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5FCFF",
  },

  footer: {
    height: 100,
  },
});

export default QuestionScreen;

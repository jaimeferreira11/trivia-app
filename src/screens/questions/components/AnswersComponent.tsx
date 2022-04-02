import React, { SetStateAction } from "react";
import { View, StyleSheet } from "react-native";
import { Button, FAB, Icon } from "react-native-elements";
import { useState, useEffect, Dispatch } from "react";
import { Answer, Question } from "../../../interfaces/interfaces";

type Props = {
  setAnswerList: Dispatch<SetStateAction<Answer[]>>;
  question: Question;
};

export const AnswersComponent = ({ setAnswerList, question }: Props) => {
  const [colorAnswer, setColorAnswer] = useState("#fff");
  const [resp, setResp] = useState<number>(0);

  useEffect(() => {
    if (resp) {
      if (resp === question.correctAnswer) {
        setColorAnswer("green");
      } else {
        setColorAnswer("red");
      }
    }
  }, [resp]);

  const handleAnswer = () => {
    setAnswerList((ans: Answer[]) => {
      return [
        ...ans,
        {
          number: ans.length + 1,
          answer: question.answers[resp - 1].text,
          text: question.text,
          isCorrect: resp === question.correctAnswer,
        },
      ];
    });
  };

  return (
    <View style={styles.container}>
      {question.answers.map((ans) => {
        return (
          <Button
            key={ans.number}
            title={ans.text}
            type="outline"
            titleStyle={{ color: "#000", fontSize: 24 }}
            buttonStyle={{
              borderColor: "gray",
              backgroundColor:
                resp == 0
                  ? "white"
                  : ans.number !== resp
                  ? "#fff"
                  : colorAnswer,
              borderWidth: 0.5,
              marginVertical: 5,
              marginHorizontal: 10,
              paddingVertical: 12,
            }}
            disabled={resp != 0}
            onPress={() => {
              setResp(ans.number);
            }}
          />
        );
      })}
      <View style={{ alignItems: "flex-end", marginTop: 15, marginEnd: 10 }}>
        <FAB
          visible={resp != 0}
          color="gray"
          icon={<Icon name="chevron-right" color="white" size={30} />}
          title="Siguiente"
          size="large"
          onPress={handleAnswer}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 3,
    justifyContent: "center",
  },
});

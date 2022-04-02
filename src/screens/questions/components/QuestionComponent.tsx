import * as React from "react";
import { View } from "react-native";
import { Card, Text } from "react-native-elements";

type Props = {
  text: string;
};

const QuestionComponent = ({ text }: Props) => {
  return (
    <Card>
      <View style={{ paddingVertical: 40, paddingHorizontal: 10 }}>
        <Text h4 style={{ textAlign: "center" }}>
          {text}
        </Text>
      </View>
    </Card>
  );
};

export default QuestionComponent;

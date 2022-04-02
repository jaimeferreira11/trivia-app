import React from "react";
import { View, ActivityIndicator, Text } from "react-native";
import { Overlay } from "react-native-elements";
import { styles } from "./Loading.styles";

interface ILoadingProps {
  loading: boolean;
  message?: string;
}

export const Loading = ({ loading, message }: ILoadingProps) => {
  return (
    <Overlay isVisible={loading} overlayStyle={styles.overlay}>
      <View style={styles.view}>
        <ActivityIndicator size="large" />
        {message && <Text style={styles.text}>{message}</Text>}
      </View>
    </Overlay>
  );
};

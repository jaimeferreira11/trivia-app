import React from "react";
import { StyleSheet, View, ActivityIndicator, Text } from "react-native";
import { Overlay } from "react-native-elements";

interface ILoadingProps {
  loading: boolean;
  message?: string;
}

export const Loading = ({ loading, message }: ILoadingProps) => {
  return (
    <Overlay isVisible={loading} overlayStyle={styles.overlay}>
      <View style={styles.view}>
        <ActivityIndicator size="large" color="#00ff00" />
        {message && <Text style={styles.text}>{message}</Text>}
      </View>
    </Overlay>
  );
};

const styles = StyleSheet.create({
  overlay: {
    backgroundColor: "transparent",
  },
  view: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    textTransform: "uppercase",
    marginTop: 20,
  },
});

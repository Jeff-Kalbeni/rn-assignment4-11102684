import React from "react";
import { StyleSheet } from "react-native";

export default function App() {
  return (
    <View style={[styles.container, {
      flexDirection: "column"
      }]}>
      <View style={{flex: 1, backgroundColor: "red"}}/>
      <View style={{flex: 2, backgroundColor: "darkOrange"}}/>
      <View style={{flex: 3, backgroundColor: "green"}}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 28,
  },
});

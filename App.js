import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default function App() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{count}</Text>
      <Button title="Press me" onPress={increment}></Button>
      <Text>style={styles.encouragingText}>Keep going!</Text>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "skyblue",
    alignItems: "center",
    justifyContent: "center",
  },

  encouragingText: {
    marginTop: 50,
    color: "#888",
  },
});

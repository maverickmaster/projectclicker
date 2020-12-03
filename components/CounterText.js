import React from "react";
import { Text, StyleSheet } from "react-native";

export default function CounterText(props) {
  {
    // return <Text>{style=style.CounterText} Sucess! you imported CounterText</Text>;
  }

  {
    //console.log (props)
  }

  return (
    <Text
      style={[
        styles.counterText,
        { color: props.color, fontSize: props.fontSize },
      ]}
    >
      {props.children}
    </Text>
  );
}

const styles = StyleSheet.create({
  counterText: {
    fontWeight: "bold",
  },
});

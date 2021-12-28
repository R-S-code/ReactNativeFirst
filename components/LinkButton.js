import * as React from 'react';
import { StyleSheet, Text } from 'react-native';

const NormalButton = (props) => (
  <Text
    style={[
      {
        backgroundColor: props.bg_color,
      },
      styles.btn,
    ]}
    onPress={props.onPress}
  >
    {props.text}
  </Text>
);

const styles = StyleSheet.create({
  btn: {
    borderRadius: 20,
    color: "black",
    fontWeight: "bold",
    overflow: "hidden",
    marginTop: 30,
    textAlign: 'center',
    padding: 10,
    width: 300,
  }
})

export default NormalButton;
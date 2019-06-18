import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableNativeFeedback
} from "react-native";

export default class App extends Component {
  state = {
    backgroundColor: "null",
    buttonColor: "null"
  };
  getRandomColor = () => {
    return `rgb(
      ${Math.floor(Math.random() * 256)},
      ${Math.floor(Math.random() * 256)},
      ${Math.floor(Math.random() * 256)}
    )`;
  };

  changeBackgroundColor = () => {
    this.setState({ backgroundColor: this.getRandomColor() });
  };
  changeButtonColor = () => {
    this.setState({ buttonColor: this.getRandomColor() });
  };
  render() {
    return (
      <View
        style={[
          styles.container,
          {
            backgroundColor: this.state.backgroundColor
          }
        ]}
      >
        <TouchableNativeFeedback
          onPress={() => {
            this.changeBackgroundColor();
            this.changeButtonColor();
          }}
        >
          <Text
            style={[
              styles.text,
              {
                backgroundColor: this.state.buttonColor
              }
            ]}
          >
            Change Color
          </Text>
        </TouchableNativeFeedback>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    fontSize: 22,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 40
  }
});

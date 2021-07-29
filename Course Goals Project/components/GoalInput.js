import React, { useState } from "react";
import { StyleSheet, View, TextInput, Button, Modal } from "react-native";

const GoalInput = (props) => {
  const [input, setInput] = useState("");
  const goalInputHandler = (enterText) => {
    setInput(enterText);
  };

  return (
    <Modal visible={props.visible} animationType="fade">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Course Goal"
          style={styles.input}
          value={input}
          onChangeText={goalInputHandler}
        />
        <View style={styles.inputButton}>
          <View style={styles.button}>
            <Button
              title="ADD"
              style={{ justifyContent: "center", alignItems: "center" }}
              onPress={() => {
                props.onClick(input);
                setInput("");
              }}
            />
          </View>
          <View style={styles.button}>
            <Button
              title="CANCEL"
              style={{ justifyContent: "center", alignItems: "center" }}
              onPress={() => {
                props.onClick(null);
                setInput("");
              }}
              color="red"
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};
const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    borderColor: "black",
    borderWidth: 1,
    height: 40,
    width: "80%",
    fontSize: 15,
    marginBottom: 10,
  },
  inputButton: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "60%",
  },
  button: {
    width: '40%'
  }
});
export default GoalInput;

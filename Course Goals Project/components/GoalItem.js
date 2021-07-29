import React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";

const GoalItem = (props) => {
  return (
    <TouchableOpacity onPress={props.onDelete.bind(this, props.id)}>
      <Text style={styles.listItem}>{props.data}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    backgroundColor: "#ccc",
    borderWidth: 1,
    borderColor: "black",
    margin: 10,
    textAlign: "justify",
  },
});

export default GoalItem;

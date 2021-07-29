import React, { useState } from "react";
import { StyleSheet, View, Button } from "react-native";
import GoalItemList from "./components/GoalItemList";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddModal, setIsAddModal] = useState(false);

  const inputHandler = (input) => {
    if (input) {
      setCourseGoals((prevState) =>
        prevState.concat({ id: Math.random().toString(), value: input })
      );
    }
    setIsAddModal(false);
  };

  const onDeleteHandler = (id) => {
    setCourseGoals((prevState) => prevState.filter((item) => item.id !== id));
  };

  return (
    <View style={styles.screen}>
      <Button title="Add New Goal" onPress={() => setIsAddModal(true)} />
      <GoalInput onClick={inputHandler} visible={isAddModal} />
      <View>
        <GoalItemList courseGoals={courseGoals} onDelete={onDeleteHandler} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { paddingLeft: 50, paddingRight: 50, paddingTop: 65 },
});

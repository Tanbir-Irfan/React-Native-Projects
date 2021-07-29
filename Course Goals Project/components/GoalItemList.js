import React from "react";
import { FlatList } from "react-native";
import GoalItem from "./GoalItem";

const GoalItemList = (props) => {
  return (
    <FlatList
      keyExtractor={(item, index) => item.id}
      data={props.courseGoals}
      renderItem={(itemData) => <GoalItem data={itemData.item.value} id={itemData.item.id} onDelete={props.onDelete}/>}
    />
  );
};

export default GoalItemList;

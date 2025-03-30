import { StyleSheet, Text, View } from "react-native";
import React from "react";
import MyButton from "./MyButton";
type Props = {
  todo: { key: string; text: string };
  onDelete: (todo: string) => void;
  onEdit:(item: { key: string; text: string })=>void;
};

const TodoListItem = ({ todo, onDelete, onEdit }: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{todo.text}</Text>
      <MyButton
        onPress={() => onDelete(todo.key)}
        text="delete"
        variant={"destructive"}
      />
       <MyButton
        onPress={() => onEdit(todo)}
        text="edit"
        variant={"secondary"}
      />
    </View>
  );
};

export default TodoListItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "lightgray",
    padding: 10,
    borderRadius: 10,
    alignItems: "center",
    borderColor: "gray",
    borderWidth: 1,
  },
  text: {
    fontSize: 20,
  },
});

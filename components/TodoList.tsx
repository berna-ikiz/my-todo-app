import { FlatList, StyleSheet, View } from "react-native";
import React from "react";
import TodoListItem from "./TodoListItem";
type Props = {
  todoList: { key: string; text: string }[];
  onDelete: (key: string) => void;
  onEdit: (item: { key: string; text: string }) => void;
};

const TodoList = ({ todoList, onDelete, onEdit }: Props) => {
  return (
    <View style={styles.flatListContainer}>
    <FlatList
      contentContainerStyle={{ gap: 8 }}
      data={todoList}
      keyExtractor={(todo) => todo.key}
      renderItem={({ item }) => (
        <TodoListItem onDelete={onDelete} onEdit={onEdit} todo={item} />
      )}
    />
    </View>
  );
};

export default TodoList;

const styles = StyleSheet.create({
  flatListContainer: {
    paddingTop:16, 
  },
});

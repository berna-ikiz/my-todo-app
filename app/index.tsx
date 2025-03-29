import InputComponent from "@/components/InputComponent";
import MyButton from "@/components/MyButton";
import TodoList from "@/components/TodoList";
import React, { useState } from "react";
import { StyleSheet, View } from "react-native";

const index = () => {
  const [todoList, setTodoList] = useState<string[]>([]);
  const [todo, setTodo] = useState("");

  console.log(todoList);

  const handlePressed = () => {
    setTodoList([...todoList, todo]);
    setTodo("");
  };
  const handleDelete = (deletedTodo:String) => {
    const updatedList = todoList.filter(todo => todo !== deletedTodo);
    setTodoList(updatedList);
  };
  return (
    <View style={styles.container}>
      <InputComponent value={todo} onChangeText={setTodo} placeholder="To do" />
      <MyButton text="Add" onPress={() => handlePressed()} />
      <TodoList onDelete={handleDelete} todoList={todoList} />
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    gap: 16,
  },
});

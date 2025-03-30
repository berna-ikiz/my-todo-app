import InputComponent from "@/components/InputComponent";
import MyButton from "@/components/MyButton";
import TodoList from "@/components/TodoList";
import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const KEY_TODO_LIST = "todos";
const KEY_CURRENT_TODO = "current_todo";
const index = () => {
  const [todoList, setTodoList] = useState<string[]>([]);
  const [todo, setTodo] = useState("");

  useEffect(() => {
    async function getTodos() {
      const todos = await AsyncStorage.getItem(KEY_TODO_LIST);
      if (todos !== null) {
        setTodoList(JSON.parse(todos));
      }
    }
    async function getCurrentTodo() {
      const currentTodo = await AsyncStorage.getItem(KEY_CURRENT_TODO);
      if (currentTodo !== null) {
        setTodo(currentTodo);
      }
    }
    getTodos();
    getCurrentTodo();
  }, []);

  const saveTodosToStorage = async (newList: string[]) => {
    const jsonValue = JSON.stringify(newList);
    await AsyncStorage.setItem(KEY_TODO_LIST, jsonValue);
  };

  const handlePressed = () => {
    const newList = [...todoList, todo];
    setTodoList(newList);
    setTodo("");
    saveTodosToStorage(newList);
  };

  const handleDelete = (deletedTodo: String) => {
    const newList = todoList.filter((todo) => todo !== deletedTodo);
    setTodoList(newList);
    saveTodosToStorage(newList);
  };

  const handleSetTodo = async (text: string) => {
    setTodo(text);
    await AsyncStorage.setItem(KEY_CURRENT_TODO, text);
  };

  return (
    <View style={styles.container}>
      <InputComponent
        value={todo}
        onChangeText={handleSetTodo}
        placeholder="To do"
      />
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

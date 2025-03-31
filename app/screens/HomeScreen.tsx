import InputComponent from "@/components/InputComponent";
import MyButton from "@/components/MyButton";
import TodoList from "@/components/TodoList";
import React, { useEffect, useState } from "react";
import { Alert, StyleSheet, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import MyTodoModal from "@/components/MyTodoModal";
import { ThemeProvider, useTheme } from "@/context/ThemeContext";

const KEY_TODO_LIST = "todos";
const KEY_CURRENT_TODO = "current_todo";
const HomeScreens = () => {
  const [todoList, setTodoList] = useState<{ key: string; text: string }[]>([]);
  const [todo, setTodo] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [editingTodoItem, setEditingTodoItem] = useState<{
    key: string;
    text: string;
  } | null>(null);
  const [editedText, setEditedText] = useState("");
  const themeColors = useTheme(); 

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

  const saveTodosToStorage = async (
    newList: { key: string; text: string }[]
  ) => {
    const jsonValue = JSON.stringify(newList);
    await AsyncStorage.setItem(KEY_TODO_LIST, jsonValue);
  };

  const handlePressed = () => {
    if (!todo) return Alert.alert("", "Add something!");
    const newTodo = { key: Date.now().toString(), text: todo };
    const newList = [...todoList, newTodo];

    setTodoList(newList);
    setTodo("");
    saveTodosToStorage(newList);
  };

  const handleDelete = (key: String) => {
    const newList = todoList.filter((todo) => todo.key !== key);
    setTodoList(newList);
    saveTodosToStorage(newList);
  };

  const handleEdit = (item: { key: string; text: string }) => {
    setEditingTodoItem(item);
    setEditedText(item.text);
    setModalVisible(true);
  };

  const handleSaveEdit = (newText: string) => {
    if (editingTodoItem) {
      const newList = todoList.map((item) =>
        item.key === editingTodoItem.key ? { ...item, text: newText } : item
      );
      setTodoList(newList);
      saveTodosToStorage(newList);
      setModalVisible(false);
    }
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  const handleSetTodo = async (text: string) => {
    setTodo(text);
    await AsyncStorage.setItem(KEY_CURRENT_TODO, text);
  };

  return (
    <ThemeProvider>
    <View
      style={[styles.container, { backgroundColor: themeColors.background}]}
    >
      <InputComponent
        value={todo}
        onChangeText={handleSetTodo}
        placeholder="To do"
      />
      <View style={styles.buttonContainer}>
        <MyButton
          text="Add"
          variant="primary"
          onPress={() => handlePressed()}
        />
      </View>
      <TodoList
        onDelete={handleDelete}
        onEdit={handleEdit}
        todoList={todoList}
      />
      <MyTodoModal
        modalVisible={modalVisible}
        onClose={handleCloseModal}
        onSave={handleSaveEdit}
        currentText={editingTodoItem}
      />
    </View>
    </ThemeProvider>
  );
};

export default HomeScreens;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  buttonContainer: {
    marginTop: 10,
    width: "100%",
  },
});

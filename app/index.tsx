import InputComponent from "@/components/InputComponent";
import MyButton from "@/components/MyButton";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

const index = () => {
  const [todoList, setTodoList] = useState<string[]>([]);
  const [todo, setTodo] = useState("");

  console.log(todoList);
  
  const handlePressed = () =>{
    setTodoList([...todoList,todo]);
    setTodo("");
  }
  return (
    <View style={styles.container}>
      <InputComponent value={todo} onChangeText={setTodo} placeholder="To do" />
      <MyButton text="Add" onPress={()=>handlePressed()}/>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    gap: 16
  },
});

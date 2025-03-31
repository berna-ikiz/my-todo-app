import { StyleSheet, Text, View } from "react-native";
import React from "react";
import MyButton from "./MyButton";
import { useTheme } from "@/context/ThemeContext";
type Props = {
  todo: { key: string; text: string };
  onDelete: (todo: string) => void;
  onEdit:(item: { key: string; text: string })=>void;
};

const TodoListItem = ({ todo, onDelete, onEdit }: Props) => {
  const themeColors = useTheme(); 
  return (
    <View style={[styles.container, { backgroundColor: themeColors.background, borderColor:themeColors.border }]}>
      <Text style={[styles.text, { color:themeColors.text }]}>{todo.text}</Text>
      <View style={styles.buttonContainer}>
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
    </View>
  );
};

export default TodoListItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 14,
    borderRadius: 12,
    alignItems: "center",
    borderWidth: 1,
    marginBottom:8
  },
  text: {
    fontSize: 20, 
    flex:1,
  },
  buttonContainer: {
    flexDirection: "row",
    gap: 10
  },

});

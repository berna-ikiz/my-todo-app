import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
type Props = {
  variant?: "primary" | "secondary" | "destructive" | "success";
  text?: string;
  onPress?: () => void;
};

const MyButton = ({ text, onPress, variant = "primary" }: Props) => {

  let backgroundColor = "lightblue";

  switch (variant) {
    case "primary":
      backgroundColor = "lightblue";
      break;
    case "secondary":
      backgroundColor = "lightgreen";
      break;
    case "destructive":
      backgroundColor = "lightpink";
      break;
    case "success":
      backgroundColor = "lightyellow";
      break;
    default:
      backgroundColor = "lightblue";
  }

  return (
    <TouchableOpacity style={[styles.container,{backgroundColor:backgroundColor}]} onPress={onPress}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: "lightblue",
    paddingHorizontal: 32,
    paddingVertical: 4,
    alignSelf: "flex-start",
    borderRadius: 8,
  },
  text: {
    fontSize: 20,
    color: "white",
  },
});
export default MyButton;

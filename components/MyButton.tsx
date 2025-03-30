import { View, Text, TouchableOpacity, StyleSheet, useWindowDimensions } from "react-native";
import React from "react";
import { isSmallDevice } from "@/constants/screenSize";
type Props = {
  variant?: "primary" | "secondary" | "destructive" | "success";
  text?: string;
  onPress?: () => void;
};

const MyButton = ({ text, onPress, variant = "primary" }: Props) => {

  let backgroundColor = "lightblue";
  const{width,height} = useWindowDimensions();

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
    <TouchableOpacity style={[styles.container,{backgroundColor:backgroundColor, padding:isSmallDevice(width)? 24:36}]} onPress={onPress}>
      <Text style={[styles.text, {fontSize:isSmallDevice(width)? 16:24}]}>{text}</Text>
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
    color: "white",
  },
});
export default MyButton;

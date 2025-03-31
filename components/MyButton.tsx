import { View, Text, TouchableOpacity, StyleSheet, useWindowDimensions } from "react-native";
import React from "react";
import { isSmallDevice } from "@/constants/screenSize";
import {useTheme } from "@/context/ThemeContext";
type Props = {
  variant?: "primary" | "secondary" | "destructive" | "success";
  text?: string;
  onPress?: () => void;
};

const MyButton = ({ text, onPress, variant = "primary" }: Props) => {
 const themeColors = useTheme(); 
  let backgroundColor = "lightblue";
  const{width,height} = useWindowDimensions();

  switch (variant) {
    case "primary":
      backgroundColor = themeColors.primary; 
      break;
    case "secondary":
      backgroundColor = themeColors.secondary; 
      break;
    case "destructive":
      backgroundColor = themeColors.destructive; 
      break;
    case "success":
      backgroundColor = themeColors.success; 
      break;
    default:
      backgroundColor = themeColors.primary
  }

  return (
    <TouchableOpacity style={[styles.container,{backgroundColor:backgroundColor, padding:isSmallDevice(width)? 24:36}]} onPress={onPress}>
      <Text style={[styles.text, {fontSize:isSmallDevice(width)? 16:24}]}>{text}</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection:"row",
    alignSelf: "stretch",
    paddingHorizontal: 32,
    paddingVertical: 4,
    borderRadius: 8,
  },
  text: {
    color: "white",
  },
});
export default MyButton;

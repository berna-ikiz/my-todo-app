import {
  View,
  Text,
  TextInput,
  StyleSheet,
  useWindowDimensions,
} from "react-native";
import React from "react";
import { isSmallDevice } from "@/constants/screenSize";
import {useTheme } from "@/context/ThemeContext";


type Props = {
  placeholder?: string;
  value?: string;
  onChangeText?: (text: string) => void;
};
const InputComponent = ({ placeholder, value, onChangeText }: Props) => {
  const themeColors = useTheme(); 
  const { width } = useWindowDimensions();
  return (
    <View>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        style={[
          styles.input,
          {
            borderWidth: isSmallDevice(width) ? 2 : 4,
            fontSize: isSmallDevice(width) ? 16 : 24,
            borderColor:themeColors.border,
            color:themeColors.text
          },
        ]}
        autoComplete="off"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    borderRadius: 10,
    paddingVertical: 4,
    paddingHorizontal: 8,
  },
});

export default InputComponent;

import { View, Text, TextInput, StyleSheet } from "react-native";
import React from "react";

type Props = {
  placeholder?: string;
  value?: string;
  onChangeText?: (text: string) => void;
};
const InputComponent = ({ placeholder, value, onChangeText }: Props) => {
  return (
    <View>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        style={styles.input}
        autoComplete="off"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 3,
    borderRadius: 10,
    borderColor: "gray",
    paddingVertical: 4,
    paddingHorizontal: 8,
    fontSize: 24,
  },
});

export default InputComponent;

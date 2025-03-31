import React, { useEffect, useState } from "react";
import {
  Modal,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from "react-native";
import { useTheme } from "@/context/ThemeContext";
import { isSmallDevice } from "@/constants/screenSize";

type Props = {
  modalVisible: boolean;
  onClose: () => void;
  onSave: (newText: string) => void;
  currentText: { key: string; text: string } | null;
};

const MyTodoModal = ({ modalVisible, onClose, onSave, currentText }: Props) => {
  const [text, setText] = useState(currentText?.text || "");
  const handleSave = () => {
    onSave(text || "");
    setText("");
  };
  const { width } = useWindowDimensions();
  const themeColors = useTheme();

  useEffect(() => {
    if (currentText) {
      setText(currentText.text);
    }
  }, [currentText]);

  return (
    <Modal visible={modalVisible} animationType="slide" transparent>
      <View
        style={[
          styles.modalContainer,
          { backgroundColor: themeColors.background },
        ]}
      >
        <View
          style={[
            styles.modalContent,
            { backgroundColor: themeColors.modalContentColor },
          ]}
        >
          <TextInput
            style={[
              styles.input,
              { borderColor: themeColors.border, color: themeColors.text, fontSize: isSmallDevice(width) ? 16 : 24 },
            ]}
            value={text}
            onChangeText={setText}
          />
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              onPress={handleSave}
              style={[
                styles.button,
                { backgroundColor: themeColors.primary},
              ]}
            >
              <Text style={{ color: themeColors.text , fontSize: isSmallDevice(width) ? 16 : 24,}}>Save</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={onClose}
              style={[
                styles.button,
                { backgroundColor: themeColors.secondary},
              ]}
            >
              <Text style={{ color: themeColors.text , fontSize: isSmallDevice(width) ? 16 : 24,}}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default MyTodoModal;

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    padding: 20,
    borderRadius: 8,
    width: "80%",
    alignItems: "center",
  },
  input: {
    width: "100%",
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    width: "100%",
    marginTop: 10,
    justifyContent: "flex-end",
  },
  button: {
    paddingHorizontal: 32,
    paddingVertical: 4,
    borderRadius: 8,
    marginHorizontal: 2,
  },
});

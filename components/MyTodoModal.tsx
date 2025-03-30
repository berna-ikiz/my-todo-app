import React, { useEffect, useState } from "react";
import {
  Modal,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

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

  useEffect(() => {
    if (currentText) {
      setText(currentText.text);
    }
  }, [currentText]);

  return (
    <Modal visible={modalVisible} animationType="slide" transparent>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <TextInput style={styles.input} value={text} onChangeText={setText} />
          <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={handleSave} style={styles.button}>
              <Text>Save</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={onClose} style={styles.button}>
              <Text>Close</Text>
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
    backgroundColor: "gray",
  },
  modalContent: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 8,
    width: "80%",
    alignItems: "center",
  },
  input: {
    width: "100%",
    borderWidth: 1,
    borderRadius: 10,
    borderColor:"gray",
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    width: "100%",
    marginTop: 10,
    justifyContent: "flex-end",
  },
  button: {
    backgroundColor: "lightblue",
    paddingHorizontal: 32,
    paddingVertical: 4,
    borderRadius: 8,
    marginHorizontal: 2,
  },
});

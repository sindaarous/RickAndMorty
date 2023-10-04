import React from "react";
import { Modal, View, Text, Image } from "react-native";
import CloseButton from "./CloseButtonComponenet";
import { styles } from "../style/style";
const Popup = ({ isVisible, onClose, imageLink, nameCharactere }) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isVisible}
      onRequestClose={onClose}
    >
      <View style={styles.overlay}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <CloseButton onPress={onClose} />
            <Text style={styles.textPopUp}>{nameCharactere}</Text>
            <View>
              <Image
                source={{ uri: imageLink }}
                style={{ width: 200, height: 200 }}
              />
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default Popup;

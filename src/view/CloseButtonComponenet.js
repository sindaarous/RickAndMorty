import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; 
import { styles } from '../style/style';
const CloseButton = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.buttonContainer}>
      <View>
        <Icon name="times" size={30} color="#5D3FD3" />
      </View>
    </TouchableOpacity>
  );
};
export default CloseButton;

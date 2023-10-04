

import React from 'react';
import ImageComponentLocale from './view/ImageComponent';
import { styles } from './view/style/style';
import { SafeAreaView, Text } from 'react-native';
import Action from './view/TextInput';
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ImageComponentLocale image={require('./assets/GatacaLogo.png')} />
       <Text style={styles.text}>Rick and Morty App</Text>
      <Action/>
    </SafeAreaView>
  );
}




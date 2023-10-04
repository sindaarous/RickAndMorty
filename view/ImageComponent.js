import React from 'react';
import { Image, View } from 'react-native';
import { styles } from '../style/style';
const ImageComponentLocale = ({  image }) => {
    return (
      <View>
        <Image source={image} style={styles.imagelocale} />
      </View>
    );
  };
export default ImageComponentLocale;
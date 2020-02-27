import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const ImageDetail = ({imageSource, title, imageScore}) => {
  return (
    <View>
      <Image
        source={imageSource}
      />
      <Text style={styles.normalText}> { title }</Text>
      <Text > Image score - { imageScore }</Text>
    </View>
  )
};

const styles = StyleSheet.create({
  normalText: {
    marginVertical: 10
  }
});

export default ImageDetail

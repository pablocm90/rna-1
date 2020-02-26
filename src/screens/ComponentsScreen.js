import React from 'react';
import {Text, StyleSheet, View } from 'react-native';

const ComponentsScreen = () => {
  const personName = "Pablo"

  return (
    <View>
      <Text style={ styles.title }>Getting started with react native!</Text>
      <Text style={ styles.subTitle }>My name is {personName}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 45
  },
  subTitle: {
    fontSize: 20
  }
});

export default ComponentsScreen;

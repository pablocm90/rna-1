import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const PositionExerciceScreen = () => {
  return (
    <View style={styles.viewStyleBox} >
      <View style={styles.viewStyleRed}/>
      <View style={styles.viewStyleGreen}/>
      <View style={styles.viewStyleBlue}/>
    </View>
  )
}

const styles = StyleSheet.create({
  viewStyleBox: {
    borderWidth: 3,
    borderColor: 'black',
    height: 400,
    justifyContent: 'space-between',
    flexDirection: 'row'
  },
  viewStyleBlue: {
    borderWidth: 3,
    backgroundColor: 'blue',
    borderColor: 'blue',
    opacity:0.5,
    height: 50,
    width: 50
  },
  viewStyleRed: {
    borderWidth: 3,
    backgroundColor: 'red',
    borderColor: 'red',
    opacity:0.5,
    height: 50,
    width: 50,
  },
  viewStyleGreen: {
    borderWidth: 3,
    backgroundColor: 'green',
    borderColor: 'green',
    opacity:0.5,
    height: 50,
    width: 50,
    top: 50,
  }
})

export default PositionExerciceScreen

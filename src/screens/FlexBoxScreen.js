import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const FlexBoxScreen = () => {
  return (
    <View style={styles.viewStyle} >
      <Text style={styles.textStyleOne}>
        Child #1
      </Text>
      <Text style={styles.textStyleTwo}>
        Child #2
      </Text>
      <Text style={styles.textStyleThree}>
        Child #3
      </Text>
      <Text style={styles.textStyleOne}>
        Child #4
      </Text>
      <Text style={styles.textStyleTwo}>
        Child #5
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  viewStyle: {
    borderWidth: 3,
    borderColor: 'black',
    height: 400,
    alignItems: 'flex-start',
  },
  textStyleOne: {
    borderWidth: 3,
    borderColor: 'red',
  },
  textStyleTwo: {
    borderWidth: 3,
    borderColor: 'red',
    flex: 1,
    alignSelf: 'center',
  },
  textStyleThree: {
    borderWidth: 3,
    borderColor: 'red',
    ...StyleSheet.absoluteFillObject
  }
})

export default FlexBoxScreen

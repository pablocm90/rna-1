import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = () => {
  return (
    <View>
      <Text style={styles.text}>BONJOUR ENZO</Text>
      <Button
        onPress={() => console.log("Button pressed")}
        title="This is button"
      />
      <TouchableOpacity
        onPress={() => console.log("Touchable pressed")}
      >
        <Text>
          Go to List Demo
        </Text>
      </TouchableOpacity>
    </View>
  )
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;

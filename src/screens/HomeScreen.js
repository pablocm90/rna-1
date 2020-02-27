import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>BONJOUR BOGOS</Text>
      <Button
        style={ styles.buttonHome }
        onPress={() => navigation.navigate("List")}
        title="Go to List Demo"
      />
      <Button
        style={ styles.buttonHome }
        onPress={() => navigation.navigate("Components")}
        title="Go to Components Demo"
      />
      <Button
        style={ styles.buttonHome }
        onPress={() => navigation.navigate("Image")}
        title="Go to Image Demo"
      />
      <Button
        style={ styles.buttonHome }
        onPress={() => navigation.navigate("Counter")}
        title="Go to Counter Demo"
      />
      <Button
        style={ styles.buttonHome }
        onPress={() => navigation.navigate("Color")}
        title="Go to Color Demo"
      />
      <Button
        style={ styles.buttonHome }
        onPress={() => navigation.navigate("ComplexColor")}
        title="Go to Complex Color Demo"
      />
      <Button
        style={ styles.buttonHome }
        onPress={() => navigation.navigate("Text")}
        title="Go to Text Demo"
      />
      <Button
        style={ styles.buttonHome }
        onPress={() => navigation.navigate("Box")}
        title="Go to Box Demo"
      />
      <Button
        style={ styles.buttonHome }
        onPress={() => navigation.navigate("FlexBox")}
        title="Go to FlexBox Demo"
      />
      <Button
        style={ styles.buttonHome }
        onPress={() => navigation.navigate("PositionExercice")}
        title="Go to Position Exercice Demo"
      />
    </View>
  )
};

const styles = StyleSheet.create({
  buttonHome: {
    marginVertical: 20,
    paddingVertical: 10
  },
  text: {
    marginVertical: 20,
    fontSize: 30
  }
});

export default HomeScreen;

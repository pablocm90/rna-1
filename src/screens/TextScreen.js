import React, {useState} from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';


const TextScreen = () => {
  const [password, setPassword] = useState('')

  return (
    <View>
      <Text>Enter Password:</Text>
      <TextInput
        style={ styles.input }
        autoCapitalize="none"
        autoCorrect={false}
        value={password}
        onChangeText={(newValue) => setPassword(newValue)}
      />

      { password.length > 4
       ? null
        : <Text style={styles.error}>Password is not long enough</Text>}
    </View>
  )
};

const styles = StyleSheet.create({
  input: {
    margin: 15,
    borderColor: 'black',
    borderWidth: 1,
    height: 45
  },
  error: {
    fontSize: 25,
    color: 'red'
  }
});

export default TextScreen;

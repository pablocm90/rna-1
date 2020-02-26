import React from 'react';
import { FlatList, View, Text, StyleSheet } from 'react-native';

const ListScreen = () => {
  const friends = [
    {name: "Pablo", age: 26},
    {name: "Pablo 2", age: 26},
    {name: "Pablo 3", age: 26},
    {name: "Pablo 4", age: 26},
    {name: "Pablo 5", age: 26},
    {name: "Pablo 6", age: 26},
    {name: "Pablo 7", age: 26},
    {name: "Pablo 8", age: 26},
    {name: "Pablo 9", age: 26},
    {name: "Pablo 10", age: 26},
    {name: "Pablo 11", age: 26}
  ]
  return (
    <View>
      <FlatList
        keyExtractor={(friend) => friend.name }
        data={friends}
        renderItem={({item}) => {
        return (
          <Text style={styles.textStyle}>
            {item.name} - {item.age}
          </Text>
        )
        }} />
    </View>
  )
}

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 10
  }
})

export default ListScreen;

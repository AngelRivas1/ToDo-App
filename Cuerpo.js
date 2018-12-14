import React, { Component } from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';

class Cuerpo extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text> List </Text>
        <FlatList
          data={this.props.tareas}
          renderItem={ ({ item }) => <Text>{item.texto}</Text> }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 9,
    backgroundColor: '#fdfdfd',
  },
});

export default Cuerpo;

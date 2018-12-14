import React, { Component } from 'react';
import {
  StyleSheet, View, Text, TextInput,
} from 'react-native';

class Header extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text> To-Do </Text>
        <TextInput
          style={styles.texto}
          onChangeText={this.props.cambiarTexto}
          placeholder="Tarea por hacer..."
          placeholderTextColor="#000"
          onSubmitEditing={this.props.agregar}
          value={this.props.texto}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: '#DADADA',
    justifyContent: 'center',
  },
  texto: {
    paddingHorizontal: 16,
    fontSize: 24,
  },
});

export default Header;

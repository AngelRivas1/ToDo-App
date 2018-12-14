import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Header from './Header';
import Cuerpo from './Cuerpo';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      tareas: [],
      texto: '',
    };
  }

  establecerTexto = (value) => {
    this.setState({
      texto: value,
    });
  }

  agregarTarea = (tarea) => {
    this.setState({
      tareas: [...this.state.tareas, { texto: this.state.texto, key: Date.now.toString() }],
      texto: '',
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Header
          texto={this.state.texto}
          cambiarTexto={this.establecerTexto}
          agregar={this.agregarTarea}
        />
        <Cuerpo tareas={this.state.tareas} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

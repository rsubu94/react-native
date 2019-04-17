
import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

export class Home extends Component {
  render() {
    return (
      <View ><ScrollView>
        {this.props.items.map(x => <Text style={styles.box}>{x}</Text>)}
        <TouchableOpacity style={styles.button}

          onPress={() =>
            this.props.navigation.navigate('Contacts')
          }
        ><Text>Contacts Page</Text></TouchableOpacity>
        <TouchableOpacity style={styles.button}
          onPress={() =>
            this.props.navigation.navigate('Form')
          } ><Text>Form Page</Text></TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('Course')}><Text>
          Course Page</Text></TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('Reviews')}><Text>
          Reviews Page</Text></TouchableOpacity></ScrollView>
      </View>
    );
  }
}

let styles = StyleSheet.create({
  box: {
    backgroundColor: '#ECF0F1',
    color: 'darkblue',
    borderBottomColor: 'gray',
    borderBottomWidth: 10,
    marginTop: 5,
    padding: 10,
    marginLeft: 10,
    marginRight: 10
  },
  button: {
    marginTop: 10,
    width: 200,
    height: 50,
    padding: 10,
    backgroundColor: 'lightgreen',
    color: 'black',
    marginLeft: 30
  },
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  }
})
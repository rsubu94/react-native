
import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button, TouchableOpacity, ScrollView } from 'react-native';
import AsyncStorage from "@react-native-community/async-storage";
export class Reviews extends Component {
    getTokens() {
        getData = async () => {
            try {
                const value = await AsyncStorage.getItem('@access_token')
                return value;
            }
            catch (e) {
                console.log("Exception " + e)
            }
        }
    }
    static getDerivedStateFromProps(states, props) {
        return states;
    }
    render() {
        return (
            <View style={styles.container}><ScrollView>{this.props.reviews.map((x) => <Text style={styles.box}>{x.name}</Text>)}</ScrollView></View>
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
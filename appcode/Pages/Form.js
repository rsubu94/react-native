import { View, Text, TextInput, Button } from 'react-native';
import React, { Component } from 'react';

export default class Form extends Component {
    constructor() {
        super();
        this.state = { name: '' };
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.props.callAction(this.state.name)
        this.props.navigation.navigate('Home')
    }
    render() {
        return (
            <View>
                <Text>Enter a Name</Text>
                <TextInput onChangeText={(text) => this.setState({ name: text })}></TextInput>
                <Button title="Store It" onPress={() => this.handleClick()}></Button>
            </View>
        )
    }
}
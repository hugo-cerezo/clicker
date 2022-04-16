import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

class Shop extends Component {
    constructor(props) {
        super(props);
        this.state = {
            componentName: "Shop"
        }
    }

    render() {
        return (
            <View>
                <Text>{this.state.componentName}</Text>
            </View>
        );
    }
}

export default Shop
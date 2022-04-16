import React, { Component } from "react";
import { Text, StyleSheet, View, Button } from "react-native";

class Fruits extends Component {
    constructor(props) {
        super(props);
        this.state = {
            componentName: "Fruits",
            name: this.props.name,
            lvl: 1,
            time: 1 * (this.props.id * 1.15),
            value: 1 * (this.props.id * 1.15),
            auto: 0,
            upgrade: 10 * (this.props.id * 1.15),
            buy: 25 * (this.props.id * 1.15),
            unlock: 0,
            speed: 20 * (this.props.id * 1.15),
            isAuto: 0,
        };

        this.updateScore = this.updateScore.bind(this);
    }

    updateScore() {
        this.props.f(this.state.value)
    }

    render() {
        return (
            <View>
                <Button
                    onPress={this.updateScore}
                    title={this.state.name}
                    color="#841584"
                    accessibilityLabel="Learn more about this purple button"
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    baseText: {
        fontFamily: "Cochin"
    },
    titleText: {
        fontSize: 40,
        fontWeight: "bold"
    }
});

export default Fruits;


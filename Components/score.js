import React, {Component} from "react";
import {Button, Text, View} from "react-native";

class Score extends Component {
    constructor(props) {
        super(props);
        this.state = {
            componentName: "Score",
            value: 0,
        };

        this.handleIncrement = this.handleIncrement.bind(this);
    }

    handleIncrement() {
        this.setState((prev) => ({ value: prev.value + 1 }));
    }

    render() {
        return (
            <View>
                <Text>{this.state.componentName}</Text>
                <Button onPress={this.handleIncrement}>+</Button>
                {this.state.value}
            </View>
        );
    }
}

export default Score

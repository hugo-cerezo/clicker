import React, { Component } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import Fruits from "./Fruits";
// import Score from "./Score";
import Shop from "./Shop";
import { ProgressBar } from "react-bootstrap";

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            componentName: "Main",
            fuits: ['abricot', 'apple', 'cherry', 'kiwi', 'lemon', 'orange', 'peach', 'pineapple', 'strawberry', 'watermelon'],
            score: 0,
        };

        this.handleIncrement = this.handleIncrement.bind(this);
    }

    handleIncrement(amount) {
        this.setState((prev) => ({ score: prev.score + amount }));
    }

    renderFruits() {
        return this.state.fuits.map((item, key) => {
            key += 1;
            return (
                <View style={[styles.container, {flexDirection: "collumn"}]}>
                    <Fruits key={key} name={item} id={key} f={this.handleIncrement} />
                    <ProgressBar name={item} animated now={key} />
                </View>                
                
            );
        });
    }

    render() {
        return (
            <View>
                <Text>score : {Math.floor(this.state.score)}</Text>
                {this.renderFruits()}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    myClass: {
        backgroundColor: "black"
    },
});

export default Main;


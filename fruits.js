import React, {Component} from "react";
import {StyleSheet, View, Button} from "react-native";

class Fruits extends Component {
    constructor(props) {
        super(props);
        this.state = {
            componentName: "Fruits",
            name: this.props.name,
            lvl: 1,
            time: 1000 / 60 * (this.props.id * 1.15),
            value: 1 * (this.props.id * 1.15),
            auto: 0,
            upgrade: 10 * (this.props.id * 1.15),
            buy: 25 * (this.props.id * 1.15),
            unlock: 0,
            speed: 20 * (this.props.id * 1.15),
            isAuto: 0,
            timer: 0,
        };

        this.updateScore = this.updateScore.bind(this);
        this.increment = this.increment.bind(this);
    }

    updateScore() {
        this.props.f(this.state.value)
    }

    increment() {
        if (this.state.timer === 0) {
            const interval = setInterval(() => {
                this.setState((prev) => ({timer: prev.timer + 1}));
                if (this.state.timer === 100) {
                    if (this.state.isAuto === 0) {
                        this.setState(() => ({timer: 0}));
                        this.updateScore();
                        return clearInterval(interval);
                    }

                    this.setState(() => ({timer: 0}));
                    this.updateScore()
                }
            }, this.state.time)
        }
    };

    render() {
        return (
            <View>
                <Button
                    onPress={this.increment}
                    title={this.state.name}
                    color="#841584"
                    accessibilityLabel="Learn more about this purple button"
                />
                <View style={styles.box}>
                    <View style={{width: this.state.timer + "%", height: '20px', backgroundColor: "white"}}></View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    box: {
        width: "100%",
        height: "50px",
    },
    baseText: {
        fontFamily: "Cochin"
    },
    titleText: {
        fontSize: 40,
        fontWeight: "bold"
    }
});

export default Fruits;


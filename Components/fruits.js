import React, {Component} from "react";
import {Button, StyleSheet, View} from "react-native";

class Fruits extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: this.props.name,
            timer: 0,
        };

        this.updateScore = this.updateScore.bind(this);
        this.increment = this.increment.bind(this);
    }

    updateScore() {
        this.props.handleScore(this.props.lvl * this.props.value)
    }

    increment() {
        if (this.state.timer === 0) {
            const interval = setInterval(() => {
                this.setState((prev) => ({timer: prev.timer + 1}));
                if (this.state.timer === 100) {
                    if (this.props.isAuto === false) {
                        this.setState(() => ({timer: 0}));
                        this.updateScore();
                        return clearInterval(interval);
                    }

                    this.setState(() => ({timer: 0}));
                    this.updateScore()
                }
            }, 1000 / 60 * (this.props.progressTime))
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
                    disabled={!this.props.isUnlocked}
                />
                <View style={styles.box}>
                    <View style={{width: this.state.timer + "%", height: '20px', backgroundColor: "white"}}/>
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


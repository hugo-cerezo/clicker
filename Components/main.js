import React, {Component} from "react";
import {StyleSheet, Text, View} from "react-native";
import Fruits from "./fruits";
import Shop from "./shop";


class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            componentName: "Main",
            score: 6000,
            shopVisible: false,
            fruits: {
                apple: {lvl: 1, isAuto: false, value: 1, isUnlocked: true},
                apricot: {lvl: 1, isAuto: false, value: 2, isUnlocked: false},
                cherry: {lvl: 1, isAuto: false, value: 3, isUnlocked: false},
                kiwi: {lvl: 1, isAuto: false, value: 4, isUnlocked: false},
                lemon: {lvl: 1, isAuto: false, value: 5, isUnlocked: false},
                orange: {lvl: 1, isAuto: false, value: 6, isUnlocked: false},
                peach: {lvl: 1, isAuto: false, value: 7, isUnlocked: false},
                pineapple: {lvl: 1, isAuto: false, value: 8, isUnlocked: false},
                strawberry: {lvl: 1, isAuto: false, value: 9, isUnlocked: false},
                watermelon: {lvl: 1, isAuto: false, value: 10, isUnlocked: false},
            },
        };

        this.handleScore = this.handleScore.bind(this);
        this.handleAuto = this.handleAuto.bind(this);
        this.handleLvl = this.handleLvl.bind(this);
        this.handleUnlock = this.handleUnlock.bind(this);
    }


    handleScore(amount) {
        let state = this.state.score += amount;
        this.setState((prev) => (state));
    }

    handleLvl(fruit) {
        if (this.state.score >= this.state.fruits[fruit].lvl * this.state.fruits[fruit].value) {
            let state = this.state;
            state.fruits[fruit].lvl++;
            state.score -= this.state.fruits[fruit].lvl * this.state.fruits[fruit].value;
            this.setState(() => (state));
        }


    }

    handleAuto(fruit) {
        if (this.state.score >= this.state.fruits[fruit].lvl * this.state.fruits[fruit].value) {
            let state = this.state;
            state.fruits[fruit].isAuto = true;
            state.score -= this.state.fruits[fruit].lvl * this.state.fruits[fruit].value * 1000;
            this.setState(() => (state));
        }
    }

    handleUnlock(fruit) {
        let state = this.state.fruits[fruit].isUnlocked = true;
        this.setState(() => (state));
    }

    renderFruits() {
        return Object.keys(this.state.fruits).map((item, key) =>
            <Fruits key={key}
                    name={item}
                    value={this.state.fruits[item].value}
                    handleScore={this.handleScore}
                    lvl={this.state.fruits[item].lvl}
                    isAuto={this.state.fruits[item].isAuto}
                    isUnlocked={this.state.fruits[item].isUnlocked}
            />
        );
    }

    render() {
        return (
            <View>
                <Shop fruits={this.state.fruits}
                      handleLvl={this.handleLvl}
                      handleAuto={this.handleAuto}
                      handleUnlock={this.handleUnlock}
                      score={this.state.score}
                />
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


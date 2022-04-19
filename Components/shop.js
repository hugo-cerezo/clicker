import React, {Component} from "react";
import {Button, StyleSheet, Text, View} from "react-native";

class Shop extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: "none",
        }

        this.toggleShopElements = this.toggleShopElements.bind(this);
    }

    updateUnlock(fruit) {
        this.props.handleUnlock(fruit);
    }

    updateLvl(fruit) {
        if (this.props.fruits[fruit].isUnlocked === false) return;
        this.props.handleLvl(fruit)
    }

    updateAuto(fruit) {
        if (this.props.fruits[fruit].isUnlocked === false) return;
        this.props.handleAuto(fruit);
    }

    disableAuto(fruit) {
        if (this.props.fruits[fruit].isUnlocked === false) return true;
        if (this.props.fruits[fruit].isAuto === true) return true;
        return this.props.fruits[fruit].lvl * this.props.fruits[fruit].value * 1000 > this.props.score;
    }

    renderShopElements() {
        return Object.keys(this.props.fruits).map((fruit) => {
            return (
                <View key={fruit} style={styles.buttonWrapper}>
                    <Button
                        title={fruit}
                        color="#841584"
                        onPress={() => this.updateUnlock(fruit)}
                        disabled={this.props.fruits[fruit].isUnlocked}
                    />
                    <Button
                        title={"lvl:" + this.props.fruits[fruit].lvl + " ($" + this.props.fruits[fruit].lvl * this.props.fruits[fruit].value + ')'}
                        color="#841584"
                        onPress={() => this.updateLvl(fruit)}
                        disabled={!this.props.fruits[fruit].isUnlocked}
                    />
                    <Button
                        title={this.props.fruits[fruit].isAuto === false ?
                            "auto ($" + this.props.fruits[fruit].lvl * this.props.fruits[fruit].value * 1000 + ")" : "unlocked"
                        }
                        color="#841584"
                        onPress={() => this.updateAuto(fruit)}
                        disabled={this.disableAuto(fruit)}
                    />
                </View>

            );
        });
    }

    toggleShopElements() {
        return this.setState(() => ({visible: this.state.visible === "none" ? "block" : "none"}));
    }

    render() {
        return (
            <View>
                <Button
                    onPress={this.toggleShopElements}
                    title={"shop"}
                    color="#841584"
                />
                <View style={{display: this.state.visible, backgroundColor: "#841584"}} hidden={true}>
                    {this.renderShopElements()}
                </View>
            </View>
        )
            ;
    }
}

const styles = StyleSheet.create({
    buttonWrapper: {
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gridTemplateRows: "1fr",
    },
    text: {
        padding: ".5vw",
        textAlign: "center",
        color: "white",
        textTransform: "uppercase",
        fontWeight: 500,
    }
});

export default Shop

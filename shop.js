import React, {Component} from "react";
import {View, Button, StyleSheet} from "react-native";

class Shop extends Component {
    constructor(props) {
        super(props);
        this.state = {
            componentName: "Shop",
            fruits: this.props.fruits,
            visible: "none",
        }

        this.toggleShopElements = this.toggleShopElements.bind(this);
    }

    renderShopElements() {
        return this.state.fruits.map((item, key) => {
            return (
                <View key={item} style={styles.buttonWrapper}>
                    <View style={styles.text}>{item}</View>
                    <Button
                        title="time"
                        color="#841584"
                        onPress={() => null}
                    />
                    <Button
                        title="value"
                        color="#841584"
                        onPress={() => null}
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
                    title={this.state.componentName}
                    color="#841584"
                />
                <View style={{display: this.state.visible, backgroundColor: "#841584"}} hidden={true}>
                    {this.renderShopElements()}
                </View>
            </View>
        );
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

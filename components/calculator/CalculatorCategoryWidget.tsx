import * as React from "react";
import {GestureResponderEvent, StyleSheet, TouchableHighlight, View, Text} from "react-native";
import {AntDesign} from "@expo/vector-icons";
import {loadCalculator} from "./CalculatorCategories";
import {Calculator} from "./Calculator";

class CalculatorCategoryWidget extends React.Component<{ id: string, onTouchHandler : (e: GestureResponderEvent) => void }, { calculator: Calculator }> {

    constructor(props:{ id: string, onTouchHandler: (e: GestureResponderEvent) => void }) {
        super(props);
        this.state = { calculator: loadCalculator(props.id).component }
    }

    render() {
        return (
            <TouchableHighlight onPress={e => this.props.onTouchHandler(e)}>
                <View style={categoryStyle.item}>
                    <Text style={categoryStyle.title}>{this.state.calculator.getName()}</Text>
                    <Text style={categoryStyle.metrics}>{(this.state.calculator.getLabels().join(", "))}</Text>
                    <AntDesign name="rightcircleo" size={24} color="black"
                               style={{position: 'absolute', top: "30%", right: "5%"}}/>
                </View>
            </TouchableHighlight>
        )
    }
}

const categoryStyle = StyleSheet.create({
    metrics: {},
    header: {
        flex: 1,
        marginRight: 20,
        marginLeft: 20,
        marginTop: 10,
        backgroundColor: '#2196f3',
        padding: 10,
        borderRadius: 5,
    },
    item: {
        flex: 1,
        marginRight: 20,
        marginLeft: 20,
        marginTop: 10,
        backgroundColor: '#F2B950',
        padding: 10,
        borderRadius: 5,
    },
    title: {
        fontWeight: "bold",
        color: "#3E3E40",
        padding: 2,
        borderRadius: 1,
    }
})


export default CalculatorCategoryWidget;

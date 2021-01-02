import {StyleSheet, TextInput, View} from "react-native";
import {Body, Card, CardItem, Text} from "native-base";
import * as React from "react";
import {Calculator} from "../Calculator";

class ConvertWidget extends React.Component<{ calculator: Calculator }, any>{

    constructor(props: { calculator: Calculator }) {
        super(props);
        const calculator = this.props.calculator;
        this.state = {
            activeMetric: calculator.getLabels()[0],
            calculator: calculator,
            entries: (calculator.calc(0, calculator.getLabels()[0]) as Map<string, number>)
        }
    }

    handleInputChange(text: string, key: string) {
        if (text !== "") {
            this.setState({
                activeMetric: key,
                entries: (this.state.calculator.calc(parseFloat(text), key) as Map<string, number>)
            })
        }
    }

    generateInputs() {
        return (Array.from(this.state.entries.keys()) as Array<string>)
            .map((key) => {
                const isActive = key === this.state.activeMetric;
                return (
                    <View style={isActive ? [rowStyles.activeRow] : [rowStyles.row]} key={key}>
                        <TextInput
                            style={rowStyles.input}
                            keyboardType='numeric'
                            onChangeText={ (text) => this.handleInputChange(text, key) }
                            value={ (+this.state.entries.get(key).toFixed(8)).toString() }
                        />
                        <Text style={rowStyles.label}>{ key }</Text>
                    </View>
                )
            })
    }

    render() {
        const elements = this.generateInputs();
        return (
            <Card style={{ flex: 1 }}>
                <CardItem header bordered>
                    <Text style={ rowStyles.cardItemHeader }> Converter </Text>
                </CardItem>
                <CardItem bordered>
                    <Body>
                        {elements}
                    </Body>
                </CardItem>
            </Card>
        );
    }
}

export default ConvertWidget;

const rowStyles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        marginBottom: 1,
        marginTop: 1,
        width: "100%",
        height: 50,
        backgroundColor: "#F2B950"
    },
    activeRow: {
        flexDirection: 'row',
        marginBottom: 1,
        marginTop: 1,
        height: 50,
        width: "100%",
        backgroundColor: "#D93B3B",
        borderWidth: 1,
        borderColor: "#ff0000"
    },
    cardItemHeader: {
        color: "#3E3E40"
    },
    label: {
        width: "20%",
        lineHeight: 50,
        fontWeight: "bold",
        color: "#3E3E40"
    },
    input: {
        width: "75%",
        paddingRight: "5%",
        textAlign: "right"
    }
})

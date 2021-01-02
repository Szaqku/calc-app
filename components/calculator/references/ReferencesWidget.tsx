import {Body, Card, CardItem, Text, View} from "native-base";
import * as React from "react";
import Reference from "./Reference";
import {ScrollView} from "react-native";
import {ReferenceClass} from "./types";

class ReferencesWidget extends React.Component<{
    referencesDocument: any,
    descriptionHandler: (el: ReferenceClass) => string },
    { references : Array<ReferenceClass> }> {

    constructor(props: { referencesDocument: any, descriptionHandler: (el: ReferenceClass) => string }) {
        super(props);
        this.state = { references: props.referencesDocument.records }
    }

    render() {
        const elements = this.state.references
            .map(element => (
                <Reference
                    key={element.name}
                    header={element.name}
                    description={this.props.descriptionHandler(element)} />)
            );

        return (
            <Card style={{flex: 1}}>
                <CardItem header bordered>
                    <Text style={{ color: "#3E3E40" }}> References </Text>
                </CardItem>
                <CardItem bordered>
                    <Body>
                        <View style={{width: "100%"}}>
                            <ScrollView style={{marginBottom: "10%"}}>
                                { elements }
                            </ScrollView>
                        </View>
                    </Body>
                </CardItem>
            </Card>)
    }
}

export default ReferencesWidget;

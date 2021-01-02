import {Body, Card, CardItem, Text} from "native-base";
import * as React from "react";

class References extends React.Component<{ header: string, description: string }, {}> {

    constructor(props: { header: string; description: string }, context: any) {
        super(props, context);
    }

    render() {
        return (
            <Card key={this.props.header} style={{width: "100%"}}>
                <CardItem header bordered>
                    <Text style={{color: "#3E3E40", fontWeight: "bold"}}> { this.props.header } </Text>
                </CardItem>
                <CardItem bordered>
                    <Body>
                        <Text>{ this.props.description }</Text>
                    </Body>
                </CardItem>
            </Card>
        )
    }
}

export default References;

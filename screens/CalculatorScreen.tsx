import {Route,} from "react-native";
import * as React from "react";
import {StackNavigationProp} from "@react-navigation/stack";
import {Container} from "native-base";
import ReferencesWidget from "../components/calculator/references/ReferencesWidget";
import ConvertWidget from "../components/calculator/converter/ConvertWidget";
import {loadCalculator} from "../components/calculator/CalculatorCategories";
import {CalculatorCategory} from "../components/calculator/types";

export default class CalculatorScreen extends React.Component<
    { navigation: StackNavigationProp<any>, route: Route },
    { calculatorCategory: CalculatorCategory}
    > {

    constructor(props: { navigation: StackNavigationProp<any>, route: Route }) {
        super(props);
        this.state = { calculatorCategory: loadCalculator(this.props.route.params.id) }
    }

    render() {
        return (<Container>
                    <ConvertWidget
                        key={"convertWidget"}
                        calculator={this.state.calculatorCategory.component} />
                    <ReferencesWidget
                        key={"referencesWidget"}
                        referencesDocument={this.state.calculatorCategory.file}
                        descriptionHandler={this.state.calculatorCategory.descriptionHandler}
                    />
                </Container>);
    }
}

///* Color Theme Swatches in Hex */
// .My-Color-Theme-1-hex { color: #3E3E40; }
// .My-Color-Theme-2-hex { color: #26ABBF; }
// .My-Color-Theme-3-hex { color: #A7D9D4; }
// .My-Color-Theme-4-hex { color: #F2B950; }
// .My-Color-Theme-5-hex { color: #D93B3B; }
//
// /* Color Theme Swatches in RGBA */
// .My-Color-Theme-1-rgba { color: rgba(62, 62, 64, 1); }
// .My-Color-Theme-2-rgba { color: rgba(38, 171, 191, 1); }
// .My-Color-Theme-3-rgba { color: rgba(167, 217, 212, 1); }
// .My-Color-Theme-4-rgba { color: rgba(242, 185, 80, 1); }
// .My-Color-Theme-5-rgba { color: rgba(217, 59, 59, 1); }
//
// /* Color Theme Swatches in HSLA */
// .My-Color-Theme-1-hsla { color: hsla(240, 1, 24, 1); }
// .My-Color-Theme-2-hsla { color: hsla(187, 66, 44, 1); }
// .My-Color-Theme-3-hsla { color: hsla(174, 39, 75, 1); }
// .My-Color-Theme-4-hsla { color: hsla(38, 86, 63, 1); }
// .My-Color-Theme-5-hsla { color: hsla(0, 67, 54, 1); }

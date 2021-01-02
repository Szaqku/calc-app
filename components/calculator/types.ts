import {GestureResponderEvent} from "react-native";
import {Calculator} from "./Calculator";
import {ReferenceClass} from "./references/types";

export interface CalculatorCategory {
    id: string;
    component: Calculator;
    file: any;
    descriptionHandler?: (rc: ReferenceClass) => string;
    onTouchHandler?: (e: GestureResponderEvent) => void;
}

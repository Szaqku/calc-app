import {AreaUnits, LengthUnits, MassUnit, TemperatureUnits, TimeUnits} from "./Calculator";
import {CalculatorCategory} from "./types";

export const CATEGORIES : Array<CalculatorCategory> = [
    {
        id: "Length",
        component: new LengthUnits(),
        file: require(`../../assets/static/references/length.json`),
        descriptionHandler: (rc) => `${rc.sizes[0].width} x ${rc.sizes[0].height} ${rc.sizes[0].lengthUnit}`
    },
    {
        id: "Temperature",
        component: new TemperatureUnits(),
        file: require(`../../assets/static/references/temperature.json`),
        descriptionHandler: (rc) => `${rc.sizes[0].deg} ${rc.sizes[0].lengthUnit} degrees`
    },
    {
        id: "Area",
        component: new AreaUnits(),
        file: require(`../../assets/static/references/area.json`),
        descriptionHandler: (rc) => `Is equal to: ${rc.sizes[0].area} ${rc.sizes[0].lengthUnit}`
    },
    {
        id: "Time",
        component: new TimeUnits(),
        file: require(`../../assets/static/references/time.json`),
        descriptionHandler: (rc) => `${rc.sizes[0].time} ${rc.sizes[0].lengthUnit}`
    },
    {
        id: "Mass",
        component: new MassUnit(),
        file: require(`../../assets/static/references/mass.json`),
        descriptionHandler: (rc) => `${rc.sizes[0].weight} ${rc.sizes[0].lengthUnit}`
    }
];

export function loadCalculator(id: string) : CalculatorCategory {
    return CATEGORIES.find(calculatorCategory => calculatorCategory.id === id) || CATEGORIES[0]
}

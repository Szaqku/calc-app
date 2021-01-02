export abstract class Calculator {

    public abstract calc(value: number, metric: string) : Map<string, number> | void;

    public abstract getLabels(): Array<string>;
    public abstract getName(): string;
}

export class TemperatureUnits extends Calculator {

    private labels: Array<string>;
    private name: string;

    constructor() {
        super();
        this.labels = [ "Celsius", "Kelvin", "Farenheit"];
        this.name = "Temperature"
    }

    public calc(value: number, metric: string): Map<string, number> | void {
        let results = new Map<string, number>();
        this.getLabels().forEach(label => results.set(label, 0))
        results.set(metric, value);

        switch (metric) {
            case "Kelvin":
                results.set("Farenheit", (value - 273.15) * 9/5 + 32)
                results.set("Celsius", value - 273.15)
                break;
            case "Farenheit":
                results.set("Kelvin", (value - 32) * 5/9 + 273.15)
                results.set("Celsius", (value - 32) * 5/9)
                break;
            case "Celsius":
                results.set("Kelvin", value + 273.15)
                results.set("Farenheit", value * 9 / 5 + 32)
                break;
        }

        return results
    }

    public getLabels(): Array<string> {
        return this.labels;
    }

    public getName(): string {
        return this.name;
    }

}

export class LengthUnits extends Calculator {

    private labels: Array<string>;
    private name: string;

    constructor() {
        super();
        this.labels = ["mm", "cm", "dm", "m", "km"];
        this.name = "Length"
    }

    public calc(value: number, metric: string): Map<string, number> | void {
        let results = new Map<string, number>();
        this.getLabels().forEach(label => results.set(label, 0))
        results.set(metric, value);

        switch (metric) {
            case "mm":
                results.set("cm", value / 10)
                results.set("dm", value / 100)
                results.set("m", value / 1000)
                results.set("km", value / 1000 / 1000)
                break;
            case "cm":
                results.set("mm", value * 10)
                results.set("dm", value / 10)
                results.set("m", value / 100)
                results.set("km", value / 100 / 1000)
                break;
            case "dm":
                results.set("mm", value * 100)
                results.set("cm", value * 10)
                results.set("m", value / 10)
                results.set("km", value / 10 / 1000)
                break;
            case "m":
                results.set("mm", value * 1000)
                results.set("cm", value * 100)
                results.set("dm", value * 10)
                results.set("km", value / 1000)
                break;
            case "km":
                results.set("mm", value * 1000 * 1000)
                results.set("cm", value * 1000 * 100)
                results.set("dm", value * 1000 * 10)
                results.set("m", value * 1000)
                break;
        }

        return results
    }

    public getLabels(): Array<string> {
        return this.labels;
    }

    public getName(): string {
        return this.name;
    }
}

export class AreaUnits extends Calculator{

    private labels: Array<string>;
    private name: string;

    constructor() {
        super();
        this.labels = ["mm\u00B2", "cm\u00B2", "dm\u00B2", "m\u00B2", "km\u00B2"];
        this.name = "Area"
    }

    public calc(value: number, metric: string): Map<string, number> | void {
        let results = new Map<string, number>();
        this.getLabels().forEach(label => results.set(label, 0))
        results.set(metric, value);

        switch (metric) {
            case "mm\u00B2":
                results.set("cm\u00B2", value / 10 / 10)
                results.set("dm\u00B2", value / 100 / 100)
                results.set("m\u00B2", value / 1000 / 1000)
                results.set("km\u00B2", value / 1000 / 1000 / 1000 / 1000)
                break;
            case "cm\u00B2":
                results.set("mm\u00B2", value * 10 * 10)
                results.set("dm\u00B2", value / 10 / 10)
                results.set("m\u00B2", value / 100 / 100)
                results.set("km\u00B2", value / 100 / 1000 / 100 / 1000)
                break;
            case "dm\u00B2":
                results.set("mm\u00B2", value * 100 * 100)
                results.set("cm\u00B2", value * 10 * 10)
                results.set("m\u00B2", value / 10 / 10)
                results.set("km\u00B2", value / 10 / 1000 / 10 / 1000)
                break;
            case "m\u00B2":
                results.set("mm\u00B2", value * 1000 * 1000)
                results.set("cm\u00B2", value * 100 * 100)
                results.set("dm\u00B2", value * 10 * 10)
                results.set("km\u00B2", value / 1000 / 1000)
                break;
            case "km\u00B2":
                results.set("mm\u00B2", value * 1000 * 1000 * 1000 * 1000)
                results.set("cm\u00B2", value * 1000 * 100 * 1000 * 100)
                results.set("dm\u00B2", value * 1000 * 10 * 1000 * 10)
                results.set("m\u00B2", value * 1000 * 1000)
                break;
        }

        return results
    }

    public getLabels(): Array<string> {
        return this.labels;
    }

    public getName(): string {
        return this.name;
    }
}

export class TimeUnits extends Calculator {

    private labels: Array<string>;
    private name: string;

    constructor() {
        super();
        this.labels = ["seconds", "minutes", "hours", "days", "weeks"];
        this.name = "Time"
    }

    public calc(value: number, metric: string): Map<string, number> | void {
        let results = new Map<string, number>();
        this.getLabels().forEach(label => results.set(label, 0))
        results.set(metric, value);

        switch (metric) {
            case "seconds":
                results.set("minutes", value / 60)
                results.set("hours", value / 60 / 60)
                results.set("days", value / 60 / 60 / 24)
                results.set("weeks", value / 60 / 60 / 24 / 7)
                break;
            case "minutes":
                results.set("seconds", value * 60)
                results.set("hours", value / 60)
                results.set("days", value / 60 / 24)
                results.set("weeks", value / 60 / 24 / 7)
                break;
            case "hours":
                results.set("seconds", value * 60 * 60)
                results.set("minutes", value * 60)
                results.set("days", value / 24)
                results.set("weeks", value / 24 / 7)
                break;
            case "days":
                results.set("seconds", value * 60 * 60 * 24)
                results.set("minutes", value * 60 * 24)
                results.set("hours", value * 24)
                results.set("weeks", value / 7)
                break;
            case "weeks":
                results.set("seconds", value * 60 * 60 * 24 * 7)
                results.set("minutes", value * 60 * 24 * 7)
                results.set("hours", value * 24 * 7)
                results.set("days", value * 7)
                break;
        }

        return results
    }

    public getLabels(): Array<string> {
        return this.labels;
    }

    public getName(): string {
        return this.name;
    }
}

export class MassUnit extends Calculator {

    private labels: Array<string>;
    private name: string;

    constructor() {
        super();
        this.labels = ["gram", "kilogram", "tonne", "pounce", "ounce"];
        this.name = "Mass"
    }

    public calc(value: number, metric: string): Map<string, number> | void {
        let results = new Map<string, number>();
        this.getLabels().forEach(label => results.set(label, 0))
        results.set(metric, value);

        switch (metric) {
            case "gram":
                results.set("kilogram", value / 1000)
                results.set("tonne", value / 1000 / 1000)
                results.set("pounce", value / 454)
                results.set("ounce", value / 28.35)
                break;
            case "kilogram":
                results.set("gram", value * 1000)
                results.set("tonne", value / 1000)
                results.set("pounce", value * 2.205)
                results.set("ounce", value * 35.274)
                break;
            case "tonne":
                results.set("gram", value * 1000 * 1000)
                results.set("kilogram", value * 1000)
                results.set("pounce", value * 2205)
                results.set("ounce", value * 35274)
                break;
            case "pounce":
                results.set("gram", value * 454)
                results.set("kilogram", value / 2.205)
                results.set("tonne", value / 2205)
                results.set("ounce", value * 16)
                break;
            case "ounce":
                results.set("gram", value * 28.35)
                results.set("kilogram", value * 35.274)
                results.set("tonne", value / 35274)
                results.set("pounce", value / 16)
                break;
        }

        return results;
    }

    public getLabels(): Array<string> {
        return this.labels;
    }

    public getName(): string {
        return this.name;
    }
}



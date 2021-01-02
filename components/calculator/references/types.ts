export interface ReferenceClass {
    name: string
    sizes: Array<ReferenceClassSize>
}

export interface ReferenceClassSize {
    width?: number,
    height?: number,
    area?: number,
    deg?: number,
    time?: number,
    weight?: number,
    lengthUnit: string,
}


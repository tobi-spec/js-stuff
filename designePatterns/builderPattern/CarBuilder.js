import {Car} from "./Car.js";

export class CarBuilder {

    id(id) {
        this.id = id
        return this
    }

    brand(brand) {
        this.brand = brand
        return this
    }

    model(model) {
        this.model = model
        return this
    }

    color(color) {
        this.color = color
        return this
    }

    build() {
        return new Car(this.id, this.brand, this.model, this.color)
    }
}
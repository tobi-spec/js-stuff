import {CarBuilder} from "./CarBuilder.js";
import {Car} from "./Car.js";

const car1 = new Car(1,
                    "VW",
                    "Polo",
                    "Red")

const car2 = new CarBuilder()
    .id(1)
    .brand("VW")
    .model("Polo")
    .color("Blue")
    .build()

console.log(car1)
console.log(car2)
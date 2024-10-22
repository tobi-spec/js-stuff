import {Bike} from "./Bike.js";
import {Car} from "./Car.js";
import {Bus} from "./Bus.js";

export class VehicleFactory {

    getVehicle(vehicleType) {
        if(vehicleType == null) {
            return null
        }

        switch (vehicleType.toUpperCase()) {
            case "BIKE":
                return new Bike()
            case "CAR":
                return new Car()
            case "BUS":
                return new Bus()
            default:
                return null
        }
    }
}
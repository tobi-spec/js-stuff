import {VehicleFactory} from "./VehicleFactory.js";

const vehicleFactory = new VehicleFactory()

const bike = vehicleFactory.getVehicle("Bike")
bike.drive()

const car = vehicleFactory.getVehicle("Car")
car.drive()

const bus = vehicleFactory.getVehicle("Bus")
bus.drive()
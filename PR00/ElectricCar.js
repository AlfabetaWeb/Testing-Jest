
const Car = require("./Car");

class ElectricCar extends Car{
    power = 0;

    constructor(name, year, power){
        super(name, year);
        this.power = power;
    }

    show(){
        return "21 years old car, it is a electric Peugeot 206 with 110";
    }
};

module.exports = ElectricCar;
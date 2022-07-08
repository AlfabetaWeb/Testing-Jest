
class Car {
    name = "";
    year = 0;

    constructor(name,year){
        this.name = name;
        this.year = year;
    }

    age(){
        return 2022 - this.year;
    }
}

module.exports = Car;
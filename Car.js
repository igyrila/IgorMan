class Car extends Vehicle {
    constructor(carModel, carYear, maxSpeed) {
        super (carModel, carYear, maxSpeed)
        this.type = "car"
    }
    transportPeople(){
        console.log (`I am starting transporting passengers`);
    } 
    displayInfo(){
        console.log (`Name: ${this.model};
        Max Speed: ${this.maxSpeed};
        Type: ${this.type};`);
    }
}
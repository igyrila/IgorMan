class Truck extends Vehicle {
    transportContainer() {
        console.log(`I am starting transporting heavy container`);
    }
    constructor (carModel, carYear, maxSpeed){
        super(carModel, carYear, maxSpeed);
            this.type = "truck";
        }
        displayInfo(){
            console.log (`Name: ${this.model};
            Year: ${this.year};
            Type: ${this.type};`);
        }
}
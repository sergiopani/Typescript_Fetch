
//Fixing long anotations with interfaces
interface Car{
    name: String,
    year: number,
    broken: boolean,
    summary(): string
}


const oldCivic: Car = {
    name: 'civic',
    year: 2000,
    broken: true,
    summary(): string{
        return 'Name: ${this.name}'
    }
};

const printVehicle = (vehicle:Car) => {
    console.log(vehicle)
}

//Make sure that the object is passed in params is along with Car interfice
printVehicle(oldCivic);

//Functions always accepts interfaces

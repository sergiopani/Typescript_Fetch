class Vehicle {   
    
    constructor(public color:string){
        //Instantli exacute when we crate anew instance of a class
        
    }


    public honk(): void{
        console.log('beep');
    }
}

class CarClass extends Vehicle{
    constructor(public weheels: number, color: string){
        super(color)
    }
    private drive(): void{
        console.log("I dont like that")
    }


    startDrivingProcces(){
        this.drive();
    }
}


/*

* PUBLIC  => Method can be called anyware, by default all of them are puclic
* PRIVATE => Method can only be called by other methods in tha same class
* PROTECTED => Can be called by other methods in the same class or child classes

*/
const vehicle = new Vehicle('orange');

const cara = new CarClass('red');


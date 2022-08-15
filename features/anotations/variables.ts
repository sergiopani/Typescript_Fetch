let apples: number = 5;

let speed: string = 'fast';

let hasName: boolean = true;

let nothing: null = null;

//Only asing a value of type date
let now: Date = new Date();

//Type anotation for array
let colors: string[] = ['red','green','blue']
let myNumbers: number[] = [1,2,3]
let truths: boolean[] = [true,false]


//Classes, classes always brings capital names
class Car {

}

let car: Car = new Car();

//Obejct literal
let point:{x:number; y:number} = {
    x:10,
    y:20
}


//Function => What arguments given and what returned
const logNumber: (i:number) => void = (i:number) => {
    console.log(i);
}


//Variable whose type cannot be inferred correctly
let numbers = [-10,-1,12]
let numberAboveZero: boolean | number = false;

for(let i = 0; i< numbers.length; i++){
    if(numbers[i]>0){
        numberAboveZero = numbers[i];
    }

}

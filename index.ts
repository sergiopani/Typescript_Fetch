import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/todos/1'

//Used to defined the structure of an object we can ignore propieties
interface Todo{
    id:number;
    title:string;
    completed:boolean
}


axios.get(url).then(response => {
    
    const todo = response.data as Todo;

    const id = todo.id;
    const title = todo.title;
    const completed = todo.completed;

    logTodo(id,title,completed);
});



const logTodo = (id:number,title:string,completed:boolean) => {
    console.log(`ID is: ${id}
    title is: ${title}
    is completed?: ${completed}`)
}

//Anotations in objects
const profile = {
    name: 'alex',
    age:20,
    coords:{
        lat: 0,
        lng: 15
    },
    setAge(age: number): void{
        this.age = age;        
    }
};

const { age }: {age:number} = profile;

const {coords: {lat, lng}}  = profile;

//Array containing nothing but strings
const carMaker: string[] = ['ford', 'toyota', 'chevy'];

const dates = [new Date(), new Date()];

const carsByMake: string [][] = [
    ['f150'],
    ['corolla'],
    ['camaro']
];

//Tuples
const drink: {color:string,carbonated:boolean,sugar:number} = {
    color: 'brown',
    carbonated: true,
    sugar: 40
}

type Drink = [string,boolean,number];

let pepsi: Drink;




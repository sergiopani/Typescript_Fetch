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
import { Component } from '@angular/core';

class Todo{
    title: string;
    completed: boolean;

    constructor(title: string, completed: boolean = false){
        this.title = title;
        this.completed = completed;
    }
}

const todos: Todo[] = [
    {
        title: 'Изучить JavaScript',
        completed: true
    },
     {
        title: 'Изучить Angular 2',
        completed: false
    },
     {
        title:  'Написать приложение',
        completed: true
    }
   
];

@Component({
    moduleId: module.id,
    selector: 'app',
    templateUrl: './app.component.html',
    styleUrls: ['app.component.css']
})
export class AppComponent {
    title = 'Angular 2Do';
    todos:Todo[] = todos;

    toggle(todo: Todo){
        todo.completed = !todo.completed;
    }
    delete(todo: Todo){
        let index = this.todos.indexOf(todo);

        if (index > -1){
            this.todos.splice(index, 1);
        }
    }
    create(title: string){
        let todo: Todo = new Todo(title);
    }

}
import { Component } from '@angular/core';

interface ITodo{
    title: string;
    completed: boolean;
}

const todos = [
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
    todos = todos;

    toggle(todo: ITodo){
        todo.completed = !todo.completed;
    }
    delete(todo: ITodo){
        let index = this.todos.indexOf(todo);

        if (index > -1){
            this.todos.splice(index, 1);
        }
    }

}
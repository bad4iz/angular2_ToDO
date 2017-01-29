import { Component, Input, OnInit } from '@angular/core';

import {Todo } from '../shared/todo';
import {TodoService } from '../shared/todo.service'

@Component({
    moduleId: module.id,
    selector: 'todo-list',
    templateUrl: 'todo-list.component.html',
    styleUrls: ['todo-list.component.css']
})
export class TodoListComponent implements OnInit{
    todos: Todo[];

    constructor(private todoService: TodoService){
        this.todos = [];
    }

    ngOnInit(){
        this.todos = this.todoService.getTodos();
    }
     toggle(todo: Todo){
        todo.completed = !todo.completed;
    }
    delete(todo: Todo){
        let index = this.todos.indexOf(todo);

        console.log('ljljljlkj');

        if (index > -1){
            this.todos.splice(index, 1);
        }
    }
}
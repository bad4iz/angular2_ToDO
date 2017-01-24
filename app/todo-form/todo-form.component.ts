import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'todo-form',
    templateUrl: 'todo-form.component.html',
    styleUrl: ['todo-form.component.css']
})
export class TodoFormComponent {
    newTodoTitle: string = '';
    create() {
       
    }
}
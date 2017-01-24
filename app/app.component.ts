import { Component } from '@angular/core';




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

}
/**
 * Created by bad4iz on 27.01.2017.
 */
import {todos} from './data';
import {Todo} from './todo';

export class TodoService {
    todos: Todo[] = todos;

    getTodos(): Todo[] {
        return this.todos;
    }
    createTodo(title: string){
        let todo = new Todo(title);
        this.todos.push(todo);
    }
    deleteTodo(todo: Todo){
        let index = this.todos.indexOf(todo);

        if (index > -1){
            this.todos.splice(index, 1);
        }
    }
    toggle(todo: Todo){
        todo.completed = !todo.completed;
    }
}
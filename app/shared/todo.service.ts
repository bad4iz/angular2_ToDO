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

    }
    delete(todo: Todo){

    }
    toggle(todo: Todo){

    }
}
import { NgModule } from "@angular/core";
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
/**
 * Created by bad4iz on 21.01.2017.
 */

import {AppComponent} from './app.component';
import {TodoFormComponent} from './todo-form/todo-form.component';
import {TodoListComponent} from './todo-list/todo-list.component';
import {TodoItemComponent} from './todo-item/todo-item.component';

@NgModule({
    imports: [BrowserModule, FormsModule], 
    declarations: [
        AppComponent,
        TodoFormComponent,
        TodoListComponent,
        TodoItemComponent
        ],
    bootstrap: [AppComponent]

})
export class AppModule{

}

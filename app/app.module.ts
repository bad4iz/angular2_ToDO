import { NgModule } from "@angular/core";
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
/**
 * Created by bad4iz on 21.01.2017.
 */

import {AppComponent} from './app.component';

@NgModule({
    imports: [BrowserModule, FormsModule], 
    declarations: [AppComponent],
    bootstrap: [AppComponent]

})
export class AppModule{

}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { TodoDataService } from './services/todo.service';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoListItemComponent } from './todo-list-item/todo-list-item.component';

import { TodoListHeaderComponent } from './todo-list-header/todo-list-header.component';
import { TodoListFooterComponent } from './todo-list-footer/todo-list-footer.component';


@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    TodoListItemComponent,
    TodoListHeaderComponent,
    TodoListFooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [TodoDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }

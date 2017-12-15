import { Component } from '@angular/core';
import { TodoDataService } from './services/todo.service';
import {Todo} from './shared/todo';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[TodoDataService]
})
export class AppComponent implements OnInit { 
  todos: Todo[] = [];
  
    constructor(
      private todoDataService: TodoDataService
    ) {
    }
  
    public ngOnInit() {
      this.todoDataService
        .getAllTodos()
        .subscribe(
          (todos) => {
            this.todos = todos;
          }
        );
    }
  
    onAddTodo(todo) {
      this.todoDataService
        .addTodo(todo)
        .subscribe(
          (newTodo) => {
            this.todos = this.todos.concat(newTodo);
          }
        );
    }
  
    onToggleTodoComplete(todo) {
      this.todoDataService
        .toggleTodoComplete(todo)
        .subscribe(
          (updatedTodo) => {
            todo = updatedTodo;
          }
        );
    }
  
    onRemoveTodo(todo) {
      this.todoDataService
        .deleteTodoById(todo.id)
        .subscribe(
          (_) => {
            this.todos = this.todos.filter((t) => t.id !== todo.id);
          }
        );
    }
}

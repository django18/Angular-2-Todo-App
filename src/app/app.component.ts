import { Component } from '@angular/core';
import { TodoDataService } from './services/todo.service';
import {Todo} from './shared/todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[TodoDataService]
})
export class AppComponent { 
    
    constructor(private todoDataService: TodoDataService) {
    }  
    
    // onAddTodo(todoData:Todo) {
    //   this.todoDataService.addTodo(todoData);
    // }

    // Add new method to handle event emitted by TodoListHeaderComponent
  onAddTodo(todo: Todo) {
    this.todoDataService.addTodo(todo);
  }
  
     // rename from toggleTodoComplete
  onToggleTodoComplete(todo: Todo) {
    this.todoDataService.toggleTodoComplete(todo);
  }

  // rename from removeTodo
  onRemoveTodo(todo: Todo) {
    this.todoDataService.deleteTodoById(todo.id);
  }

  
    get todos() {
      return this.todoDataService.getAllTodos();
    }
}

import { Injectable } from '@angular/core';
import {Todo} from '../shared/todo';
import { ApiService } from './api-service';

@Injectable()
export class TodoDataService {


    // Placeholder for last id so we can simulate
    // automatic incrementing of id's
    lastId: number = 0;
  
    // Placeholder for todo's
    todos: Todo[] = [];
  
    constructor( private api: ApiService) {
    }
  
    // // Simulate POST /todos
    // addTodo(todo: Todo): TodoDataService {
    //   if (!todo.id) {
    //     todo.id = ++this.lastId;
    //   }
    //   this.todos.push(todo);
    //   return this;
    // }
  
    // // Simulate DELETE /todos/:id
    // deleteTodoById(id: number): TodoDataService {
    //   this.todos = this.todos
    //     .filter(todo => todo.id !== id);
    //   return this;
    // }
  
    // // Simulate PUT /todos/:id
    // updateTodoById(id: number, values: Object = {}): Todo {
    //   let todo = this.getTodoById(id);
    //   if (!todo) {
    //     return null;
    //   }
    //   Object.assign(todo, values);
    //   return todo;
    // }
  
    // // Simulate GET /todos
    // getAllTodos(): Todo[] {
    //   return this.todos;
    // }
  
    // // Simulate GET /todos/:id
    // getTodoById(id: number): Todo {
    //   return this.todos
    //     .filter(todo => todo.id === id)
    //     .pop();
    // }
  
    // // Toggle todo complete
    // toggleTodoComplete(todo: Todo){
    //   let updatedTodo = this.updateTodoById(todo.id, {
    //     complete: !todo.complete
    //   });
    //   return updatedTodo;
    // }

    // Simulate POST /todos
  addTodo(todo: Todo): Observable<Todo> {
    return this.api.createTodo(todo);
  }

  // Simulate DELETE /todos/:id
  deleteTodoById(todoId: number): Observable<Todo> {
    return this.api.deleteTodoById(todoId);
  }

  // Simulate PUT /todos/:id
  updateTodo(todo: Todo): Observable<Todo> {
    return this.api.updateTodo(todo);
  }

  // Simulate GET /todos
  getAllTodos(): Observable<Todo[]> {
    return this.api.getAllTodos();
  }

  // Simulate GET /todos/:id
  getTodoById(todoId: number): Observable<Todo> {
    return this.api.getTodoById(todoId);
  }

  // Toggle complete
  toggleTodoComplete(todo: Todo) {
    todo.complete = !todo.complete;
    return this.api.updateTodo(todo);
  }


}

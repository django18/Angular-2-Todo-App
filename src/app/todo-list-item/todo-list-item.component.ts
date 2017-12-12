import { Component, OnInit,EventEmitter,Output,Input } from '@angular/core';
import { Todo } from '../shared/todo';

@Component({
  selector: 'app-todo-list-item',
  templateUrl: './todo-list-item.component.html',
  styleUrls: ['./todo-list-item.component.css']
})
export class TodoListItemComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() todo: Todo;
  
    @Output()
    remove: EventEmitter<Todo> = new EventEmitter();
  
    @Output()
    toggleComplete: EventEmitter<Todo> = new EventEmitter();
  
  
    toggleTodoComplete(todo: Todo) {
      this.toggleComplete.emit(todo);
    }
  
    removeTodo(todo: Todo) {
      this.remove.emit(todo);
    }

}

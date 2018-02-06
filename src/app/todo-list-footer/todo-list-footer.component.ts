import { Component, OnInit,Input } from '@angular/core';
import { Todo } from '../shared/todo';

@Component({
  selector: 'app-todo-list-footer',
  templateUrl: './todo-list-footer.component.html',
  styleUrls: ['./todo-list-footer.component.css']
})
export class TodoListFooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input()
  todos: Todo[];


}

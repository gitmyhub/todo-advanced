import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  @Input()
  todos: Todo[];

  @Output()
  toggleComplete: EventEmitter<Todo> = new EventEmitter();


  constructor() { }

  ngOnInit() {
  }

  onToggleTodoComplete(todo: Todo) {
    this.toggleComplete.emit(todo);
  }

}

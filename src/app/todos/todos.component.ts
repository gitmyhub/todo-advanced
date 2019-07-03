import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../todo-data.service';
import { Todo } from '../todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos: Todo[] = [];

  constructor(private todoDataService: TodoDataService) { }

  ngOnInit() {
    this.getAllTodos();
  }

  onAddTodo(todo) {

    // API call
    this.todoDataService
        .addTodo(todo)
        .subscribe(
          (newTodo) => {

          }
        );

  }

  getAllTodos() {
    // API call
    this.todoDataService.getAllTodos()
    .subscribe((todos) => {
        this.todos = todos;
    });
  }

}

import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  constructor(private api: ApiService) { }

  ngOnInit() {
  }

  onAddTodo(todo) {
    // API call
    this.api.createTodo(todo).subscribe((newTodo) => {
      // do something here
    });


  }

}

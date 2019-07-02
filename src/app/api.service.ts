import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Todo } from './todo';
import { SessionService } from './session.service';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient,
              private session: SessionService) { }

  public signIn(username: string, password: string): Observable<any> {
    return this.http.post('http://localhost:3000/sign-in', {
      username,
      password
    });
  }

  public createTodo(todo: Todo) {
    const headers = this.getRequestHeaders();
    return this.http.post('http://localhost:3000/todos', todo, { headers });
  }

  public getRequestHeaders() {
    const headers = new HttpHeaders({
      Authorization: 'Bearer ' + this.session.accessToken
    });
    return headers;
  }
}

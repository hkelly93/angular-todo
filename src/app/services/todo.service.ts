import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from '../components/todo-list/types';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  constructor(private http: HttpClient) {}

  getTodos() {
    return this.http.get<Array<Todo>>(
      'https://jsonplaceholder.typicode.com/todos'
    );
  }
}

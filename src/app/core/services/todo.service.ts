import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from '../../types';
import { Subject, Observable, BehaviorSubject } from 'rxjs';

type TodoList = Array<Todo>;

const createObservable = (subject: Subject<TodoList>) =>
  new Observable((fn) => subject.subscribe(fn));

const BASE_URL = 'https://jsonplaceholder.typicode.com';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private _todos = new BehaviorSubject([]);

  constructor(private http: HttpClient) {
    // Get the todos when the service is constructed.
    this.loadTodos();
  }

  loadTodos() {
    this.http
      .get<TodoList>(`${BASE_URL}/todos`)
      .subscribe((todos) => this._todos.next(todos));
  }

  get todos() {
    return createObservable(this._todos);
  }

  /**
   * Completes a todo by removing it from the `Array`.
   *
   * @param todo - The todo thats going to be removed.
   */
  completeTodo(todo: Todo) {
    this.http.delete(`${BASE_URL}/todos/${todo.id}`).subscribe(() => {
      const updatedTodos = this._todos.getValue().filter((t) => t !== todo);
      this._todos.next(updatedTodos);
    });
  }
}

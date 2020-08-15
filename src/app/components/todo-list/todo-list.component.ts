import { Component, OnInit } from '@angular/core';
import { Todo } from './types';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent {
  constructor(private todoService: TodoService) {}

  get todos() {
    return this.todoService.todos;
  }

  /**
   * Completes a todo.
   */
  complete(todo: Todo) {
    this.todoService.completeTodo(todo);
  }
}

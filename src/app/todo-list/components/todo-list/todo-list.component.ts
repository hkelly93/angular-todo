import { Component } from '@angular/core';
import { Todo } from '../../../types';
import { TodoService } from '../../../core/services/todo.service';

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
  complete = (todo: Todo) => {
    this.todoService.completeTodo(todo);
  };

  trackTodoBy(index: number, todo: Todo) {
    return todo.id;
  }
}

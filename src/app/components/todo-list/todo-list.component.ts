import { Component, OnInit } from '@angular/core';
import { Todo } from './types';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {
  todos: Array<Todo> = [];

  constructor(private todoService: TodoService) {}

  /**
   * Init the component and subscribe to the todos from the todo service.
   */
  ngOnInit(): void {
    this.todoService.getTodos().subscribe((todos) => {
      // Make sure that the todos are sorted.
      const sortedTodos = [...todos].sort(
        (todo1, todo2) => todo1.id - todo2.id
      );

      this.todos = sortedTodos;
    });
  }

  /**
   * Completes a todo.
   */
  complete(todo: Todo) {
    this.todos = this.todos.filter((t) => todo !== todo);
  }
}

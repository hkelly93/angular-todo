import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { Todo } from '../../../types';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  todoCount = 0;

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.getTodoCount();
  }

  getTodoCount() {
    return this.todoService.todos.subscribe((todos: Array<Todo>) => {
      this.todoCount = todos.length;
    });
  }
}

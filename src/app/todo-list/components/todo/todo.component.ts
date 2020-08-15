import { Component, Input } from '@angular/core';
import { Todo } from '../../../types';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent {
  @Input() todo: Todo;

  @Input() complete: (todo: Todo) => void;

  constructor() {}
}

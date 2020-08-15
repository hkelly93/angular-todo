import { NgModule } from '@angular/core';
import { CommonModule as AngularCommon } from '@angular/common';

import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoComponent } from './components/todo/todo.component';
import { CommonModule } from '../common/common.module';

@NgModule({
  declarations: [TodoListComponent, TodoComponent],
  imports: [AngularCommon, CommonModule],
  exports: [TodoListComponent],
})
export class TodoListModule {}

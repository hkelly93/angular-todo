import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoListModule } from './todo-list/todo-list.module';
import { HeaderComponent } from './core/components/header/header.component';
import { AlertComponent } from './common/components/alert/alert.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, AlertComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, TodoListModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

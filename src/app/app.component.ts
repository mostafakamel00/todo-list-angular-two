import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  todosArr: string[] = [];
  todo: string = '';
  title = 'todo-list';
  constructor() {}
  ngOnInit(): void {
    this.getTodo();
  }
  addTodo() {
    if (this.todo != '') {
      this.todosArr.push(this.todo);
      this.todo = '';
    }
    localStorage.setItem('token', JSON.stringify(this.todosArr));
  }
  getTodo() {
    this.todosArr = JSON.parse(localStorage.getItem('token') || '');
  }
  deleteTodo(i: number) {
    this.todosArr.splice(i, 1);
    localStorage.setItem('token', JSON.stringify(this.todosArr));
  }
}

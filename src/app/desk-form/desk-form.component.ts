import { Component, OnInit } from '@angular/core';
import { DeskService, Todo } from '../shared/desk.service';

@Component({
  selector: 'app-desk-form',
  templateUrl: './desk-form.component.html',
  styleUrls: ['./desk-form.component.css']
})
export class DeskFormComponent implements OnInit {

  title: string = '';

  constructor(public deskService: DeskService) { }

  ngOnInit(): void {
  }

  public addTodo()
  {
    if (this.title.split(' ').join('') == '') {
      alert('Fill in field');
      this.title = '';
      return;
    }

    let curId: number;
    if (this.deskService.todoList.length == 0)
      curId = 1;
    else
      curId = this.deskService.todoList[this.deskService.todoList.length-1].id + 1;

    const todo: Todo = {
      id: curId,
      title: this.title,
      completed: false,
      data: new Date()
    } 

    this.deskService.AddTodo(todo);
    this.title = '';
  }
}

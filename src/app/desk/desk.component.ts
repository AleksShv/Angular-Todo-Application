import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { DeskService } from '../shared/desk.service';

@Component({
  selector: 'app-desk',
  templateUrl: './desk.component.html',
  styleUrls: ['./desk.component.css']
})
export class DeskComponent implements OnInit {
  searchingString: string = '';

  constructor(public deskService: DeskService, private cookie: CookieService) { }

  ngOnInit(): void { 
  }

  public onChange(id: number)
  {
    this.deskService.onToggle(id);
  }

  public removeItem(id: number)
  {
    this.deskService.removeTodo(id);
  }
}

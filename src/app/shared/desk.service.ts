import { Injectable } from "@angular/core";
import { CookieService } from "ngx-cookie-service";

export interface Todo{
    id: number;
    title: string;
    completed: boolean;
    data?: any;
}

@Injectable({providedIn: 'root'})
export class DeskService{
    public todoList: Todo[] = [];
    
    constructor(private cookie: CookieService) {    
        this.todoList = JSON.parse(cookie.get('todoList'));
    }

    public onToggle(id: number){
        const index = this.todoList.findIndex(i => i.id === id);
        this.todoList[index].completed = !this.todoList[index].completed
        this.cookie.set('todoList', JSON.stringify(this.todoList));
    }

    public removeTodo(id: number)
    {
        this.todoList = this.todoList.filter(i => i.id !== id);
        this.cookie.set('todoList', JSON.stringify(this.todoList));
    }

    public AddTodo(todo: Todo)
    {
        this.todoList.push(todo);
        this.cookie.set('todoList', JSON.stringify(this.todoList));
    }

    public getCompletedTodoCount(): number
    {
        return this.todoList.filter(i => i.completed === true).length; 
    }

    public deleteCompletedTodo()
    {
        this.todoList = this.todoList.filter(i => i.completed === false);
        this.cookie.set('todoList', JSON.stringify(this.todoList));
    }
}
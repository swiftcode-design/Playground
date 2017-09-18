import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
    selector: 'sandbox',
    template: `
         <h1>Hey</h1>
         <form (submit)="onSubmit()">
            <div class="form-group">
                <label>Name</label>
                <input type="text" class="form-control" [(ngModel)]="user.name" name="name">
            </div>
            <div class="form-group">
                <label>Email</label>
                <input type="text" class="form-control" [(ngModel)]="user.email" name="email">
            </div>
            <div class="form-group">
                <label>Phone</label>
                <input type="text" class="form-control" [(ngModel)]="user.phone" name="phone">
            </div>
            <input type="submit" class="btn btn-success" value="Submit" >
         </form>
         <div *ngFor="let user of users">
            <ul class="list-group">
                <li class="list-group-item" > Name: {{user.name}}</li>
                <li class="list-group-item" > Email: {{user.phone}}</li>
                <li class="list-group-item" > Phone: {{user.email}}</li>
            </ul>
            <br>
            <button class="btn btn-danger btn-sm" (click)="onDeleteClick(user.id)"></button>
            <br>
            <br>
      </div>
    `
})

export class SandboxComponent{
    users:any[];
    user = {
        name: '',
        email: '',
        phone: ''
    }

    constructor(public dataService:DataService)
    {
        // this.users = this.dataService.getUsers();
        this.dataService.getUsers().subscribe( users => {
            console.log(users);
            this.users = users;
        })
    }

    onSubmit(){
        this.dataService.addUser(this.user).subscribe(user => {
            console.log(user);
            this.users.unshift(user);
        })
    }
    onDeleteClick(id){
       this.dataService.deleteUser(id).subscribe(res => {
           for(let i = 0; i< this.users.length; i ++ ) {
               if(this.users[i].id == id){
                   this.users.splice(i,1);
               }
           }
       })
    }
}
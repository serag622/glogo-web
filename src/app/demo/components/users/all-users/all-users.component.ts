import { Component, OnDestroy, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Table } from 'primeng/table';
import { User } from 'src/app/demo/api/user';
import { UserService } from 'src/app/demo/service/user.service';
import { Subject, takeUntil } from "rxjs";

@Component({
    templateUrl: './all-users.component.html',
    providers: [MessageService]
})
export class AllUsersComponent implements OnInit , OnDestroy {

    deleteUserDialog: boolean = false;

    AllUsers: User[] = [];

    User !: User ;

    selectedUsers: any[] = [];


    cols: string[] = [
        '#',
        'image',
        'name',
        'phone' ,
        'email',
        'gendar',
        'role' ,
        'status',
        'action'
    ];

 
    rowsPerPageOptions = [5, 10, 20 , 50];

    isToggled : boolean = false;

    page : number = 0;
    size : number = 20;
    $subject = new Subject;


    constructor( private messageService: MessageService , private userService : UserService) { }

    ngOnInit() {
      this.getAllUsers()
    }

    
  ngOnDestroy(): void {
    this.$subject.next(1);
    this.$subject.complete();
  }

    getAllUsers(){
     this.userService.getAllUser(this.page , this.size).pipe(takeUntil(this.$subject.asObservable())).subscribe((res :  any)=>{
    console.log(res)
     },(error)=>{
        console.log(error)
     })
    }
  
}

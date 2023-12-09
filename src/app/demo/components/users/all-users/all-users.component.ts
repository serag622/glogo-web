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
export class AllUsersComponent implements OnInit, OnDestroy {

    deleteUserDialog: boolean = false;

    AllUsers: User[] = [];

    User !: User | null

    selectedUsers: any[] = [];


    cols: string[] = [
        '#',
        'name',
        'phone',
        'email',
        'gendar',
        'role',
        'status',
        'action'
    ];


    rowsPerPageOptions = [10, 20, 50];

    isToggled: boolean = false;

    page: number = 0;
    size: number = 20;
    totalElements: number = 0
    $subject = new Subject;


    constructor(private messageService: MessageService, private userService: UserService) { }

    ngOnInit() {
        this.getAllUsers()
    }


    ngOnDestroy(): void {
        this.$subject.next(1);
        this.$subject.complete();
    }

    getAllUsers() {
        this.userService.getAllUser(this.page, this.size).pipe(takeUntil(this.$subject.asObservable())).subscribe((res: any) => {
            this.AllUsers = res?.content?.data
            this.totalElements = res.totalElements
        }, (error) => {
            console.log(error)
        })
    }

    onPageChange($event) {
        this.page = $event?.page;
        this.size = $event?.rows;
        this.getAllUsers()
    }

    deleteUser(user) {
        this.deleteUserDialog = true;
        this.User = { ...user };
    }

    confirmDelete() {

       this.userService.deleteUser(this.User.id).pipe(takeUntil(this.$subject.asObservable())).subscribe((res : any)=>{
        this.deleteUserDialog = false;
        this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'User Deleted', life: 3000 });
        this.User = null;
        this.getAllUsers()
       },(error)=>{
        this.deleteUserDialog = false;
       })
        
    }


}

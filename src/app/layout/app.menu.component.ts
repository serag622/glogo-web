import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { LayoutService } from './service/app.layout.service';

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html'
})
export class AppMenuComponent implements OnInit {

    model: any[] = [];

    constructor(public layoutService: LayoutService) { }

    ngOnInit() {
        this.model = [
            {
                items: [
                    { label: 'Dashboard', icon: 'pi pi-fw pi-home', routerLink: ['/'] }
                ]
            },
            {
                label: '',
                icon: 'pi pi-fw pi-briefcase',
                items: [
                    {
                        label: 'Admin Management',
                        icon: 'pi pi-fw pi-shield',
                        routerLink: ['/admin']
                    },      
                ]
            },
            {
                label: '',
                icon: '',
                items: [
                    {
                        label: 'User Management',
                        icon: 'pi pi-fw pi-users',
                        items :[
                            {label : 'Users' , routerLink : ['/users/all-users']} , 
                            {label : 'Exclusive Requests' ,  routerLink : ['/users/user-request']}
                        ]
                    },
                    
                ]
            },
            {
                label: '',
                icon: '',
                items: [
                    {
                        label: 'Trips',
                        icon: 'pi pi-fw pi-briefcase',
                        routerLink: ['/trips/all-Trips']
                    },
                    
                ]
            },
            {
                label: '',
                icon: '',
                items: [
                    {
                        label: 'Reviews & Rates',
                        icon: 'pi pi-fw pi-star',
                        routerLink: ['']
                    },
                    
                ]
            },
            {
                label: '',
                icon: '',
                items: [
                    {
                        label: 'Payment',
                        icon: 'pi pi-fw pi-dollar',
                        routerLink: ['']
                    },
                    
                ]
            },
            {
                label: '',
                icon: '',
                items: [
                    {
                        label: 'App Setting',
                        icon: 'pi pi-fw pi-mobile',
                        routerLink: ['']
                    },
                    
                ]
            },
        ];
    }
}

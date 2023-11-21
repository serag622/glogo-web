import { Component, ElementRef, ViewChild } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { LayoutService } from "./service/app.layout.service";
import { Router } from '@angular/router';

@Component({
    selector: 'app-topbar',
    templateUrl: './app.topbar.component.html' ,
    styleUrls: ["./app.topbar.components.scss"],
})

export class AppTopBarComponent {

    items!: MenuItem[];

    @ViewChild('menubutton') menuButton!: ElementRef;

    @ViewChild('topbarmenubutton') topbarMenuButton!: ElementRef;

    @ViewChild('topbarmenu') menu!: ElementRef;

    constructor(public layoutService: LayoutService , private router : Router) { }

    menuItems : MenuItem[] = [ {
    
            label: 'Logout',
            icon: 'pi pi-sign-out',
            command: () => {
                this.logout();
            }
        
        
    }
    ]


    notiItems : MenuItem[] = [
        {label : 'messsage' , icon : 'pi pi-comment'} ,
        {label : 'messsage' , icon : 'pi pi-comment'},
        {label : 'messsage' , icon : 'pi pi-comment'},
        {label : 'messsage' , icon : 'pi pi-comment'},
        {label : 'messsage' , icon : 'pi pi-comment'},
        {label : 'messsage' , icon : 'pi pi-comment'},
    ]

    logout() {
       localStorage.removeItem('token')
       this.router.navigate(['auth/login'])
    }
}

import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Table } from 'primeng/table';

@Component({
    templateUrl: './user-request.component.html',
    providers: [MessageService]
})
export class UserRequestComponent implements OnInit {

    productDialog: boolean = false;

    deleteProductDialog: boolean = false;

    deleteProductsDialog: boolean = false;

    products: any[] = [];

    product: any = {};

    selectedProducts: any[] = [];


    cols: any[] = [];


    rowsPerPageOptions = [5, 10, 20];

    isToggled : boolean = false

    constructor( private messageService: MessageService) { }

    ngOnInit() {

      

    }


}

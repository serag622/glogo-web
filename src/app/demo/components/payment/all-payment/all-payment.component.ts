import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Table } from 'primeng/table';

@Component({
    templateUrl: './all-payment.component.html',
    providers: [MessageService]
})
export class AllPaymentComponent implements OnInit {

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

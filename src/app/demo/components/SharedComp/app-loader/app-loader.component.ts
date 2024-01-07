import { Component, OnInit } from '@angular/core';
import { NgxUiLoaderModule } from "ngx-ui-loader";

@Component({
    selector : 'app-loader',
    templateUrl: './app-loader.component.html',
    standalone : true ,
    imports : [NgxUiLoaderModule]
})
export class AppLoaderComponent implements OnInit {

    constructor() { }

    ngOnInit() {

      

    }


}

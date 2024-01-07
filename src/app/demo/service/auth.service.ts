import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
      providedIn: 'root'
    }
)
export class AuthService {

    constructor(private http: HttpClient) { }

    baseUrl = environment.baseUrl

    Login(form : any){
     return this.http.post(`${this.baseUrl}/auth/api/v1/login`,form)
    }

}

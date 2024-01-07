import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { UserFilters } from '../api/user';

@Injectable(
    {
        providedIn: 'root'
    }
)
export class UserService {

    constructor(private http: HttpClient) { }

    baseUrl = environment.baseUrl

    getAllUser(page, size , filter : UserFilters) {
        let params: HttpParams = new HttpParams()
            .append('page', page)
            .append('size', size)
        return this.http.post(`${this.baseUrl}/user/api/v1/filter`, {} ,{ params })
    }


    deleteUser(id : string){
        return this.http.delete(`${this.baseUrl}/user/api/v1/${id}`)
    }

}

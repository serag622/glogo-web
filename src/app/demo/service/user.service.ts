import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable(
    {
        providedIn: 'root'
    }
)
export class UserService {

    constructor(private http: HttpClient) { }

    baseUrl = environment.baseUrl

    getAllUser(page, size) {
        let params: HttpParams = new HttpParams()
            .append('page', page)
            .append('size', size)
        return this.http.get(`${this.baseUrl}/user/api/v1/paginated`, { params })
    }


    deleteUser(id : string){
        return this.http.delete(`${this.baseUrl}/user/api/v1/${id}`)
    }

}

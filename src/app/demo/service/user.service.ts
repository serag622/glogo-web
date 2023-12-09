import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable(
    {
        providedIn: 'root'
    }
)
export class UserService {

    constructor(private http: HttpClient) { }


    getAllUser(page, size) {
        let params: HttpParams = new HttpParams()
            .append('page', page)
            .append('size', size)
        return this.http.get(`http://144.91.116.177:8804/user/api/v1/paginated`, { params })
    }


    deleteUser(id : string){
        return this.http.delete(`http://144.91.116.177:8804/user/api/v1/${id}`)
    }

}

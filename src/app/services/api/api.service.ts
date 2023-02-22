import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiRoutes } from './api.route';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getAllData():Observable<any>{
    return this.http.post<any>(ApiRoutes.GET_ALL_Data, {});
  }

  getDataByParam(req: any): Observable<any> {
    return this.http.post<any>(ApiRoutes.GET_Data_BY_PARAM, req);
  }
}


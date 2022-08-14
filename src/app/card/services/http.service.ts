import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import {Game, APIResponse} from '../models/batatinha.model';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  
  private endpoint = `${environment.url}?${environment.accessToken}`;

  constructor(private http:HttpClient) { };
  
  getAllGames():Observable<APIResponse<Game>> {
    return this.http.get<APIResponse<Game>>(this.endpoint) 
  };
}
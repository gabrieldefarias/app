import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  server: string = "http://10.91.43.25/inventoryapp/";
  constructor(private http: HttpClient) { }

  conectApi(dados: any, nomeApi: string){
    const httpOptions = {
      headers: new HttpHeaders({'content-type': 'application/json'})
    }
    let url = this.server + nomeApi;
    return this.http.post(url, JSON.stringify(dados), httpOptions).map(ret => ret);
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MarvelService {

  url = environment.urlMarvelApi
  constructor(private http: HttpClient) { }

  getMarvel(){
    const query = {
      orderBy: "name",
      ts: "3",
      apikey: "90364cada3d584c7581cb152668878db",
      hash: "2b23700df09b66acb43c48577503494f"
    }
    return this.http.get(`${this.url}:443/v1/public/characters`, {params: query});
  }
}

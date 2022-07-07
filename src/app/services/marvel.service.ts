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
      ts: "4",
      apikey: "9eaf3e8ce26c5926b690c5259ccc1d6e",
      hash: "e626b89837f42ee3c5b3db7df8549995"
    }
    return this.http.get(`${this.url}:443/v1/public/characters`, {params: query});
  }
}

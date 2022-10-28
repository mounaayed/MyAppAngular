import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OffreService {

  constructor(private http: HttpClient) {
  }

  getall() {
    return this.http.get(environment.url + 'offre/listoffre');
  }

  delete(id) {
    return this.http.delete(environment.url + 'offre/delete/' + id);
  }
}

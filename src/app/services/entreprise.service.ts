import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EntrepriseService {

  constructor(private http: HttpClient) { }
  getall() {
    return this.http.get(environment.url + 'entreprise/listentreprise');
  }

  delete(id) {
    return this.http.delete(environment.url + 'entreprise/delete/' + id);
  }

  approuverr(data, id) {
    return this.http.put(environment.url + 'entreprise/update/' + id, data);
  }

  modif(data, id) {
    return this.http.put(environment.url + 'entreprise/update/' + id, data);
  }

  getbyid(id) {
    return this.http.get(environment.url + 'entreprise/getbyid/' + id);
  }
}


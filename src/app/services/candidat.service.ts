import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CandidatService {

  constructor(private http: HttpClient) {
  }

  getall() {
    return this.http.get(environment.url + 'candidat/listcandidat');
  }

  delete(id) {
    return this.http.delete(environment.url + 'candidat/delete/' + id);
  }

  approuver(data, id) {
    return this.http.put(environment.url + 'candidat/update/' + id, data);
  }

  modif(data, id) {
    return this.http.put(environment.url + 'candidat/update/' + id, data);
  }

  getbyid(id) {
    return this.http.get(environment.url + 'candidat/getbyid/' + id);
  }
}

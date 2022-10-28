import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DomaineService {

  constructor(private http: HttpClient) {
  }

  getall() {
    return this.http.get(environment.url + 'domaine/listdomaine');
  }

  getalls() {
    return this.http.get(environment.url + 'specialite/listspecialite');
  }

  getallc() {
    return this.http.get(environment.url + 'competence/listcompetence');
  }

  delete(id) {
    return this.http.delete(environment.url + 'domaine/delete/' + id);
  }

  add(data) {
    return this.http.post(environment.url + 'domaine/add/', data);
  }

  addspecialite1(data) {
    return this.http.post(environment.url + 'specialite/add/', data);
  }
  addcompetence1(data) {
    return this.http.post(environment.url + 'competence/add/', data);
  }
  push(specilite, iddomaine) {
    return this.http.put(environment.url + 'domaine/push/' + iddomaine, specilite);
  }
  pushspecialite(data, idspecialite) {
    return this.http.put(environment.url + 'specialite/push/' + idspecialite, data);
  }
  addc(idspecilite, data) {
    return this.http.put(environment.url + 'specialite/push/' + idspecilite, data);
  }

  modifd(data, id) {
    return this.http.put(environment.url + 'domaine/update/' + id, data);
  }

  modifs(data, id) {
    return this.http.put(environment.url + 'specialite/update/' + id, data);
  }

  modifc(data, id) {
    return this.http.put(environment.url + 'competence/update/' + id, data);
  }

  getonespecialite(id) {
    return this.http.get(environment.url + 'specialite/getbyid/' + id);
  }

  deletespecialitee(id) {
    return this.http.delete(environment.url + 'specialite/delete/' + id);
  }

  getonecompetence(id) {
    return this.http.get(environment.url + 'competence/getbyid/' + id);
  }

  deletecompetence(id) {
    return this.http.delete(environment.url + 'competence/delete/' + id);
  }

  destroyspecilite(idspecialite, iddomaine) {
    return this.http.put(environment.url + 'domaine/pull/' + iddomaine, idspecialite);

  }
  destroycompetence(idspecialite, idcompetence) {
    return this.http.put(environment.url + 'specialite/pull/' + idspecialite, idcompetence);

  }
  getonedomaine(id) {
    return this.http.get(environment.url + 'domaine/getbyid/' + id);

  }
}

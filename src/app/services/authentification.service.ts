import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  constructor(private http: HttpClient) {
  }

  login(data) {
    return this.http.post('http://localhost:7000/user/authentification', data);
  }
}

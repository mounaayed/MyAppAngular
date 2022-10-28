import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor(private http: HttpClient) {
  }

  sendmail(data) {
    return this.http.post(environment.url + 'mail/send', data);
  }
}

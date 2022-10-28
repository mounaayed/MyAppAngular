import {Component, OnInit} from '@angular/core';
import {CandidatService} from '../services/candidat.service';
import Swal from 'sweetalert2';
import {Condidat} from '../model/condidat';
import {EmailService} from '../services/email.service';

@Component({
  selector: 'app-candidat',
  templateUrl: './candidat.component.html',
  styleUrls: ['./candidat.component.css']
})
export class CandidatComponent implements OnInit {
  listcandidat;

  condidat = new Condidat();
  searchText;
  p = 1;

  constructor(private  condidatservice: CandidatService, private mailservice: EmailService) {
  }

  ngOnInit(): void {
    this.getallcondidat();
  }

  getallcondidat() {
    this.condidatservice.getall().subscribe(res => {
      console.log(res);
      this.listcandidat = res;
    });
  }

  deletecandidat(id) {
    Swal.fire({
      title: 'Are you sure?',
      text:   this.condidat.nom + this.condidat.prenom,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.value) {
        this.condidatservice.delete(id).subscribe(res => {
          console.log(res);
          this.getallcondidat();
        });
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        );
      }
    });

  }

  valider(id) {

    this.condidatservice.approuver({valide: true}, id).subscribe(res => {
      console.log('valider', res);
      this.sendmail();
      this.getallcondidat();
    });
  }

  sendmail() {
    const data = {
      from: 'ayedmounalfinfo@gmail.com',
      to: this.condidat.email,
      subject: 'mail de validation',
      text: 'mail de validation',
    };
    console.log(data);
    this.mailservice.sendmail(data).subscribe(result => {
      console.log(result);
    });
  }

  recuper(nom, prenom, email, username, numtel, avatar, sexe, age, adresse, cin, civilite, codepostale) {
    this.condidat.nom = nom;
    this.condidat.prenom = prenom;
    this.condidat.email = email;
    this.condidat.username = username;
    this.condidat.numtel = numtel;
    this.condidat.avatar = avatar;
    this.condidat.sexe = sexe;
    this.condidat.age = age;
    this.condidat.adresse = adresse;
    this.condidat.cin = cin;
    this.condidat.civilite = civilite;
    this.condidat.codepostale = codepostale;
  }
}

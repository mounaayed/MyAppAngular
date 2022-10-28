import { Component, OnInit } from '@angular/core';
import {CandidatService} from '../services/candidat.service';
import {EntrepriseService} from '../services/entreprise.service';
import Swal from 'sweetalert2';
import {Entreprise} from '../model/entreprise';
import {EmailService} from '../services/email.service';

@Component({
  selector: 'app-entreprise',
  templateUrl: './entreprise.component.html',
  styleUrls: ['./entreprise.component.css']
})
export class EntrepriseComponent implements OnInit {
  listeentreprise;
  entreprise = new Entreprise();
  searchText;
  p = 1;

  constructor(private entrepriseservice: EntrepriseService, private mailservice: EmailService) { }


  ngOnInit(): void {
    this.getallentreprise();
  }

  getallentreprise() {
    this.entrepriseservice.getall().subscribe(res => {
      console.log(res);
      this.listeentreprise = res;
    });
  }

  deleteentreprise(id) {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You won\'t be able to revert this!' + this.entreprise.NomEntreprise,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.value) {
        this.entrepriseservice.delete(id).subscribe(res => {
          console.log(res);
          this.getallentreprise();
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

    this.entrepriseservice.approuverr({valide: true}, id).subscribe(res => {
      console.log('valider', res);
      this.sendmail();
      this.getallentreprise();
    });
  }
  sendmail() {
    const data = {
      from: 'ayedmounalfinfo@gmail.com',
      to: this.entreprise.email,
      subject: 'mail de validation',
      text: 'mail de validation',
    };
    console.log(data);
    this.mailservice.sendmail(data).subscribe(result => {
      console.log(result);
    });
  }
  recuper(NomEntreprise, email, avatar, description  , codepostale , anneefondation , localisation , secteuractivite) {
    this.entreprise.NomEntreprise = NomEntreprise;
    this.entreprise.email = email;
    this.entreprise.avatar = avatar ;
    this.entreprise.description = description   ;
    this.entreprise.codepostale = codepostale ;
    this.entreprise.anneefondation = anneefondation ;
    this.entreprise.localisation = localisation ;
    this.entreprise.secteuractivite = secteuractivite ;


  }
}

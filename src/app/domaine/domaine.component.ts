import {Component, OnDestroy, OnInit, TemplateRef} from '@angular/core';
import {EmailService} from '../services/email.service';
import {EntrepriseService} from '../services/entreprise.service';
import {Entreprise} from '../model/entreprise';
import {DomaineService} from '../services/domaine.service';
import Swal from 'sweetalert2';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {BsModalRef, BsModalService} from 'ngx-bootstrap/modal';
import {Domaine} from '../model/domaine';
import {NavigationEnd, Router} from '@angular/router';
import {window} from 'rxjs/internal/operators';
import {Specilite} from '../model/specilite';
import {Competence} from '../model/competence';
import {connectableObservableDescriptor} from 'rxjs/internal/observable/ConnectableObservable';

@Component({
  selector: 'app-domaine',
  templateUrl: './domaine.component.html',
  styleUrls: ['./domaine.component.css']
})
export class DomaineComponent implements OnInit {
  modalRef: BsModalRef;
  formdomaine: FormGroup;
  formspecialite: FormGroup;
  formcompetence: FormGroup;
  submitted = false;
  listedomaine;
  listespecialite;
  listecompetence;
  speialite;
  competenc;
  listspecialitebydomaine = [];
  searchText;
  p = 1;
  getsepecialite = false;
  getcomptence = false;
  domaine = new Domaine();
  specilite1 = new Specilite();
  competence = new Competence()
  listcoptencebyspecialite = [];

  constructor(private formbuider: FormBuilder, private domainesrvice: DomaineService, private modalService: BsModalService) {


  }


  ngOnInit(): void {
    this.getallcopetence();
    this.getallspecialite();
    this.getalldomaine();
    this.formdomaine = this.formbuider.group({

      nomdomaine: ['', [Validators.required]],

    });
    this.formspecialite = this.formbuider.group({

      specialite: ['', [Validators.required]],

    });
    this.formcompetence = this.formbuider.group({

      competence: ['', [Validators.required]],

    });
  }

  rcuperspecialite(id, nomspecialite,competence) {
    this.getcomptence=! this.getcomptence;
    this.specilite1.id = id;
    this.specilite1.nomspecialite = nomspecialite;
    this.specilite1.competence = competence;
  }

  getallcopetence() {
    this.domainesrvice.getallc().subscribe(result => {
      console.log(result);
      this.listecompetence = result;
    });
  }

  recuper(id, nomdomaine, specialite) {
    this.getsepecialite = !this.getsepecialite;
    this.domaine.id = id;
    this.domaine.nomdomaine = nomdomaine;
    this.domaine.specialite = specialite;
    console.log(specialite);
  }

  getonespecialite(id) {
    this.domainesrvice.getonespecialite(id).subscribe(res => {
      console.log(res);
      this.speialite = res;
    });
  }

  // affiche(listspecialte) {
  //   console.log('listspecialte by dommaine', listspecialte);
  //   this.getsepecialite = !this.getsepecialite;
  //
  //   for (const s of listspecialte) {
  //     this.domainesrvice.getonespecialite(s).subscribe(res => {
  //       this.speialite = res;
  //       this.listspecialitebydomaine.push(res);
  //
  //     });
  //
  //   }
  //   this.listspecialitebydomaine = [];
  // }

  // affichecomptence(listecompetence) {
  //   this.getcomptence = !this.getcomptence;
  //   console.log('listecompetence by specialite', listecompetence);
  //   for (const s of listecompetence) {
  //     this.domainesrvice.getonecompetence(s).subscribe(res => {
  //       this.competenc = res;
  //       this.listcoptencebyspecialite.push(res);
  //       console.log(this.listcoptencebyspecialite);
  //
  //     });
  //     this.listcoptencebyspecialite = [];
  //   }
  // }

  add() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.formdomaine.invalid) {
      return;
    }
    this.domainesrvice.add(this.formdomaine.value).subscribe((res: any) => {
      console.log(res);
      this.getalldomaine();
    });
    this.modalRef.hide();
  }

  addspecialite() {
    this.submitted = true;
    console.log(this.formspecialite.value);
    console.log(this.domaine.id);


    // stop here if form is invalid
    if (this.formspecialite.invalid) {
      return;
    }

    this.domainesrvice.push(this.formspecialite.value, this.domaine.id).subscribe((res: any) => {
      console.log(res);


      this.getonedomaine(this.domaine.id);
      console.log('data', this.domaine.specialite);
    });
    this.modalRef.hide();
  }

  getonedomaine(id) {
    this.domainesrvice.getonedomaine(id).subscribe((res: any) => {

      this.domaine.specialite = res.specialite;
      console.log('afeter update', this.domaine.specialite);
    });
  }
  getonespecialite1(id) {
    this.domainesrvice.getonespecialite(id).subscribe((res: any) => {

      this.specilite1.competence = res.competence;
      console.log('afeter update', this.specilite1.competence);
    });
  }
  addcomp() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.formcompetence.invalid) {
      return;
    }
    console.log(this.formcompetence.value);
    console.log(this.specilite1.id);
    this.domainesrvice.pushspecialite(this.formcompetence.value, this.specilite1.id).subscribe((res: any) => {
      console.log(res);
     this.getonespecialite1(this.specilite1.id);

    });
    this.modalRef.hide();
  }

  get f() {
    return this.formdomaine.controls;
  }

  get g() {
    return this.formspecialite.controls;
  }

  get h() {
    return this.formcompetence.controls;
  }


  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, {class: 'modal-sm'});
  }

  deletedomaine(id) {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You won\'t be able to revert this!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.value) {
        this.domainesrvice.delete(id).subscribe(res => {
          console.log(res);
          this.getalldomaine();
        });
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        );
      }
    });

  }

  deletespecialite(idspecialte) {
    console.log(idspecialte, this.domaine.id);
    Swal.fire({
      title: 'Are you sure?',
      text: 'You won\'t be able to revert this!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.value) {
        this.domainesrvice.destroyspecilite({specialite: idspecialte}, this.domaine.id).subscribe((res: any) => {
          console.log(res);

          this.getonedomaine(this.domaine.id);

        });
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        );
      }
    });

  }

  deletecompetence(idcompetence) {
    console.log(idcompetence, this.specilite1.id);
    Swal.fire({
      title: 'Are you sure?',
      text: 'You won\'t be able to revert this!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.value) {
        this.domainesrvice.destroycompetence(this.specilite1.id, {competence: idcompetence}).subscribe(res => {
          console.log(res);
          this.getonespecialite1(this.specilite1.id);
        });
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        );
      }
    });

  }


  getalldomaine() {
    this.domainesrvice.getall().subscribe(res => {
      console.log(res);
      this.listedomaine = res;
    });
  }

  getallspecialite() {
    this.domainesrvice.getalls().subscribe(res => {
      console.log(res);
      this.listespecialite = res;
    });
  }

  modifd() {
    this.submitted = true;
    if (this.formdomaine.invalid) {
      return;
    }
    this.domainesrvice.modifd(this.domaine.nomdomaine, this.formdomaine.value).subscribe(result => {
      console.log(result);
    });
    this.getalldomaine();
    this.modalRef.hide();
  }
}

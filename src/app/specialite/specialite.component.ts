import {Component, OnInit, TemplateRef} from '@angular/core';
import {DomaineService} from '../services/domaine.service';
import Swal from "sweetalert2";
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Domaine} from '../model/domaine';
import {BsModalRef, BsModalService} from 'ngx-bootstrap/modal';
import {Competence} from '../model/competence';
import {Specilite} from '../model/specilite';

@Component({
  selector: 'app-specialite',
  templateUrl: './specialite.component.html',
  styleUrls: ['./specialite.component.css']
})
export class SpecialiteComponent implements OnInit {
  listespecialite;
  formspecialite: FormGroup;
  modalRef: BsModalRef;
  submitted = false;

  specilite = new Specilite();
  constructor(private domainesrvice: DomaineService, private formbuider: FormBuilder, private modalService: BsModalService) { }

  ngOnInit(): void {
    this.getallspecialite();

    this.formspecialite = this.formbuider.group({

      nomspecialite: ['', [Validators.required]],

    });
  }

  getallspecialite() {
    this.domainesrvice.getalls().subscribe(res => {
      console.log(res);
      this.listespecialite = res;
    });
  }
  deletespecilite(id) {
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
        this.domainesrvice.deletespecialitee(id).subscribe(res => {
          console.log(res);
          this.getallspecialite();
        });
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        );
      }
    });

  }

  adds() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.formspecialite.invalid) {
      return;
    }
    this.domainesrvice.addspecialite1(this.formspecialite.value).subscribe((res: any) => {
      console.log(res);
      this.getallspecialite();
    });
    this.modalRef.hide();
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, {class: 'modal-sm'});
  }
  get g() {
    return this.formspecialite.controls;
  }
}

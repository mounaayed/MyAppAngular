import {Component, OnInit, TemplateRef} from '@angular/core';
import {DomaineService} from '../services/domaine.service';
import Swal from 'sweetalert2';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Domaine} from '../model/domaine';
import {BsModalRef, BsModalService} from 'ngx-bootstrap/modal';
import {Competence} from '../model/competence';

@Component({
  selector: 'app-competence',
  templateUrl: './competence.component.html',
  styleUrls: ['./competence.component.css']
})
export class CompetenceComponent implements OnInit {
  listecompetence;
  formcompetence: FormGroup;
  modalRef: BsModalRef;
  submitted = false;

  competence = new Competence();
  constructor(private domainesrvice: DomaineService, private formbuider: FormBuilder, private modalService: BsModalService) { }

  ngOnInit(): void {
    this.getallcompetence();

    this.formcompetence = this.formbuider.group({

      nomcompetence: ['', [Validators.required]],

    });
  }

  getallcompetence() {
    this.domainesrvice.getallc().subscribe(res => {
      console.log(res);
      this.listecompetence = res;
    });
  }
  deletecompetence(id) {
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
        this.domainesrvice.deletecompetence(id).subscribe(res => {
          console.log(res);
          this.getallcompetence();
        });
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        );
      }
    });

  }

  addc() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.formcompetence.invalid) {
      return;
    }
    this.domainesrvice.addcompetence1(this.formcompetence.value).subscribe((res: any) => {
      console.log(res);
      this.getallcompetence();
    });
    this.modalRef.hide();
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, {class: 'modal-sm'});
  }
  get g() {
    return this.formcompetence.controls;
  }
}

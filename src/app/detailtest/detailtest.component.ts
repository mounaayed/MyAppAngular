import {Component, OnInit, TemplateRef} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CandidatService} from '../services/candidat.service';
import {TestService} from '../services/test.service';

import {BsModalRef, BsModalService} from 'ngx-bootstrap/modal';
import {Observable} from 'rxjs';
import {FormControl} from '@angular/forms';
import {startWith, map} from 'rxjs/internal/operators';

@Component({
  selector: 'app-detailtest',
  templateUrl: './detailtest.component.html',
  styleUrls: ['./detailtest.component.css']
})
export class DetailtestComponent implements OnInit {
  id;
  test;
  isCollapsed = true;
  listquestion;
  enonce;
  proposition;
  list = [];
  affiche = false;
  listpropsition;
  listquetionbase;
  modalRef: BsModalRef;
  libelle: string;

  constructor(private activaterout: ActivatedRoute, private testservice: TestService, private modalService: BsModalService) {
    this.id = this.activaterout.params['_value']['id'];
  }

  ngOnInit(): void {
    this.getbyid(this.id);
    this.getallpropsition();
    this.getallquestion();


  }

  getallquestion() {
    this.testservice.getallquestion().subscribe(res => {
      this.listquetionbase = res;
      console.log('listquestionbase', res);

    })
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, {class: 'modal-sm'});
  }

  getallpropsition() {
    this.testservice.getallpropsition().subscribe(res => {
      console.log('listpropsition', res);
      this.listpropsition = res;

    })
  };

  getbyid(id) {
    this.testservice.getbyid(id).subscribe((res: any) => {
        console.log('test', res);
        this.test = res;
        this.listquestion = res.question;

        console.log('list question', this.listquestion);


        /* for (let i = 0; i < someArray.length ; i++) {
          let item = someArray[i];
        } */


      }
    );

  }

  ajoutqq() {
    this.testservice.addquestion({'proposition': this.proposition}).subscribe(res => {
      console.log(res);
    });
  }

  affichajoutprposition() {
    this.affiche = true;
  }

  recuper(propostion1) {
    console.log(propostion1)
    for (const i of propostion1) {
      this.testservice.getoneproposition(i).subscribe(res1 => {

        this.list.push(res1);
      })
    }
    console.log('list', this.list);
    this.list = []
  }

}

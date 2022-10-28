import { Component, OnInit } from '@angular/core';
import {OffreService} from '../services/offre.service';
import {Offre} from '../model/offre';
import {TestService} from '../services/test.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  listtest;


  constructor(private testservice: TestService) {
  }

  ngOnInit(): void {
    this.getalltest();
  }

  getalltest() {
    this.testservice.getall().subscribe(res => {
      console.log(res);
      this.listtest = res;

    });
  }

}

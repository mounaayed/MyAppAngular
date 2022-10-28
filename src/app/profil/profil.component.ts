import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CandidatService} from '../services/candidat.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {
  id;
  user;

  constructor(private activaterout: ActivatedRoute, private condidatservice: CandidatService) {
    this.id = this.activaterout.params['_value']['id'];
  }

  ngOnInit(): void {
  }

  getbyid(id) {
    this.condidatservice.getbyid(id).subscribe(res => {
      console.log(res);
      this.user = res;
    })
  }
}

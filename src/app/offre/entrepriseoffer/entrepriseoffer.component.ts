import {Component, Input, OnInit} from '@angular/core';
import {EntrepriseService} from '../../services/entreprise.service';

@Component({
  selector: 'app-entrepriseoffer',
  templateUrl: './entrepriseoffer.component.html',
  styleUrls: ['./entrepriseoffer.component.css']
})
export class EntrepriseofferComponent implements OnInit {
  entreprise;
  @Input() identreprise;

  constructor(private entrepriseservice: EntrepriseService) {
  }

  ngOnInit(): void {
    this.getbyid(this.identreprise);
  }

  getbyid(id) {
    this.entrepriseservice.getbyid(id).subscribe((res: any) => {
      console.log('enreprise', res);
      this.entreprise = res;
    });
  }
}

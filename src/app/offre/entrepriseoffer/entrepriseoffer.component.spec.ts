import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntrepriseofferComponent } from './entrepriseoffer.component';

describe('EntrepriseofferComponent', () => {
  let component: EntrepriseofferComponent;
  let fixture: ComponentFixture<EntrepriseofferComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntrepriseofferComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntrepriseofferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

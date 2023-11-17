import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionApprenantsComponent } from './gestion-apprenants.component';

describe('GestionApprenantsComponent', () => {
  let component: GestionApprenantsComponent;
  let fixture: ComponentFixture<GestionApprenantsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GestionApprenantsComponent]
    });
    fixture = TestBed.createComponent(GestionApprenantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

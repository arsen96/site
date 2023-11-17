import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurPaternshipsComponent } from './our-paternships.component';

describe('OurPaternshipsComponent', () => {
  let component: OurPaternshipsComponent;
  let fixture: ComponentFixture<OurPaternshipsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OurPaternshipsComponent]
    });
    fixture = TestBed.createComponent(OurPaternshipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

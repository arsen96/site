import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurActivitiesComponent } from './our-activities.component';

describe('OurActivitiesComponent', () => {
  let component: OurActivitiesComponent;
  let fixture: ComponentFixture<OurActivitiesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OurActivitiesComponent]
    });
    fixture = TestBed.createComponent(OurActivitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

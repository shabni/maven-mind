import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReenrollmentComponent } from './reenrollment.component';

describe('ReenrollmentComponent', () => {
  let component: ReenrollmentComponent;
  let fixture: ComponentFixture<ReenrollmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReenrollmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReenrollmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

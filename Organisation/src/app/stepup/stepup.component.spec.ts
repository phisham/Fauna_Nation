import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepupComponent } from './stepup.component';

describe('StepupComponent', () => {
  let component: StepupComponent;
  let fixture: ComponentFixture<StepupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StepupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StepupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAddPayComponent } from './form-add-pay.component';

describe('FormAddPayComponent', () => {
  let component: FormAddPayComponent;
  let fixture: ComponentFixture<FormAddPayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormAddPayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormAddPayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

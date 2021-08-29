import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagePaysComponent } from './page-pays.component';

describe('PagePaysComponent', () => {
  let component: PagePaysComponent;
  let fixture: ComponentFixture<PagePaysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagePaysComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PagePaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageContainersComponent } from './page-containers.component';

describe('PageContainersComponent', () => {
  let component: PageContainersComponent;
  let fixture: ComponentFixture<PageContainersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageContainersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageContainersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

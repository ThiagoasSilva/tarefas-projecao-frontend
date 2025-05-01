import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursosdetailsComponent } from './cursosdetails.component';

describe('CursosdetailsComponent', () => {
  let component: CursosdetailsComponent;
  let fixture: ComponentFixture<CursosdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CursosdetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CursosdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

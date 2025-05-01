import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisciplinasdetailsComponent } from './disciplinasdetails.component';

describe('DisciplinasdetailsComponent', () => {
  let component: DisciplinasdetailsComponent;
  let fixture: ComponentFixture<DisciplinasdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DisciplinasdetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisciplinasdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

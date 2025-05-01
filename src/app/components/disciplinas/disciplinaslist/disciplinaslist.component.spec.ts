import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisciplinaslistComponent } from './disciplinaslist.component';

describe('DisciplinaslistComponent', () => {
  let component: DisciplinaslistComponent;
  let fixture: ComponentFixture<DisciplinaslistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DisciplinaslistComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisciplinaslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

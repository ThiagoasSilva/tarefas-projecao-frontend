import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarefasdetailsComponent } from './tarefasdetails.component';

describe('TarefasdetailsComponent', () => {
  let component: TarefasdetailsComponent;
  let fixture: ComponentFixture<TarefasdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TarefasdetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TarefasdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

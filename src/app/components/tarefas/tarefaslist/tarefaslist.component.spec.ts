import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarefaslistComponent } from './tarefaslist.component';

describe('TarefaslistComponent', () => {
  let component: TarefaslistComponent;
  let fixture: ComponentFixture<TarefaslistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TarefaslistComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TarefaslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

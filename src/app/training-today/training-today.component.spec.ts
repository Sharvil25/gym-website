import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingTodayComponent } from './training-today.component';

describe('TrainingTodayComponent', () => {
  let component: TrainingTodayComponent;
  let fixture: ComponentFixture<TrainingTodayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TrainingTodayComponent]
    });
    fixture = TestBed.createComponent(TrainingTodayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

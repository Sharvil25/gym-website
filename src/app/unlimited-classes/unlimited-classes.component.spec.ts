import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnlimitedClassesComponent } from './unlimited-classes.component';

describe('UnlimitedClassesComponent', () => {
  let component: UnlimitedClassesComponent;
  let fixture: ComponentFixture<UnlimitedClassesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UnlimitedClassesComponent]
    });
    fixture = TestBed.createComponent(UnlimitedClassesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

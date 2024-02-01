import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClasscloneComponent } from './classclone.component';

describe('ClasscloneComponent', () => {
  let component: ClasscloneComponent;
  let fixture: ComponentFixture<ClasscloneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClasscloneComponent]
    });
    fixture = TestBed.createComponent(ClasscloneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
